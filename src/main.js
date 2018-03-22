import * as divisionizer from './divisionizer';

console.log('*** DIVISION GENERATOR ***');

const outputDivision = (num, division) => {
    console.log('');
    console.log('--- DIVISION ' + num + ' ---');
    console.log('-----------------');
    division.forEach(team => console.log(team.key + ' (team weight: ' + team.data.weight + ')'));
}

const divisions = divisionizer.generateDivisions();

outputDivision(1, divisions.divisionOne);
outputDivision(2, divisions.divisionTwo);