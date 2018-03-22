'use strict';
import WeightedList from 'js-weighted-list';

// Divisions will be:
//  1,  4,  5,  8,  9, 12
//  2,  3,  6,  7, 10, 11
const divisionOneIndexes = [1, 4, 5, 8, 9, 12];
const divisionTwoIndexes = [2, 3, 6, 7, 10, 11];

export const PLAYERS_IN_LEAGUE = 12;

const leagueMembers = [
    {key: 'Baseball Stars', weight: 1},
    {key: 'Cincinnati Bowties', weight: 2},
    {key: 'Dateline Predators', weight: 3},
    {key: 'McCann You Dig It?', weight: 4},
    {key: 'Miami Gators', weight: 5},
    {key: 'New York Meats', weight: 6},
    {key: 'Reinstate Rose', weight: 7},
    {key: 'Sons of Pitches', weight: 8},
    {key: 'Speling Bee Champs', weight: 9},
    {key: 'SuckItRedBirds', weight: 10},
    {key: 'Tread Lightly', weight: 11},
    {key: 'The Ulfberht', weight: 12}
];

export const players = new WeightedList(leagueMembers);

export const generateDivisions = () => {
    const data = players.peek(PLAYERS_IN_LEAGUE);
    let divisionOne = [], divisionTwo = [];

    for (let i = 0; i < PLAYERS_IN_LEAGUE; i++) {
        console.log(data[i]);
    }
}


