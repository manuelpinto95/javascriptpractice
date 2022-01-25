/* Hi! Nice to see you there. This will be a js file with a collection of a bunch of vanilla Javascript exercises to pratice fundamentals. Enjoy your stay! */

//Can someone vote? 
const canIVote = age => {
  if (age < 18) 
    return false;
  else if (age >= 18) 
    return true;
  else {
    console.log('something went wrong here, let\'s say that they can\'t vote?')
    return false;
  }
};

//agree if they say the same
const agreeOrDisagree = (stringOne, stringTwo) => {
  if (stringOne === stringTwo) 
    return 'You agree!'
  else
    return 'You disagree!'
}

//  I should be less lazy and verify the types of the arguments passed into functions. Typescript here we go? Nope, this is VANILLA 
const lifePhase = age => {
  if  (!(Number.isInteger(age))) 
    return 'This is not a number, come on!';
  
  if (age >= 0 && age <=3)
      return 'baby';
  else if (age >= 4 && age <=12)
      return 'child';
  else if (age >= 13 && age <=19)
      return 'teen';
  else if (age >= 20 && age <=64)
      return 'adult';
  else if (age >= 65 && age <=140)
      return 'senior citizen';
  else
      return 'This is not a valid age';
}

//Get your american grade! (By the way, how should I ident that if? Suggestions are welcome. Again, a "between" function would make my life easy here.
const finalGrade = (grade1, grade2, grade3) => {
  let minimumGrade = 0;
  let maximumGrade = 100;
  if  ( !((Number.isInteger(grade1) || Number.isInteger(grade2) || Number.isInteger(grade3)))
        || 
        (grade1 < minimumGrade || grade1 > maximumGrade || grade2 < minimumGrade || grade2 > maximumGrade || grade3 < minimumGrade || grade3 > maximumGrade)
      ) 
    return 'You have entered an invalid grade.';
  let finalGrade = (grade1 + grade2 + grade3) / 3;
  if (finalGrade >= 0 && finalGrade <=59)
      return 'F';
  else if (finalGrade >= 60 && finalGrade <=69)
      return 'D';
  else if (finalGrade >= 70 && finalGrade <=79)
      return 'C';
  else if (finalGrade >= 80 && finalGrade <=89)
      return 'B';
  else if (finalGrade >= 90 && finalGrade <=100)
      return 'A';
  else
      return 'You have entered an invalid grade.';
}

// String interpolation rules. So readable, so lazy. 
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;

//Roll two dice with one line of code and zero saved variables because it's efficient. Note how this will always be between 2 and 12
const rollTheDice = () => (Math.floor(Math.random() * 5) + 1) + (Math.floor(Math.random() * 5) + 1) ;

// Switch case practice
const calculateWeight = (earthWeight, planet) => {
  planet = planet.toLowerCase();
  switch(planet) {
    case 'mercury':
      return earthWeight * 0.378;
      break;
    case 'venus':
      return earthWeight * 0.907;
      break;
    case 'mars':
      return earthWeight * 0.377;
      break;
    case 'jupiter':
      return earthWeight * 2.36;
      break;
    case 'saturn':
      return earthWeight * 0.916;
      break;
    default: 
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';    
  }
};

//Here I learned that you can just do (!true) instead of (!(true)). Great, I should have used that before.
// Write your function here:
const truthyOrFalsy = (argument) => {
  if (argument) {
    return true;
  }
  else if (!argument) {
    return false;
  }
  else 
    console.log('Something went wrong. Function not returning anything back');
};

//what a weird excuse to use Math.ceil()
const numImaginaryFriends = friends => Math.ceil(friends * 0.25);
  
//I am so sleepy because I am coding. Time to write some more awesome string interpolations! 
const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;

//The perfect program for your grandma to remember the nostalgia of the good ol' 70s
var currentTime = new Date();
const CURRENT_YEAR = currentTime.getFullYear();
const howOld = (age, year) => {
  const BORN_YEAR = CURRENT_YEAR - age;
  if (year > CURRENT_YEAR)
    return 'You will be ' + (year - CURRENT_YEAR + age) + ' in the year ' + year;
  else if (year < CURRENT_YEAR && year > BORN_YEAR) 
    return 'You were ' + (year - BORN_YEAR) + ' in the year ' + year;
  else if (year < BORN_YEAR)
    return 'The year ' + year + ' was ' + Math.abs(BORN_YEAR - year) + ' years before you were born';
}

//Getting a bit tired of if statements. When we getting into the loops? 
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    }
    if (percentSharedDNA > 34 && percentSharedDNA < 100) {
        return 'You are likely parent and child or full siblings.';
    }
    if (percentSharedDNA > 13 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    }
    if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.';
    }
    if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.';
    }
    if (percentSharedDNA > 0 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins';
    }
    return 'You are likely not related.';
};

//Tip calculator for all my american friends
const tipCalculator = (quality, total) => {
  switch(quality) {
    case 'bad':
      return total * 0.05;
      break;
    case 'ok':
      return total * 0.15;
      break;
    case 'good':
      return total * 0.20;
      break;
    case 'excellent':
      return total * 0.30;
      break;
    default:
      return total * 0.18;
      break;    
  }
};

//last one I promise.
const toEmoticon = string => {
  switch(string) {
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break;
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
      break;    
  }
};
