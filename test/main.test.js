import * as divisionizer from '../src/divisionizer';
const fs = require('fs');

const divisions = divisionizer.generateDivisions();

test('JSON is read', () => {
    const league_json = fs.readFileSync('data/league.json');
    expect(league_json).not.toBeNull();
})

test('right amount of players in weighted list', () => {
    expect(divisionizer.players.length).toBe(divisionizer.PLAYERS_IN_LEAGUE);
});

test('shuffled divisions are evenly divided', () => {
    expect(divisions.divisionOne.length).toBe(divisions.divisionTwo.length);
});

test('divisions have expected number of members', () => {
    expect(divisions.divisionOne.length).toBe(divisionizer.PLAYERS_IN_LEAGUE / 2);
});