# Form Features 

#### Handling missing required input:
Use client-side validation to ensure values in input fields match certain requirements. 
Could create a separate React component that takes in an object/array of validation rules as a prop.

**Implemented:**
Database gives an error when certain fields are not given (Ex: Name, Role)


#### Handling connection failures/interruptions:
Could use WebStorage (local storage mechanism) - to store data in browser.
Would have peristent storage (`localStorage`) and session based (`sessionStorage`)
Use `sessionStorage` if the data is to be stored temporarily. 
