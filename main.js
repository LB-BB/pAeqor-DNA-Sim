// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAeqorFactory = (numId, dnaArray) => {
  return {
    specimenNum: numId,
    dna: dnaArray,
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let selectedBase = this.dna[randomIndex];
      const mutator = () => {
        let mutation = returnRandBase();
        if (selectedBase !== mutation) {
          this.dna[randomIndex] = mutation;
          return this.dna;
        }
        else {
          mutator();
        }
      }
      mutator();
    },
    compareDna(pObject) {
      let myDNA = this.dna;
      let theirDNA = pObject.dna;
      let matchCount = 0;

      for (let i = 0; i < myDNA.length; i++) {
        if (myDNA[i] === theirDNA[i]) {
          matchCount++;
        }
      }
      let matchPercent = (matchCount / myDNA.length)
      .toString()
      .slice(2, 4);

      return (`Specimen ${this.specimenNum} and Specimen ${pObject.specimenNum} have ${matchPercent}% DNA in common.`)
    },
    willLikelySurvive() {
      let cgCount = 0;
      this.dna.filter(base => {
        if (base === 'C') cgCount++;
        if (base === 'G') cgCount++
      })
      let percentage = cgCount / this.dna.length;
      if (percentage > 0.6) return true;
      else return false;
    }
  }
}

const pGenerator = () => {
  let pArray = [];
  for (let i = 0; i < 30; i++) {
    pArray.push(mockUpStrand());
  }
  return pArray;
}

let pAeqorArray = pGenerator();


