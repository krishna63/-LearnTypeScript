/**
 * Type Defination Tutorial :4
 * Non primitive types:
 *  - Object
 *
 * Points to learn
 *  - implict object type declaration
 *  - Optional parameters
 *  - How optional parameters can help in reducing the `if` blocks
 *
 * Again this is common because in JS every thing are objects.
 * Let's start with implicit declaration of objects
 */
const langInformation = {
  name: 'typescript',
  vendor: 'microsoft',
};

/**
 * Uncomment below line of code, you will see an error by typescript compiler, because it implicitly
 * define the types as follow and wont allow any new properties to that object.
 * const langInformation: {name: string, vendor: string} = { <key>: <values>}
 *
 * Hence it was throwing an error. So to fix this we have to declare its type as any
 */
//langInformation.currentVersion = 4.6;

const langInformationAsAnyType: any = {
  name: 'typescript',
  vendor: 'microsoft',
};

langInformationAsAnyType.currentVersion = 4.6;

/**
 * But assigning type as `any` is again equivalent of writting plain js only, so lets
 * try define the type of it.
 *
 * We can declare `types` by using the keyword `type` and it can be applicable for classes
 * and objects as well. They are know as type definations and custom types.
 *
 * The separation between a property can be either `,` or `;`
 */

type LangInformationType = {
  name: string;
  currentVersion?: number;
  vendor: string;
};

const langInformationWithCustomType: LangInformationType = {
  name: 'typescript',
  vendor: 'microsoft',
};

/**
 * In the above declartion we have skipped currentVersion as it optional and in order to make
 * it optional, all we need to do is suffix it with `?`.
 */
langInformationWithCustomType.currentVersion = 4.6;

/**
 * Next we will be looking at composing multiple custom types.
 */
type AdditionalLangInfo = {
  advantages: string[];
};

type CompleteLangInfo = {
  basicInfo: LangInformationType;
  moreDetails: AdditionalLangInfo;
};

const langInfoUsingComplexType: CompleteLangInfo = {
  basicInfo: {
    name: 'typescript',
    vendor: 'microsoft',
  },
  moreDetails: {
    advantages: [
      'compile time error',
      'type safe',
      'can develop front end and back end code',
    ],
  },
};

/**
 * Now the above type is more or like an OOPS interface concept, where we declare
 * the blue print of the object. So we can do the same thing with interface as well
 * and the keyword, syntax for doing it is `interface`
 */
interface LangInformationInterface {
  name: string;
  vendor?: string;
  currentVersion: number;
}

const langInformationWithInterface = {
  name: 'typescript',
  currentVersion: 4.6,
};

console.log('=====Ran the program========');

/**
 * Next lets see difference between interface and types.
 */
