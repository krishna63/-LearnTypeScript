/**
 * Type Defination Tutorial :4
 * Non primitive types:
 *  - Object
 *
 * Points to learn
 *  - implict object type declaration/Type aliasing
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
//langInformation.currentVersion = 4.3;

const langInformationAsAnyType: any = {
  name: 'typescript',
  vendor: 'microsoft',
};

langInformationAsAnyType.currentVersion = 4.3;

/**
 * But assigning type as `any` is again equivalent of writting plain js only, so lets
 * try define the type of it.
 *
 * What is Type Alias ?
 *  We have been using object types and union types directly by annotating them, but if we want to use
 *  the same type again and again, here comes the `type` aliasing and the keyword for it is `type`
 *  `type <name of any Type>`
 *   _Ex_: `type ID = string | number`;
 *
 * We can declare `types` by using the keyword `type` and it can be applicable for classes
 * and objects as well. They are know as type aliases and custom types.
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
langInformationWithCustomType.currentVersion = 4.3;

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

const langInformationWithInterface: LangInformationInterface = {
  name: 'typescript',
  currentVersion: 4.3,
};

langInformationWithInterface.vendor = 'Microsoft';

function getLangDetails(langInfo: LangInformationInterface) {
  console.log(`Name of the language is ${langInfo.name}`);
}

/**
 * Typescript is called as structurally typed system, meaning it is not
 * necessary to send the same type, you can also pass an object which matches the
 * structure of the type as shown below.
 */
getLangDetails({ name: 'Javascript', currentVersion: 11 });

console.log('===== Ran the program========');

/**
 * Next lets see difference between interface and types.
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 *
 * Properties can be added to interface even after declaration but we cannot do for types
 * Extending : Different ways to extend Type and Interface.
 *  - Interface are extended by using the keyword extends
 *  - Types are extended by using the intersection `&`
 * Type alias names may appear in the error message sometimes in place of equivalent type.
 * But for interface it will always be a named message.
 */

interface styleProps {
  className: string;
}

interface styleProps {
  style?: {
    top: number;
    left: number;
  };
}

const styleObj: styleProps = {
  className: '14',
  style: {
    top: 12,
    left: '13',
  },
};

/**
 * We cannot reopen the type once declared.
 */
type styledProps = {
  className: string;
};

/**
 * Uncomment below code it will throw an error
 */
/**type styledProps = {

}**/

const styledObj: styledProps = {
  className: 123,
};
