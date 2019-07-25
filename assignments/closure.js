// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function galaxy(){
  const ourGalaxy = "Milky Way";
  console.log(`We are in the ${ourGalaxy} galaxy.`)
  function planet(){
    const ourPlanet = "Earth";
    console.log(`We are in the ${ourGalaxy} galaxy in planet ${ourPlanet}.`)
    function continent(){
      const ourContinent = "North America";
      console.log(`We are in the ${ourGalaxy} galaxy in planet ${ourPlanet} and we live in ${ourContinent}.`)
    }
    continent();
  }
  planet();
}

galaxy();



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0; 
  return function(){
    count = count + 1; 
    return count;
  }
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
//const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
//   let count = 0; 
//   const counter = {
//     increment: function(){
//       count = count + 1; 
//       return count;
//     },
//     decrement: function(){
//       count = count - 1; 
//       return count;
//     }
//   }
//   return counter; 
// };

// const newCounter = counterFactory.increment;
//console.log(newCounter);