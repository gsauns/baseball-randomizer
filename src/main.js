import * as divisionizer from './divisionizer';

console.log('*** DIVISION GENERATOR ***');

const outputDivision = (num, division) => {
    console.log('');
    console.log('--- DIVISION ' + num + ' ---');
    console.log('------------------');
    division.forEach(team => console.log(team.key + ', ' + team.data.owner + ' (team weight: ' + team.data.weight + ')'));
    console.log('------------------');
}

const divisions = divisionizer.generateDivisions();

outputDivision(1, divisions.divisionOne);
outputDivision(2, divisions.divisionTwo);
console.log('');