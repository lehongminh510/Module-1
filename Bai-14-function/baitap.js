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