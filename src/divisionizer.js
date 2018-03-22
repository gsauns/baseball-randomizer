'use strict';
import WeightedList from 'js-weighted-list';

// Divisions will be:
//  1,  4,  5,  8,  9, 12
//  2,  3,  6,  7, 10, 11
const divisionOneIndexes = [1, 4, 5, 8, 9, 12];
const divisionTwoIndexes = [2, 3, 6, 7, 10, 11];

export const PLAYERS_IN_LEAGUE = 12;

const leagueMembers = [
    {key: 'Baseball Stars', weight: 8, data: { owner: 'Jason Hughes', weight: 8 }},
    {key: 'Cincinnati Bowties', weight: 4, data: { owner: 'Jeff Helvie', weight: 4 }},
    {key: 'Dateline Predators', weight: 12, data: { owner: 'Matt Howes', weight: 12 }},
    {key: 'McCann You Dig It?', weight: 6, data: { owner: 'Jack Elsey', weight: 6 }},
    {key: 'Miami Gators', weight: 3, data: { owner: 'Chris Eckel', weight: 3 }},
    {key: 'New York Meats', weight: 11, data: { owner: 'Greg Saunsen', weight: 11 }},
    {key: 'Reinstate Rose', weight: 1, data: { owner: 'Chris Gibson', weight: 1 }},
    {key: 'Sons of Pitches', weight: 7, data: { owner: 'Jason Johnson', weight: 7 }},
    {key: 'Speling Bee Champs', weight: 9, data: { owner: 'Andy Hubbs', weight: 9 }},
    {key: 'SuckItRedBirds', weight: 2, data: { owner: 'Judd Hale', weight: 2 }},
    {key: 'Tread Lightly', weight: 10, data: { owner: 'Mike Brenner', weight: 10 }},
    {key: 'The Ulfberht', weight: 5, data: { owner: 'Sean Griffin', weight: 5 }}
];

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


