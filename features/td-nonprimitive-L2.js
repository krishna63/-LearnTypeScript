/**
 * Type Defination Tutorial :2
 * Let's start with implicit declaration of objects
 */
var langInformation = {
    name: 'typescript',
    vendor: 'microsoft'
};
/**
 * Uncomment below line of code, you will see an error by typescript compiler, because it implicitly
 * define the types as follow and wont allow any new properties to that object.
 * const langInformation: {name: string, vendor: string} = { <key>: <values>}
 *
 * Hence it was throwing an error. So to fix this we have to declare its type as any
 */
//langInformation.currentVersion = 4.6;
var langInformationAsAnyType = {
    name: 'typescript',
    vendor: 'microsoft'
};
langInformationAsAnyType.currentVersion = 4.6;
var langInformationWithCustomType = {
    name: 'typescript',
    vendor: 'microsoft'
};
/**
 * In the above declartion we have skipped currentVersion as it optional and in order to make
 * it optional, all we need to do is suffix it with `?`.
 */
langInformationWithCustomType.currentVersion = 4.6;
var langInfoUsingComplexType = {
    basicInfo: {
        name: 'typescript',
        vendor: 'microsoft'
    },
    moreDetails: {
        advantages: [
            'compile time error',
            'type safe',
            'can develop front end and back end code',
        ]
    }
};
var langInformationWithInterface = {
    name: 'typescript',
    currentVersion: 4.6
};
console.log('=====Ran the program========');
/**
 * Next lets see difference between interface and types.
 */
