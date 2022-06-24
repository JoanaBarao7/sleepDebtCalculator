const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8; 
      } else if (day === 'wednesday') {
      return 8; 
      } else if (day === 'thursday') {
      return 8; 
      } else if (day === 'friday') {
      return 8; 
      } else if (day === 'saturday') {
      return 8; 
      } else if (day === 'sunday') {
      return 8; 
      }
  };
  
  const getActualSleepHours = () => 1 + 8 + 6 + 10 + 8 + 10 + 9;
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than you needed! You slept ' + (actualSleepHours - idealSleepHours) + ' hours more than you should!');
    } else {
      console.log('You should get some rest! You slept less ' + (idealSleepHours - actualSleepHours) + ' hours than you needed!!');
    }
  };
  
  calculateSleepDebt();
   
  