// Write the code, one line for each action:

// Create an empty object user.
let user = {
}
// Add the property name with the value John.
user.name: 'John'
// Add the property surname with the value Smith.
user.surname: 'Smith'
// Change the value of the name to Pete.
user.name = 'Pete'
// Remove the property name from the object.
delete user.name



// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  // SOLUTION -->
function isEmpty(obj) {
    for (let key in obj) {
        let sum = salaries.John + salaries.Ann + salaries.Pete
        return sum;
    }
    return 0;
}
// SOLUTION -->


// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
// SOLUTION -->
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
// SOLUTION -->