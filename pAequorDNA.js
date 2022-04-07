// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};

function pAequorFactory(specimenNum, dna) { 
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate () {
      this.dna[Math.floor(Math.random() * dna.length)] = returnRandBase();
      return this.dna;
  },
    willLikelySurvive() {
      const goodDna = this.dna.filter(letter => letter === 'C' || letter === 'G');
      return (goodDna.length / this.dna.length >= 0.6) ? true : false;
    }
  }
};

const mutate = (dna) => {
  dna[Math.floor(Math.random() * dna.length)] = returnRandBase();
  return dna;
};

const compareDNA = (otherOrganism) => 
{
  let incremental = 0;
  for (let i = 0; i < pAequor.dna.length ; i++) {
    if (pAequor.dna[i] === otherOrganism.dna[i]) {
      incremental++
    }
  }
  return Math.round((incremental / pAequor.dna.length) * 100);
};

let pAequorInstances = [];
for (let i = 0; i < 30; i++) {
  let instance = pAequorFactory(i,  mockUpStrand());
  if (instance.willLikelySurvive()) {
    pAequorInstances.push(instance);
  }
  i++;
};
