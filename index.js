function logDriverNames(drivers){
  drivers.forEach(function(driver){console.log(driver.name)})
}
function logDriversByHometown(drivers,hometown){
  logDriverNames(drivers.filter(function(driver){return driver.hometown === hometown}))
}
function driversByRevenue(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort(function(a,b){return a.revenue - b.revenue})
}
function driversByName(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort(function(a,b){return a.name.localeCompare(b.name)})
}
