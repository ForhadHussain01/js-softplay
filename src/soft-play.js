// do not change these lines

function reset() {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

function enter(numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults = adults + numAdults
    children = children + numChildren

    return true
  } else if (numAdults < numChildren) {
    return false
  }
}

function leave(numAdults, numChildren) {
  const childrenRemaining = children - numChildren
  const adultsRemaining = adults - numAdults

  if (
    numAdults >= numChildren &&
    numAdults <= adults &&
    numChildren <= children &&
    adultsRemaining >= childrenRemaining
  ) {
    adults = adultsRemaining
    children = childrenRemaining

    return true
  } else {
    return false
  }
}
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy,
  reset
}
