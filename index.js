const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift();
}

function appendDriver(name){
  return [...drivers, name];
}

function prependDriver(name){
  return [name, ...drivers];
}

function removeLastDriver(){
  const newDrivers = drivers.slice();
  return newDrivers.slice(0, drivers.length-1);
}

function removeFirstDriver(){
  const newDrivers = drivers.slice();
  return newDrivers.slice(1);
}
