function hasTargetSum(array, target) {
  // Write your algorithm here
  let pair=[]
  for(let i=0; i<array.length; i++){
    for(let j=i; j<array.length; j++){
      if(array[i]+array[j]==target){
        pair.push(array[i]);
        pair.push(array[j]);
        return true
      }
      else if ((array[j] + array[j])===target || (array[i] + array[i])===target ) {
        return false
      }
      else if ((array.length===1)){
        return false
      }
    }
  }

  return 
}


/* 
  Write the Big O time complexity of your function here
  o(n²) for performance and o(1) for space complexity since it 
  requires double looping and we only really store two values for returning
*/

/* 
  Add your pseudocode here
  To find two numbers that add to target, for every number i in the array we try to add number j
   to i and see if that equals target. If it is, return the pair.
*/


/*
  Add written explanation of your solution here
  A loop will be done to the array twice and return 2 values the loop will be less than the size of the array. When
  the loop finds two matching numbers that the sum is the target it returns the numbers to an array by pushing the numbers to my array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([9, 8, 7, 6, 5, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
