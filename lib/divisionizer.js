'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateDivisions = exports.initializeLeague = exports.weightAttribute = exports.players = exports.PLAYERS_IN_LEAGUE = undefined;

var _jsWeightedList = require('js-weighted-list');

var _jsWeightedList2 = _interopRequireDefault(_jsWeightedList);

var _tls = require('tls');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

// Divisions will be:
//  1,  4,  5,  8,  9, 12
//  2,  3,  6,  7, 10, 11
var divisionOneIndexes = [1, 4, 5, 8, 9, 12];
var divisionTwoIndexes = [2, 3, 6, 7, 10, 11];

var PLAYERS_IN_LEAGUE = exports.PLAYERS_IN_LEAGUE = 12;
var DEFAULT_WEIGHT_ATTRIBUTE = 'pointsrank';
var players = exports.players = void 0,
    weightAttribute = exports.weightAttribute = void 0;

var initializeLeague = exports.initializeLeague = function initializeLeague(attributeToUse, run) {
    if (!attributeToUse) attributeToUse = DEFAULT_WEIGHT_ATTRIBUTE;
    exports.weightAttribute = weightAttribute = attributeToUse;

    console.log('Weight attribute: ' + weightAttribute);

    var data = fs.readFileSync('data/league.json');
    var league = JSON.parse(data);

    for (var i = 0; i < league.length; i++) {
        league[i]['weight'] = league[i].data[weightAttribute];
    }

    exports.players = players = new _jsWeightedList2.default(league);
    if (run) return generateDivisions();
};

var generateDivisions = exports.generateDivisions = function generateDivisions() {
    var data = players.peek(PLAYERS_IN_LEAGUE);
    var divisionOne = [],
        divisionTwo = [];

    for (var i = 0; i < players.length; i++) {
        var divIndex = i + 1;
        data[i]['random_index'] = divIndex;
        divisionOneIndexes.includes(divIndex) ? divisionOne.push(data[i]) : divisionTwo.push(data[i]);
    }

    return {
        divisionOne: divisionOne,
        divisionTwo: divisionTwo
    };
};