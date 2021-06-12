/**
 * Lets see Explict Types example
 */
function greet(teamName, date) {
  console.log(`Hello ${teamName}, today is ${date}!`);
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
function greetWithType(teamName: string, date: Date) {
  console.log(`Hello ${teamName}, today is ${date}!`);
}

greetWithType('FED Team members', new Date());
/**
 * IMP
 * After transpiling you can notice two things.
 * 1) our type annotations are removed, because they dont belong to ECMAScript and browsers does not
 *  understand it. Hence we need a tsc compiler in first place to remove them and convert to plain JS.
 * 2) It is converting into either ES3 or ES5 syntax. The process of converting to lower version of JS
 * is called downleveling.
 *
 * Open the transpiled file and lets see how it got converted.
 */

/**
 * Let's see few more flags realted to Strictness.
 *  - noImplicitAny
 *  - stictNullChecks -- Checks whether the null and undefined values are handled by the program appropriately
 *
 * To enable all flags either pass --strict in cli or `strict:true` in ts config file
 * Alternatively you can use above mentioned individual flags as well
 *
 * Few points related to strictness:
 *
 * Some people require loose type checking, for example if it is an existing project then at times
 * typescript may not be able to infer the types automatically and it fall back to `any` type.
 * So again it is a plain old JS.  But typescript wont prevent from converting to JS, but the trade off's
 * are lost.
 *
 * If it is a new project then it is preferrable to enable the above mentioned settings and start
 * writing the code
 *
 */
