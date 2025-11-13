// đây là cú pháp hiện đại nhất để khởi tạo class hiện tại
// class Car {
//     #name;
//     #color;
//     #year;
//
//     // cac parameter
//     constructor(name, color, year) {
//         this.#name = name;
//         this.#color = color;
//         this.#year = year;
//     }
//
//     start() {
//         console.log('Car started');
//     }
//
// // từ đây có thể tạo ra các object như sau
//     const
//     car1 = new Car('vinfast VF9', 'red', 2020);
//     const
//     car2 = new Car('vinfast VF5', 'black', 2023);
//     console.log(car1)
//     console.log(car2)
// }
//
// const area = Math.PI * 10 * 10;
// //math là class, pi là thuộc tính

//demo khởi tạo lớp circle bằng cú pháp function contractor
function Circle(radius,color) {
    this.radius = radius;
    this.color = color;

    this.getRadius = function() {
        return this.radius;
    }
    this.getArea = function() {
        return Math.PI * this.radius * this.radius;
    }
}
const ball = new Circle(10, 'red');
const light = new Circle(8, 'yellow');
const wheel = new Circle(15, 'black');

//objectName.color
//objectName/getArea()
console.log(wheel.getArea());
console.log(ball.color);

//Function anonymous
const Circle = function(name, color) {
    this.name = name;
    this.color = color;
}
const wheel = new Circle('wheel', 'black');


function Person(name) {
    this.name = name;
    this.walk = function() {
        console.log('walking');
    }
    this.say = function() {
        console.log(this.name + ': ' + msg);
    }
}
const truongThon = new Persßon;
const grab = new Person;
const kieuNu = new Person;

