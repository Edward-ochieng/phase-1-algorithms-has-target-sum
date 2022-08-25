function hasTargetSum(array, target) {
  if (array.length === 1) {
    if (array[0] === target) {
      return true;
    } else {
      return false;
    }
  } else {
    for (const a of array) {
      for (let i = array.indexOf(a) + 1; i < array.length; i++) {
        if (array.indexOf(a) !== i) {
          if (a + array[i] === target) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 

if array.length equals 1 
  if item in array equals the total
    return true;
  else return false;
if array.length is greater than one
  set counter, i, to 0 and increment by one until it's less than array.length
    set second counter, j to 0 and increment by one until it is less than array.length
    if array at index a is not equal to i and if array at position i is equal to the target
    return true

    else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("");

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  console.log("");

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  console.log("");

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
  console.log("");

  console.log("Expecting: false")
  console.log("=>", hasTargetSum([4], 4))

}

module.exports = hasTargetSum;