/**
 * Type Defination Tutorial 3
 * Let's understand what are union types and how to program in functions.
 *
 * Union Types: Typescript allows you to build a new types using the existing one and by leveraging the
 * large operators.
 */
function printEmpId(uid: string | number): void {
  console.log(`User passed value is:: ${uid}`);
}

// Ok - as function accepts number
printEmpId(1527364);

// Ok - as function accepts string.
printEmpId('u400463');

// Not Ok - as an object is passed.
printEmpId({ uid: 'u400463' });

/**
 * Lets assume we want to run different code based on type.
 * For example `toLowerCase`, but tht method is not available on number so we use `typeof`
 * and write conditional code.
 * so let's rewrite the above function. We did not loose the JS flexibility but
 * we wrote a type safe program.
 */
function printEmployeeId(uid: string | number): void {
  if (typeof uid === 'string') {
    // write the code here
    console.log(`User passed value is:: ${uid.toLowerCase()}`);
  } else {
    console.log(`User passed value is:: ${uid}`);
  }
}

/**
 * Another Example of union type.
 */
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log('Hello, ' + x.join(' and '));
  } else {
    // Here: 'x' is 'string'
    console.log('Welcome lone traveler ' + x);
  }
}
