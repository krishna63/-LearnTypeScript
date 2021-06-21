/**
 * strictNullChecks
 * noImplicitAny
 *
 * NonNullAssertionOperator(!)
 *
 * Below are the flags are recommended while developing a typescript project
 */

let stingType;
function learningScript(lang) {}
learningScript(123);

function doSomething(x: string | null) {
  console.log('Hello, ' + x.toUpperCase());
}

doSomething(null);
