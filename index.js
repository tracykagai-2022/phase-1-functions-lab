function distanceFromHqInBlocks(number) {
    return Math.abs(42 - number);
  }
  const x = distanceFromHqInBlocks(number);

  function distanceFromHqInFeet(number){
    return Math.abs(42 - number) * 264;
  }
  const y = distanceFromHqInFeet(number);

  function distanceTravelledInFeet(start, destination){
    const z= Math.abs( start - destination);
    
    return z * 264;
    }
    distanceTravelledInFeet(38, 34);

    function calculatesFarePrice(start, destination){
        const z= Math.abs( start - destination);
        let feet = z * 264;
      if (feet <= 400) 
      {
        return 0;
      }
      else if(feet < 2000)
      {
        let fare = (feet - 400)*0.02
        return fare;
      }
      else if (feet < 2500) 
      {
        return 25;
      }
      else
      {
        return 'cannot travel that far';
      } 
    }
    console.log(calculatesFarePrice(50, 58));