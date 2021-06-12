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
  2) It also helps in autosuggest out of the box or definations of the variables.
  3) It automatically makes type inference for the variables we declare or create.

    ```javascript
    let user = {
      language: 'typescript',
      dol: new Date()
    }
    // not allowed in typescript as the type of user is already defined.
    user.vendor = "Microscoft"; 
    ```


#### What are the prelimnary things for learning Typescript ?
Javascript
