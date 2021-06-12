# Typescript
Hello Everyone, Lets have some fun by learning Typescript!!! :smiley:

## QuickLinks:

#### What is Typescript ?
  - A **_superset of Javascript_** which compiles to plain Javascript. It can run in any browser and any OS.
  - In other words it is an **improved version of Javascrript**.

#### Why do we need Typescript and main features of the language ?
  
  1) Typescript helps us auto detecting the problems at __compile time rather than at run time__.  
    ```javascript
    const notModifiable = "Typescript";
    notModifiable = "Javascript";
    ```
  2) Type definations of the program which avoids lot of bugs.
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
  
#### Prerequisites:
    1) You need to have node and npm installed in your system.

#### Configuring typescript
    - create an empty node project `npm init`.
    - Install typescript module `npm i typescript --save-dev` as it is a dev dependency.
  
  Once the typescript module is installed you can do following things:
    - which tsc (run the command in the _git bash_ to findout location of the typescript compiler/nodemodule has been installed).
    - tsc --version

#### Points to make note of:
    1) Typescript code files extension are suffixed with `.ts`. 