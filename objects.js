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