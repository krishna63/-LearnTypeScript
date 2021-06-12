/**
 * Type Defination Tutorial :3
 * Let's understand what is function type and how it is helpful.
 */

/**
 * In js we can assign functions to a variable
 * Problem
 */
function createMessage(name) {
  return `Hello ${name}, How are you doing ??`;
}

const userName = 'FED Team Members';
let greetingMessage = createMessage(userName);

console.log(greetingMessage); // o/p Hello FED Team Members, How are you doing ??

// Now if i pass an object.
greetingMessage = createMessage({ name: 'userName' });
console.log(greetingMessage); // o/p Hello [object object], How are you doing??

/**
 * The problem again in the above program it is not type safe,
 * So, we can create a type defination for it by using `type` keyword.
 */
type MessageCreator = (name: string) => string;

/**
 * We are saying that it is function which takes a single mandatory argument
 * and return type is string.
 * As the createMessage function is adhering to above type we can assign to `messageCreator` variable
 * as shown below.
 */
const messageCreator: MessageCreator = createMessage;

/**
 * Now repeat the line 15 and 16 you can see the compiling error
 */
greetingMessage = messageCreator(userName);
console.log(greetingMessage); // o/p Hello FED Team Members, How are you doing ??

/**
 * uncomment below line of code you will see a compiling error and now our program is typesafe
 */
//greetingMessage = messageCreator({name: userName})

/**
 * Alternatively we can also do the same thing with interface
 */
interface MessageCreaterInterface {
  (name: string): string;
}
const messageCreatorWithInterface: MessageCreaterInterface = createMessage;

/**
 * Now repeat the line 15 and 16 you can see the compiling error
 */
greetingMessage = messageCreatorWithInterface(userName);
console.log(greetingMessage); // o/p Hello FED Team Members, How are you doing ??
