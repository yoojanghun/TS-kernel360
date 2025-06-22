"use strict";
// Boolean
let boolean;
let falseBool = false;
// Number
let number;
let integer = 6;
let float = 3.14;
// String
let string;
let firstName = "Yoo";
// Array
// 한가지 자료형만 존재하는 배열
let names1 = ["Yoo", "Kim"];
let names2 = ["Yoo", "Kim"];
// 여러 자료형들이 존재하는 배열(유니언 타입)
let array1 = ["Yoo", 1, 2];
let array2 = ["Yoo", 1, 2];
// 배열 안 어떤 자료형이 올 지 모를 때 => any 사용
let someArr = ["Yoo", 1, [], {}, true];
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
// push하거나 값 수정 불가능
let stringArr = ["A", "B"];
let numberArr = [1, 2, 3, 4];
// Tuple (고정된 길이와 타입 순서를 갖는 배열)
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];        // 오류
// tuple1 = [1, 'a'];           // 오류
// Tuple에서 배열 안 배열 형태
let users;
users = [[1, "a"], [2, "b"]];
let tuple2;
tuple2 = ["a", 1];
tuple2.push(2); // 메소드를 이용해 값을 추가하는 것 가능
console.log(tuple2); // ['a', 1, 2]
// tuple2.push(false);          명시하지 않은 자료형은 오류
// any
// 아무 자료형이나 할당 가능
let any = "abc";
any = 1;
any = [];
// unknown
// 아무 자료형이나 할당 가능
// 하지만 다른 변수에 할당은 불가능
let unknownn = false;
// let string1: string = unknownn (오류)
// object
let obj = {};
let arr = [];
// let nul: object = null;
let date = new Date();
let obj2 = {
    id: 1,
    title: "hello",
    description: "nice to meet you"
};
// union (두 개 이상의 타입을 허용)
let union;
union = "hi";
union = 3.14;
// function
let func1;
func1 = function (x, y) {
    return x * y;
};
// return이 없을 때
let func2;
func2 = function () {
    console.log("Hi");
};
function func3(x, y) {
    return x + y;
}
// Null, Undefined
// "strictNullChecks": false 한 상태에서 Null과 Undefined는 어떤 자료형의 변수에도 할당 가능
// true인 경우엔 오류
// let number1: number = null;
// let string0: string = undefined;
// let object: { a: 10, b: false} = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;
let void2 = undefined;
// void
function greeting() {
    console.log("hi");
}
// never (어떤 값도 가질 수 없는 타입)
// 항상 오류를 출력하거나 return값을 내보내지 않음을 확신할 때 사용)
function throwError() {
    throw new Error("Error");
}
function keepProcessing() {
    while (true) {
        console.log("hi");
    }
}
