import {players} from '../src/main';

const PLAYERS_IN_LEAGUE = 12;

test('right amount of players', () => {
    expect(players.length).toBe(PLAYERS_IN_LEAGUE);
});