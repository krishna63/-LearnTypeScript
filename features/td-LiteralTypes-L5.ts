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
let tsVersionInString = '4.3';

tsVersionInString = '4.2.9';

/**
 * As the type conversion can be comprehensive type script throws an error
 * with the code mentioned below, so we need to use two assertions.
 *
 * Also remember that type assertion is feasible from more specific version
 * to less specific version. Eg: converting string to number is not feasible
 */
//const tsVersionInNumber: number = tsVersionInString as number;

const tsVersionInNumber: number = tsVersionInString as any as number;

console.log(tsVersionInNumber);

/**
 * A more realistic example.
 *
 * document.getElementById returns an HTMLElement, but at times
 * you might query a canvas element as well and it is of type HTMLCanvasElement.
 *
 * Lets query a normal and a canvas element
 */
let domElement: HTMLElement = document.getElementById('htmlElement');
const propertyName = 'captureStream';

console.log(
  `${domElement} elements don't have ${propertyName} ==>, ${domElement[propertyName]}`
);

domElement = document.getElementById('canvasElement') as HTMLCanvasElement;
//domElement.captureStream;

console.log(
  `${domElement} elements don't have ${propertyName} ==>, ${domElement[propertyName]}`
);

/**
 * Literal Types.
 * When we dont want to change a value of a variable then we declare it as a constant.
 * In the same way we can declaring using the of it.
 */
let position = 'left';

let positionLiteralType: 'left' = 'left';

/**
 * Bascially literal types are not useful by them selves, but if you combine with union
 * types then it makes more sense
 */
interface ButtonProps {
  kind: 'primary' | 'secondary' | 'territary';
}

let buttonProp: ButtonProps = {
  kind: 'primary',
};

/**
 * Lets take one more example
 */
function handleRequest(url: string, method: 'GET' | 'POST') {}
const req = { url: 'https://www.typescriptlang.org/', method: 'GET' };
//handleRequest(req.url, req.method);

/**
 * So to over come this behaviour
 * const req = { url: 'https://www.typescriptlang.org/', method: 'GET' as 'GET' };
 * based on values it inference the type and if same type with different value is passed
 * then also it is valid that is how Typescript infers, where as it is not the case over
 * here. Hence we need to do follow one or other way.
 */
handleRequest(req.url, req.method as 'GET');

// OR

const reqAsConst = {
  url: 'https://www.typescriptlang.org/',
  method: 'GET',
} as const;
