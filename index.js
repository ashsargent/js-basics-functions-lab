// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else return 42 - block;
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}


function distanceTravelledInFeet(b1, b2) {
  if (b1>b2) {
    return ((b1-b2)*264);
  } else {
    return ((b2-b1)*264);
  }
}

function calculatesFarePrice (b1, b2) {
  const distance = distanceTravelledInFeet (b1, b2);
    if (distance < 400) {
      return 0;
    } else if (distance <= 2000) {
        return ((distance - 400)*0.02);
    } else if (distance <= 2501)
        return (25);
      else {
        return ("cannot travel that far");
      }
  }
