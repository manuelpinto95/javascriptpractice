//In this file we practice algorithms in which we can't use any of the fancy methods that reproduce these

const reverseArray = (array) => {
  const newArray = [];
  const originalLength = array.length;
  for (let i = 0; i < originalLength; i++) {
    if (array != [] ) {
        newArray.push(array[array.length -1]);
        array.pop();
    }
  }
  return newArray;
};

const greetAliens = (aliens) => {
  for (i = 0; i < aliens.length; i++)
    console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
};

const convertToBaby = (animals) => {
  for (i = 0; i < animals.length; i++) {
    animals[i] = 'baby ' + animals[i];
  }
  return animals;
}

const smallestPowerOfTwo = arr => {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
};

const shoutGreetings = (array) => {
  return array.map((element) => {return element.toUpperCase() + '!'});
};

const sortYearsDesc = (array) => array.sort((a, b) =>  b - a);

const oneIncludesOthers = (arr1, arr2) => arr1.filter((element) => arr2.includes(element));

//Are all objects vegan? Example: const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

const isVegan = (food) => {
    if(food.source === 'plant'){
        return true;
    }
    return false; 
}

const isTheDinnerVegan = (array) => array.every(isVegan);

const sortSpeciesByTeeth = (array) => {
  return array.sort((a, b) => a.numTeeth - b.numTeeth);
};

//find the index of a string named keys, else return -1
const findMyKeys = (array) => {
  keyLocation = array.indexOf('keys');
  return (keyLocation ? keyLocation : -1)
};

//Behold the dog factory
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(name) {
      (typeof(name)=='string') ? this._name = name : console.log('Please enter a proper string for the name value.');
    },
    set breed(breed) {
      (typeof(breed)=='string') ? this._breed = breed : console.log('Please enter a proper string for the name value.');
    },
    set weight(weight) {
      (typeof(weight)=='string') ? this._weight = weight : console.log('Please enter a proper string for the name value.');
    },
    bark() {
      return 'ruff! ruff!';
    },
    eatTooManyTreats() {
      this.weight = this.weight+1;
    }
  }
};
