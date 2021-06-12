/**
 * Let check if we typescript installed correctly by writing `Helloworld` program
 * and run the command `tsc ./features/helloworld.ts` in the compiler.
 */
console.log('Hello world, Welcome to Typescript');
/**
 * Post executing the above command you can see than typescript has compiled
 * the code into the js file by generating a new file with `js` extension.
 * Obviously typescript language is not understood by the browser so we do these compilation
 * so that the compile code runs in the browser.
 */
let langName = 'typescript';
console.log(langName);

/**
 * re-run the command and see the how typescript is compiling.
 * `tsc ./features/helloworld.ts`
 * check the out put. It has converted the `let` variable into `var`.
 * See you in next example.
 */
