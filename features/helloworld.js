/**
 * Let check if we typescript installed correctly by writing `Helloworld` program
 * and run the command `tsc ./features/helloworld.ts` in the compiler.
 * 
 * Let me also introduce you the static type checker, none other than TSC (type script compiler).
 * 
 */
const learningLangName = "Typescript";
console.log(`Hello world, Welcome to ${learningLangName}`);
/**
 * Post executing the command(mentioned in line number 3) you can see than typescript has compiled
 * the code into the js file by generating a new file with `js` extension.
 * Obviously typescript language is not understood by the browser so we do these compilation
 * so that the compile code runs in the browser.
 * 
 * You may also notice that backtick has been replaced with single quotes and const has been converted to 
 * `var`. Meaning it is converting the code into either `ES3` or `ES5`.
 */
var langName = 'typescript';
console.log(langName);
/**
 * re-run the command and see the how typescript is compiling.
 * `tsc ./features/helloworld.ts`
 * check the out put. See you in next example.
 */
