/**
 * Lets learn :
 *  - Type assertion
 *  - Literal types and interface
 */
/**
 * At times we need to convert types in javascript for example converting
 * string to number and it is achieved in type assertion.
 *
 * keyword: `as`
 */
var tsVersionInString = '4.3';
tsVersionInString = '4.2.9';
/**
 * As the type conversion can be comprehensive type script throws an error
 * with the code mentioned below, so we need to use two assertions.
 *
 * Also remember that type assertion is feasible from more specific version
 * to less specific version. Eg: converting string to number is not feasible
 */
//const tsVersionInNumber: number = tsVersionInString as number;
var tsVersionInNumber = tsVersionInString;
console.log(tsVersionInNumber);
/**
 * A more realistic example.
 *
 * document.getElementById returns an HTMLElement, but at times
 * you might query a canvas element as well and it is of type HTMLCanvasElement.
 *
 * Lets query a normal and a canvas element
 */
var domElement = document.getElementById('htmlElement');
var propertyName = 'captureStream';
console.log(domElement + " elements don't have " + propertyName + " ==>, " + domElement[propertyName]);
domElement = document.getElementById('canvasElement');
//domElement.captureStream;
console.log(domElement + " elements don't have " + propertyName + " ==>, " + domElement[propertyName]);
