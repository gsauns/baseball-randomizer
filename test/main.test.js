import * as divisionizer from '../src/divisionizer';
const fs = require('fs');

//const divisions = divisionizer.generateDivisions();
beforeAll(() => {
    divisionizer.initializeLeague(null, false);
})

test('JSON is read', () => {
    const league_json = fs.readFileSync('data/league.json');
    expect(league_json).not.toBeNull();
})

test('initializes', () => {
    expect(divisionizer.players.length).toBe(divisionizer.PLAYERS_IN_LEAGUE);
});

test('right amount of players in weighted list', () => {
    expect(divisionizer.players.length).toBe(divisionizer.PLAYERS_IN_LEAGUE);
});

test('shuffled divisions are evenly divided', () => {
    const divisions = divisionizer.generateDivisions();
    expect(divisions.divisionOne.length).toBe(divisions.divisionTwo.length);
});

test('divisions have expected number of members', () => {
    const divisions = divisionizer.generateDivisions();
    expect(divisions.divisionOne.length).toBe(divisionizer.PLAYERS_IN_LEAGUE / 2);
});