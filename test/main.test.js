import * as divisionizer from '../src/divisionizer';

test('right amount of players in weighted list', () => {
    expect(divisionizer.players.length).toBe(divisionizer.PLAYERS_IN_LEAGUE);
});

test('we do a shuffle', () => {
    divisionizer.generateDivisions();
    expect(true).toBe(true);
});