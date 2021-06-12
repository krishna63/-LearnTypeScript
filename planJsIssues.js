/**
 * Example of Javascript not showing the problems at compile time but it will show at run time
 */
const a = "typescript";
a = "javascript";

/**
 * Example of Javascript not showing the problems w.r.t scope of the variables
 * Although we can replace var by let, but still you will see an error when you run the code.
 */
if (true) {
  var b = "blockscoped variable";
  console.log("this variable is not supposed to be used outside ", b);
}

console.log("this variable is not supposed to be used accessible out side of if block ", b);
