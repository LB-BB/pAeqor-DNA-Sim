//for mutate method:
let sampleArray = ['A', 'T', 'C', 'G', 'T', 'C', 'A', 'G']
let sampleObj = pAeqorFactory(3, sampleArray);

console.log(sampleObj.dna);
sampleObj.mutate();
console.log(sampleObj.dna);



const p1 = pAeqorFactory(1, ['A', 'C', 'T', 'A', 'C', 'T'])

const p2 = pAeqorFactory(2, ['G', 'A', 'T', 'G', 'A', 'T'])

console.log(p1.compareDna(p2))


const p1 = pAeqorFactory(1, ['A', 'C', 'T', 'A', 'C', 'T'])
const p2 = pAeqorFactory(2, ['G', 'C', 'T', 'G', 'C', 'T'])

console.log(p1.willLikelySurvive())