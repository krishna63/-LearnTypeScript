/**
 * Type Defination Tutorial :1
 * Primitive Types:
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

console.log('-----Ran the program----------');
