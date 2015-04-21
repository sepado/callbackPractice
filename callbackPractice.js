/* In this repo your job is to write functions to make each function call 
work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code 
above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/

//Code Here for first
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function first(array, callBack) {
  var firstName = array[0];
  callBack(firstName);
}

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function last(array, callBack) {
  var lastName = array[array.length - 1];
  callBack(lastName);
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for multiply

function multiply(a, b, callBack) {
  var answer = a * b;
  callBack(answer);
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for contains

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(arr1, str1, callBack) {
  var result = false;                           // set initial boolean value of false (to get else statement working)
  for (var i = 0; i < arr1.length; i++) {
    if (str1 === arr1[i]) {
      result = true;                            // only sets true if str1 is found
      callBack(result);
      break;
    }
  }
  if (result === false) {                       // stays at false if str1 is not found in arr1
    callBack(result);
  }
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

//create a new empty array, nested for loops (for i searches old array, sets defalut boolean to false) 
// (for j searches new array, if it finds the same value already there, it sets boolean to true)
// (the bottom of for i checks to see if it was found, if not, it pushes name into the new array form the old)
function uniq(arr1, callBack) {
  var uniqArr = [];
  for (var i = 0; i < arr1.length; i++) {
    var found = false;
    for (var j = 0; j < uniqArr.length; j++) {
      if(arr1[i] === uniqArr[j]) {
        found = true;
        break;
      }
    } 
    if(found === false) {
      uniqArr.push(arr1[i]);
    }  
  }
  callBack(uniqArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

// two callBack arguements - add var to each item in the array
function each(arr1, callBack) {
  for (var i = 0; i < arr1.length; i++) {
    var item = arr1[i];
    var indice = i;
    callBack(item, indice);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

// passing single array, a string, and 1 callback arguement is req...
// finds object by id, assigns var to user and passes back users[key]
// the function call adds the other half users[key].email
function getUserById(arr1, str1, callBack) {
  for (key in arr1) {
    if(arr1[key].id === str1) {
      var user = arr1[key];
      callBack(user);
    }
  }
}

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});







