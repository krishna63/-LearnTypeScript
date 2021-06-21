/**
 * Type Defination Tutorial :1
 * Primitive Types:  Commonly used basic types in javascript are
 *
 *  - string,
 *  - number
 *  - boolean
 *
 * Types are implicitly inferred by the type of the value you have assigned to it.
 * But you can assign the Type explictly as well.
 * Hence the language as the name `Typescript`, as we are defining the types.
 * Now when you hover on the variable names you can see the type of it.
 */
let implicitStringVariable =
  'based on my value, typescript set its variable type to string';
let explictStringVariable: string = 'explictly defining type variable';

/**
 * The same applies for the string, number and boolean
 */
const implicitNumberVariable = 10;
const explicitNumberVariable: number = 100;

const implictBooleanVariable = true;
const explictBooleanVariable: boolean = false;

/**
 * There is one more type which typescript default's to, when tsc compiler could not infer
 * the type. It is `any`. While `any` type is useful when you dont want to write a long type
 * to convince Typescript, but it is not advisable to use because there is no type-checking.
 */

let anyTypeVariable = {
  property1: 0,
};

console.log('-----Ran the program----------');
