// Boolean
let boolean: boolean;
let falseBool: boolean = false;


// Number
let number: number;
let integer: number = 6;
let float: number = 3.14;


// String
let string: string;
let firstName: string = "Yoo";


// Array
// 한가지 자료형만 존재하는 배열
let names1: string[] = ["Yoo", "Kim"];
let names2: Array<string> = ["Yoo", "Kim"];


// 여러 자료형들이 존재하는 배열(유니언 타입)
let array1: (string | number)[] = ["Yoo", 1, 2];
let array2: Array<string | number> = ["Yoo", 1, 2];


// 배열 안 어떤 자료형이 올 지 모를 때 => any 사용
let someArr: any[] = ["Yoo", 1, [], {}, true];


// 읽기 전용 배열 생성(readonly, ReadonlyArray)
// push하거나 값 수정 불가능
let stringArr: readonly string[] = ["A", "B"];
let numberArr: ReadonlyArray<number> = [1, 2, 3, 4];


// Tuple (고정된 길이와 타입 순서를 갖는 배열)
let tuple1: [string, number];
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];        // 오류
// tuple1 = [1, 'a'];           // 오류


// Tuple에서 배열 안 배열 형태
let users: [number, string][];
users = [[1, "a"], [2, "b"]];


let tuple2: [string, number];
tuple2 = ["a", 1];
tuple2.push(2);                 // 메소드를 이용해 값을 추가하는 것 가능
console.log(tuple2);            // ['a', 1, 2]

// tuple2.push(false);          명시하지 않은 자료형은 오류


// any
// 아무 자료형이나 할당 가능
let any: any = "abc";
any = 1;
any = [];


// unknown
// 아무 자료형이나 할당 가능
// 하지만 다른 변수에 할당은 불가능
let unknownn: unknown = false;
// let string1: string = unknownn (오류)


// object
let obj: object = {};
let arr: object = [];
// let nul: object = null;
let date: object = new Date();

let obj2: { id: number, title: string, description: string } = {
    id: 1,
    title: "hello",
    description: "nice to meet you"
}


// union (두 개 이상의 타입을 허용)
let union: (string | number);
union = "hi";
union = 3.14;


// function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
    return x * y;
}

// return이 없을 때
let func2: () => void;
func2 = function () {
    console.log("Hi");
}

function func3(x: number, y: number): number{
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

let void2: void = undefined;


// void
function greeting(): void {
    console.log("hi");
}


// never (어떤 값도 가질 수 없는 타입)
// 항상 오류를 출력하거나 return값을 내보내지 않음을 확신할 때 사용)
function throwError(): never {
    throw new Error("Error");
}

function keepProcessing(): never {
    while (true) {
        console.log("hi")
    }
}