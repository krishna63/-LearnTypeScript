# Typescript
Hello Everyone, Lets have some fun by learning Typescript!!! :smiley:

## QuickLinks:

#### What is Typescript ?
  - A **_superset of Javascript_** which compiles to plain Javascript. It can run in any browser and any OS.
  - In other words it is an **improved version of Javascrript**.
  - A static type checker which helps in describing the shape and behavior of what our values will be
  when our program runs.

#### Problems with Javascript ?
  - JS is a dynamic typing meaning running the code to see what happens. Lets take an example
    
    ```javascript
      function simpleFn(x) {
        return x.flip()
      }
    ```
    If the above function is called with a string then it throws an error, while running the code.
    So to avoid the errors we would prefer to write it in static typing and it is nothing
    but writing in Typescript.

    Static type - Helps in making predictions about what code is expected before it runs.

#### Why do we need Typescript and main features of the language ?
  
  1) Typescript helps us auto detecting the problems at __compile time rather than at run time__.  
    ```javascript
    const notModifiable = "Typescript";
    notModifiable = "Javascript";
    ```
  2) Implict Type definations/ type inference of the program that avoids a lot of bugs.
   The type definations are auto detected based on the value assigned to it.

    ```javascript
    let compilerName = "typescript compiler";
    compilerName = 4.6.0 // this is not allowed, because it's type is string.
    let user = {
      language: 'typescript',
      dol: new Date()
    }
    /**
     * not allowed in typescript as the type of _user_ is already defined with only those two properties.
     */
    user.vendor = "Microscoft"; 
    ```
  3) You can build a complete application for both front end and back end using Typescript.
  4) Autosuggest the properties as and when required.

#### When it can infer types why do we need to explicitly declare them ?
    - We will use wide variety of design patterns, however some patterns make it difficult for typescript
    to infer automatically(for ex: dynamic programming is one use case.)
  
#### Prerequisites:
    1) You need to install node and npm in your system.
    2) Install any web server for instance _http-server_, `npm i http-server --save-dev`.
    This helps in serving the index page in the browser.

#### Configuring Typescript
    - create an empty node project `npm init`.
    - Install typescript module `npm i typescript --save-dev` as it is a dev dependency.
  
  Once the typescript module is installed you can do following things:
    - which tsc (run the command in the _git bash_ to findout location of the typescript
    compiler/nodemodule has been installed).
    - tsc --version

  Few points about TSC:
    - In case you have few errors in the code and still you can see that the js files has been generated
    for respective `ts` files, because the typescript by default runs with `noEmitOnError` as false. meaning
    even if there is an error in the code the transpilation is done. In order to prevent from generating
    respective js files then we need to enable the `noEmitError` flag

#### Points to make note of:
    1) Typescript code files extension are suffixed with `.ts`. 

#### Scripts section of package.json:
    1) "es6": To run the static files like(index page) in the browser, so that transpiled code
    is executing. Used `c1` to clear the cache.