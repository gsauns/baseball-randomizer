'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.players = undefined;

var _jsWeightedList = require('js-weighted-list');

var _jsWeightedList2 = _interopRequireDefault(_jsWeightedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var leagueMembers = [{ key: 'Baseball Stars', weight: 1 }, { key: 'Cincinnati Bowties', weight: 2 }, { key: 'Dateline Predators', weight: 3 }, { key: 'McCann You Dig It?', weight: 4 }, { key: 'Miami Gators', weight: 5 }, { key: 'New York Meats', weight: 6 }, { key: 'Reinstate Rose', weight: 7 }, { key: 'Sons of Pitches', weight: 8 }, { key: 'Speling Bee Champs', weight: 9 }, { key: 'SuckItRedBirds', weight: 10 }, { key: 'Tread Lightly', weight: 11 }, { key: 'The Ulfberht', weight: 12 }];

var players = exports.players = new _jsWeightedList2.default(leagueMembers);