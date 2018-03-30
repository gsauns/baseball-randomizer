'use strict';

var _divisionizer = require('./divisionizer');

var divisionizer = _interopRequireWildcard(_divisionizer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log('*** DIVISION GENERATOR ***');

var outputDivision = function outputDivision(num, division) {
    console.log('');
    console.log('--- DIVISION ' + num + ' ---');
    console.log('------------------');
    division.forEach(function (team) {
        return console.log(team.key + ', ' + team.data.owner + ' (index: ' + team.random_index + ', team weight: ' + team.data[divisionizer.weightAttribute] + ')');
    });
    console.log('------------------');
};

var arg = process.argv.length >= 3 ? process.argv[2] : null;
var divisions = divisionizer.initializeLeague(arg, true);

outputDivision(1, divisions.divisionOne);
outputDivision(2, divisions.divisionTwo);
console.log('');