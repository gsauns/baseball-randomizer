import * as divisionizer from './divisionizer';

console.log('*** DIVISION GENERATOR ***');

const outputDivision = (num, division) => {
    console.log('');
    console.log('--- DIVISION ' + num + ' ---');
    console.log('------------------');
    division.forEach(team => console.log(team.key + ', ' + team.data.owner + ' (team weight: ' + team.data[divisionizer.weightAttribute] + ')'));
    console.log('------------------');
}

const arg = process.argv.length >= 3 ? process.argv[2] : null;
const divisions = divisionizer.initializeLeague(arg, true);

outputDivision(1, divisions.divisionOne);
outputDivision(2, divisions.divisionTwo);
console.log('');