// 기본 문법

// 01. 상수와 변수
// 상수: const(constant: 변함없는 수)
// 변수: let

// ----------------------------------------------------------

// 02. Object - key - value pair
const obj1 = {
  name: "younghwan",
  age: "32",
  company: "none",
  doSomething: () => {},
};
// 얕은 복사
// 같은 메모리를 바라보기 때문에, 정보가 다 바뀐다.
const obj2 = obj1;
// 방법 1
const obj3 = JSON.parse(JSON.stringify(obj1));
// 방법 2
const obj4 = { ...obj1 };

// ----------------------------------------------------------

// 03. Template Literals
const testValue = 3;
console.log(`문자열은 ${testValue} 입니다.`); // 백틱
const testValue1 = `멀티라인
    으로 입력할 수
    있어요`;

 // ----------------------------------------------------------

 // 04. 구조분해 할당
 // 객체
 const {name, age} = obj1;
 console.log(name) // younghwan
 console.log(age) // 32

// 배열
const testArr = [1,2,3,4,5];
const [one, two, three, four, five] = testArr
console.log(one, two, three) // 1 2 3

 // ----------------------------------------------------------

// 05. 전개연산자
let [test, ...rest] = ['test', 21, "hmmm"];
console.log(test) // test
console.log(rest) // [ 21, 'hmmm' ]

let names = ["Steve", "John"];
let students = ["Tom", ...names, ...names];
console.log(students) //[ 'Tom', 'Steve', 'John', 'Steve', 'John' ]

// ----------------------------------------------------------

// 06. Arrow Functinos
function mySum(a, b) {
    return a + b;
}
const mySum2 = (a, b) => {
    return a + b;
}
const mySum3 = (a, b) => a + b;