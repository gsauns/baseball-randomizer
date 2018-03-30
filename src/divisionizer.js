'use strict';
import WeightedList from 'js-weighted-list';
import { DEFAULT_ECDH_CURVE } from 'tls';
const fs = require('fs');

// Divisions will be:
//  1,  4,  5,  8,  9, 12
//  2,  3,  6,  7, 10, 11
const divisionOneIndexes = [1, 4, 5, 8, 9, 12];
const divisionTwoIndexes = [2, 3, 6, 7, 10, 11];

export const PLAYERS_IN_LEAGUE = 12;
const DEFAULT_WEIGHT_ATTRIBUTE = 'pointsrank';
export let players, weightAttribute;

export const initializeLeague = ((attributeToUse, run) => {
    if (!attributeToUse)
        attributeToUse = DEFAULT_WEIGHT_ATTRIBUTE;
    weightAttribute = attributeToUse;

    console.log('Weight attribute: ' + weightAttribute)
    
    const data = fs.readFileSync('data/league.json');
    const league = JSON.parse(data);

    for (let i = 0; i < league.length; i++) {
        league[i]['weight'] = league[i].data[weightAttribute];
    }

    players = new WeightedList(league);
    if (run)
        return generateDivisions();
});

export const generateDivisions = () => {
    const data = players.peek(PLAYERS_IN_LEAGUE);
    let divisionOne = [], divisionTwo = [];

    for (let i = 0; i < players.length; i++) {
        let divIndex = i + 1;
        data[i]['random_index'] = divIndex;
        divisionOneIndexes.includes(divIndex) ? divisionOne.push(data[i]) : divisionTwo.push(data[i]);
    }

    return {
        divisionOne: divisionOne,
        divisionTwo: divisionTwo
    };
}


