function logDriverNames(drivers){
  drivers.forEach(function(driver){console.log(driver.name)})
}
function logDriversByHometown(drivers,hometown){
  logDriverNames(drivers.filter(function(driver){return driver.hometown === hometown}))
}
function driversByRevenue(drivers){
  let newDrivers = [...drivers]
  newDrivers.sort(function(driver1,driver2){return driver1.revenue - driver2.revenue})
}
