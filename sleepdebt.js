const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 4;
      break;
   case 'tuesday':
      return 9;
      break;
   case 'wednesday':
      return 5;
      break;
   case 'thursday':
      return 7;
      break;
   case 'friday':
      return 5;
      break;
   case 'saturday':
      return 9;
      break;
   case 'sunday':
      return 10;
      break;   
   default:
      return 8;
      break;  
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


const getIdealSleepHours = (hours) => {
  let idealHours = hours;
  return idealHours * 7;
} //this would be per day..

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours)
    console.log('You slept well ');
  else if (actualSleepHours > idealSleepHours)
    console.log('You slept REALLY well');
  else if (actualSleepHours < idealSleepHours)
    console.log('You slept REALLY badly. Sleep an extra ' + (idealSleepHours - actualSleepHours) + ' hours!');
  else 
    console.log('Throw an error I guess');
}

calculateSleepDebt();
