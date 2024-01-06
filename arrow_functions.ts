// 1. Syntax
// Traditional Function
function addNumbersTraditional(a: number, b: number): number {
    return a + b;
}

// Arrow Function
const addNumbersArrow = (a: number, b: number): number => a + b;

// Usage
console.log(addNumbersTraditional(3, 5));  // 8
console.log(addNumbersArrow(3, 5));        // 8



// 2. this Binding
class Counter {
    value: number = 0;

    // Traditional Function
    // incrementTraditional() {
    //     setInterval(function () {
    //         // 'this' refers to the global object, not the Counter instance
    //         this.value++;
    //         console.log(this.value);
    //     }, 1000)
    // }

    // to fix the Traditional Function
    incrementTraditional() {
        const self = this; // save a reference to 'this'
        setInterval(function () {
            // 'self' refers to the Counter instance
            self.value++;
            console.log("Traditional: ",self.value);
        }, 1000)
    }

    // Arrow Function
    incrementArrow() {
        setInterval(() => {
            // 'this' refers to the Counter instance
            this.value++
            console.log("Arrow: ",this.value);
        }, 1000)
    }
}

const counter = new Counter;
counter.incrementTraditional() //  Error: An outer value of 'this' is shadowed by this container.
counter.incrementArrow() // 1,2,3...

// o/p:
// Traditional:  1
// Arrow:  2
// Traditional:  3
// Arrow:  4 ....


// 3. Implicit return
// Traditional Function
function multiplyTraditional(a: number, b: number): number {
    return a * b
}

// Arrow function with Implicit return 
const multiplyArrow = (a: number, b: number): number => a * b;

console.log(multiplyTraditional(2, 6));     // 12
console.log(multiplyArrow(2, 6));           // 12


