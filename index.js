// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(x) {
    return x.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driver.filter(x => x.revenue > revenue).map(y => y.name);
}
//this problem uses pointers which is for the newer version of JS

function exactMatch(driver, object) {
  return driver.filter(function(driverObject) {
    for (const key in driverObject) {
      if (object[key] === driverObject[key])
      return true;
    } 
  });
}

function exactMatchToList(driver, object) {
  const filterDrivers = driver.filter(function(driverObject) {
    for (const key in driverObject) {
      if (object[key] === driverObject[key])
      return true;
    }
  })
  return filterDrivers.map(function(filtObj) {
    return filtObj.name;
  }) 
  //currently i have the an array of the driver objects that match the object argument
  //create a new array with just the names of those matching objects by using the map function
  
}