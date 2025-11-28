// function declare
sayHello(); // có thể đưa hàm lên truớc khi được khai báo - hoisting
function sayHello() {
    console.log('xin chào');
}

//nếu muốn in ra lời chào tương ứng với tên mình truyền vào thì cần truyền tham số

function sayHello(name = 'Codegym') {
    console.log('Xin chào' + name);
}
//có thể truyền vào 1 giá trị mặc định là Codegym

const result = sayHello('Thành');
console.log('kết quả' + result);

// hàm gửi nhiều tham số
console.log('C29849', true, 1, [1,3,4,5]);

function max(firstNumber, secondNumber)
if (firstNumber > secondNumber) {
    return firstNumber;
}
return secondNumber;
}
console.log(max(30, 20));



function max(a, b, c) {
return a > b? a > c ? a ? a : c : b > c ? b : c; //sử dụng toán tử 3 ngôi
}
console.log(max(30, 20, 25));



function max(a,b,c) {
    if (a > b) {
        if (a > c) return a;
        else return c;
    } else {
        if (b > c) return b;
        else return c;
    }
}

let a = 10;
let b = 20;
let c = 30;
console.log(max(a,b,c));

//pass by value: khi khai báo biến global thì sẽ không gây ảnh hưởng đến phạm vi local

let a = 10;
let b = 20;
function swap(a,b) {
    let temp = a;
    a = b;
    b = a;
}
console.log('before call swap' + a); //10
console.log('before call swap' + b); //20
swap(a,b);
console.log('after call swap' + a); // vẫn là 10
console.log('after call swap' + b); // vẫn là 20

//function expression
const sayHello = function() {
console.log('Xin chào');
}
sayHello();

//arrow function
const sayHello = () => {
    console.log('Xin chào');
}
sayHello;