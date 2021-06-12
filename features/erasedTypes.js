/**
 * Lets see Explict Types example
 */
function greet(teamName, date) {
    console.log("Hello " + teamName + ", today is " + date + "!");
}
/**
 * Although we did not declare the types and yet typescript is showing an argument missing error.
 * If we run `tsc ./features/erasedTypes.ts` it will generate the respective js file
 * because typescript does not prevent it by default. Because much of the time you know better than
 * typescript.
 *
 * in order to prevent it from compiling to a js file you need to enable the flag `noEmitOnError`
 * `tsc --noEmitOnError ./features/erasedTypes.ts`
 */
greet('FED Team members');
/**
 * Now lets create a type annotation for above function.
 */
function greetWithType(teamName, date) {
    console.log("Hello " + teamName + ", today is " + date + "!");
}
/**
 * IMP
 * After transpiling you can notice two things.
 * 1) our type annotations are removed, because they dont belong to ECMAScript and browsers does not
 *  understand it. Hence we need a tsc compiler in first place to remove them and convert to plain JS.
 * 2) It is converting into either ES3 or ES5 syntax.
 */
