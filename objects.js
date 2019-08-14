'use strict';
function createMyObject(){
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {return 'hello';}
  };
}
const testOBJ =createMyObject();

//console.log(testOBJ);

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz ='bizz';
  obj.bang = 'bang';
  return obj;
}
const testObj = {};

//console.log(updateObject(testObj));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName:function() {
      return this.firstName +" " +this.lastName;
     }
  }
  return person;
}

const person=personMaker();
console.log(person.fullName);
