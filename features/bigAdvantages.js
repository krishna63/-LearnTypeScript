/**
 * Advantage 1: Program is type safe
 */
var stringVariable = 'typescript';
/**
 * uncomment below line of code you will see error at compile time
 * only rather than run time, but we lost flexibility of javascript ?
 * now check next variable
 */
//stringVariable = 10
// Without loosing flexibility
var stringOrNumberVariable = 'typescript';
stringOrNumberVariable = 4.6;
console.log(stringOrNumberVariable);
/**
 * Advantage 2: Leveraging the advanced features of Javascript
 *  1) Arrow functions are not supported by all browsers, but still we can
 *  leverage them and typescript compiler converts the code into ES5, so that
 *  the code runs in all browsers and operating systems.
 */
var player = {
    name: 'Sachin tendulkar',
    plays: function () { return console.log("He plays cricket"); }
};
console.log('Player Info:: ', player);
/**
 * Advantage 3: It can be used for both front end and back end development of the project.
 * Advantage 4: It can help in showing the defination, types of the variable
 * See you in the next section.
 */
