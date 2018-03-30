'use strict';
import WeightedList from 'js-weighted-list';
const fs = require('fs');

// Divisions will be:
//  1,  4,  5,  8,  9, 12
//  2,  3,  6,  7, 10, 11
const divisionOneIndexes = [1, 4, 5, 8, 9, 12];
const divisionTwoIndexes = [2, 3, 6, 7, 10, 11];

export const PLAYERS_IN_LEAGUE = 12;

const league_json = fs.readFileSync('data/league.json');
const leagueMembers = JSON.parse(league_json);

export const players = new WeightedList(leagueMembers);

export const generateDivisions = () => {
    const data = players.peek(PLAYERS_IN_LEAGUE);
    let divisionOne = [], divisionTwo = [];

    for (let i = 0; i < PLAYERS_IN_LEAGUE; i++) {
        let divIndex = i + 1;
        //console.log(data[i]);
        divisionOneIndexes.includes(divIndex) ? divisionOne.push(data[i]) : divisionTwo.push(data[i]);
    }

    return {
        divisionOne: divisionOne,
        divisionTwo: divisionTwo
    };
}


