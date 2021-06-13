/**
 * Type Defination Tutorial 2
 * Let's understand what is function type and how it is helpful.
 */
/**
 * In js we can assign functions to a variable
 * Problem
 */
function createMessage(name) {
    return "Hello " + name + ", How are you doing ??";
}
var userName = 'FED Team Members';
var greetingMessage = createMessage(userName);
console.log(greetingMessage); // o/p Hello FED Team Members, How are you doing ??
// Now if i pass an object.
greetingMessage = createMessage({ name: 'userName' });
console.log(greetingMessage); // o/p Hello [object object], How are you doing??
/**
 * Parameter and return type annotation.
 * Explain the syntax.
 */
function createMessageWithType(name) {
    return "Hello " + name + ", How are you doing ??";
}
/**
 * We are saying that it is function which takes a single mandatory argument
 * and return type is string.
 * As the createMessage function is adhering to above type we can assign to `messageCreator` variable
 * as shown below.
 */
var messageCreator = createMessage;
/**
 * Now repeat the line 15 and 16 you can see the compiling error
 */
greetingMessage = messageCreator(userName);
console.log(greetingMessage); // o/p Hello FED Team Members, How are you doing ??
var messageCreatorWithInterface = createMessage;
/**
 * Now repeat the line 15 and 16 you can see the compiling error
 */
greetingMessage = messageCreatorWithInterface(userName);
console.log(greetingMessage); // o/p Hello FED Team Members, How are you doing ??
