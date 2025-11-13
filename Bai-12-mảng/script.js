// Cách 1: [] Cặp dấu ngoặc vuông (khuyến nghị)
// const cars = ['Vinfast', 'Mec', 'BMW'];
// const arr = [1, 'Codegym', false];
// const fruits = ['Banana', 'Apple', 'Orange'];
// console.log(typeof arr); // đây là kiểu dữ liệu object
// const n = 1;
// let firstName;
//
// console.log(typeof n);
// console.log(typeof firstName);

//Cách 2: newArray() ít được dùng hơn
//cú pháp: var array_name = new Array(item1, item2, item3, ...);
const cars = new Array('Bwm', 'Mec', 'Vinfast');
console.log('Before:' + cars);
cars[1] = 'Mercedes';
console.log('After:' + cars);
console.log(cars[2]) // vinfast
for (let i = 0; i < cars.length ; i++) {
    console.log(cars[i]);
}
// cách thứ 2 để coynt tổng số phần tử từ dưới lên
for (let i = cars.length - 1; i >= 0 ; i--) {
    console.log(cars[i]);}

//Truy cập vào thuộc tính độ dài của mảng
console.log(cars.length);

//thêm phần tử vào mảng: push
cars.push('Audi');

//chuyển phần tử trong mảng thành chuỗi và nối chúng lại với nhau


//cần lưu ý tránh nhầm lẫn
//const numbers = [10]; // 1 element
const numbers = new Array(10); // 10 elements
//cách truy xuất hoặc khai báo 1 phần tử trong mảng
// gán phần tử cho mảng: cars [0] = "Opel";
// lấy giá trị phần tử đầu tiên của mảng
//var name = cars[0];

//Cách nối các phần tử trong mảng
// var a = [1, 2, 3];
//a.join(); // "1,2,3"

//hàm đảo ngược các phần tử trong mảng
//

// hàm sắp xếp các phần tử trong mảng (sort)
// var a = new Array('banana', 'cherry', 'apple');
// a.sort();
// var s = a.join(", ");
// console.log(s)
//
// //nối trực tiếp giá trị, nối mảng
// var a = [1,2,3];
// a.concat(4,5) // return [1,2,3,4,5]
// a.concat([4,5]) // return [1,2,3,4,5]
// a.concat(4,[5,[6,7]]) // return [4,5,[6,7]]
//
// const students = ['ngoc', 'long', 'minh', 'ky'];
// students.push('ly');
// console.log(students.sort());
// const numbers = [3,7,11,22,9];
// console.log(numbers.sort(function(a, b)
// {
//     return a - b;
// })) // dùng hàm callback
//
// // hàm đảo ngược
// console.log(numbers.reverse());

// const students = [];
// function themsinhvien() {
//     let numberofStudents = parseInt(prompt('Mời nhập số sinh viên muốn thêm'));
//     for (let i = 0; i < numberofStudents; i++) {
//         students[i] = prompt("Nhap ten sinh vien thu "+i+" vao: ");
//     }
//     document.getElementById('students').innerHTML = students.join("<br>");
// }

//Bài 10 buổi 2: Array (cac ham indexOf, includes, map, filter, reduce)
// const students = [];
// students.push('Hai');
// students.push('Toan');
// students.push('A');
// students.push('B');
// students.push('C');
// console.log(students.indexOf('Hai')); // neu tim thay thi tra ve chi so cua no trong chuoi,
// console.log(students.indexOf('Na')); // neu khong thay tra ve -1
// console.log(students.includes('Hai')); // neu co tra ve true

//Map: nối phần tử trong mảng
const students = [];
console.log(students.map(function(item) {
    return 'Mr. ' + item;
}));
const numbers = [1,2,3];
console.log(numbers.map(function(item) {
    return item * 2;
}))
console.log(numbers.filter(function(item) {
    return item >= 1;
}))
let sum = numbers.reduce(function(prev, curr)
{
    return prev + curr;
}, 0)
console.log(sum);

function sayHello(fn) {
    fn('Xin chao');
}
sayHello(function(value)) {
    document.write(value);
});
