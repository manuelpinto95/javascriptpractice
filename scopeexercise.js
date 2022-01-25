/*
This exercise was to correct scope from this code. 
This is the solution, before the random constant was global and the scope of the days variable was inside the if statements, leading to reference errors. 
Log events also had hardcoded inside the function a constant "name". Here we hardcode it outside. Not good, but it's what the exercise was made for. Easy :)
*/
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};


const getTrainingDays = event => {
  let days = 0;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};


const logEvent = event => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);


logEvent(event);
logTime(days);

const name = 'Warren';
const event = getRandEvent();
const days = getTrainingDays(event);
