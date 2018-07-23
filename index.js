function produceDrivingRange(blockRange) {
  return function(start, end) {
    const dist = Math.abs(start.replace(/\D/g, '') - end.replace(/\D/g, ''));
    const diff = Math.abs(dist - blockRange);
    if (dist > blockRange) {
      return `${diff} blocks out of range`
    } else {
      return `within range by ${dist}`
    }
  }
}


function produceTipCalculator(percentage) {
  return function(produceTipCalculator) {
    return percentage * produceTipCalculator
  }
}


function createDriver() {
  let driverId = 0
  // return the class
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}
