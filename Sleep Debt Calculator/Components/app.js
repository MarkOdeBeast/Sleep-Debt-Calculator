const getSleepHours = day => {
    switch(day){
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 6
        break;
      case 'thursday':
        return 5
        break;
      case 'friday':
        return 9
        break;
      case 'saturday':
        return 10
        break;
      case 'sunday':
        return 4
        break;
      default:
        console.log('error wrong input.')  
    } 
  };
  
  const getActualSleepHours = () => 
    8 + 7 + 6 + 5 + 9 + 10 + 4
  
  
  console.log(getActualSleepHours())
  
  const getIdealSleepHours = idealHours => 
    idealHours * 7; 
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(8)
    const idealSleepHours = getIdealSleepHours()
    if(actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.') 
    }else if(actualSleepHours > idealSleepHours) {
      console.log('You got' + (actualSleepHours - idealSleepHours) +  ' hours more sleep than is necessary.')
    }else if(actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) +  ' hours less sleep than the ideal sleep, you should get some rest.')
    }
  };
  calculateSleepDebt()