# Lexical Scoping in Arrow Functions:
In traditional JavaScript functions, the value of this is dynamically determined based on how the function is called. This behavior can lead to unexpected results, especially in nested functions or callbacks. Arrow functions, on the other hand, use lexical scoping for this

----------------------

- In the incrementTraditional method, the regular function inside setInterval creates its own this context, which refers to the global object (or undefined in strict mode). This leads to incorrect behavior, as this.value does not refer to the Counter instance.

- In contrast, the incrementArrow method uses an arrow function inside setInterval. The arrow function inherits "this" from its "surrounding scope" (lexical scoping), which means it captures the this value from the incrementArrow method. As a result, this.value correctly refers to the Counter instance.

