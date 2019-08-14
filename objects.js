function createMyObject(){
    return {
     foo: 'bar',
     answerToUniverse: 42,
     'olly olly': 'oxen free',
     sayHello() {return 'hello'}
    }
}
const testOBJ =createMyObject();

console.log(testOBJ);