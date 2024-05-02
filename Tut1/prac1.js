
// var is function scope and let is block scope
let fib = function (a) {
    let older = 0
    let old = 1;
    let current = 0;
    for (let i = 0; i < a; i++) {
        console.log(older);
        current = old + older;
        older = old;
        old = current;
    }
}

fib(10);

