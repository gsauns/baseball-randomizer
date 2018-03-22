import * as divisionizer from '../src/divisionizer';

const PLAYERS_IN_LEAGUE = 12;

test('right amount of players in weighted list', () => {
    expect(divisionizer.players.length).toBe(PLAYERS_IN_LEAGUE);
});