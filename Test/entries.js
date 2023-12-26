// Test an empty array:
var arr = [];
var iterator = arr.entries();
var result = iterator.next();
$.writeln("Empty array: " + result.done); // Expected output: true

// Test an array with one element:
var arr = [42];
var iterator = arr.entries();
var result = iterator.next();
$.writeln("\nArray with one element. Done? : " + result.done); // Expected output: false
$.writeln("First element: " + result.value); // Expected output: [0, 42]
result = iterator.next();
$.writeln("Done? : " + result.done); // Expected output: true

// Test an array with multiple elements:
// Example 1: Using variable
var myArray = [1, 2, 3, 4, 5];
var iterator = myArray.entries();
$.writeln("\nUsing variable");
var result = iterator.next();
while (!result.done) {
    $.writeln(result.value);
    result = iterator.next();
};

// Example usage 2
$.writeln("\nUsing direct call: while ((result = iterator.next()) && !result.done)");
var array1 = ["a", "b", "c"];
var iterator = array1.entries();
// Direct call
var result = null;
while ((result = iterator.next()) && !result.done) {
    $.writeln(result.value);
};
$.writeln('Done')

// Example usage 3
$.writeln("\nUsing direct call: while (!(result = iterator.next()).done))");
var array1 = ["a", "b", "c"];
var iterator = array1.entries();
// Direct call
var result = null;
while (!(result = iterator.next()).done) {
    $.writeln(result.value);
};
$.writeln('Done')


// Calling on non-array objects
var arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: "d", // ignored since length is 3
};

var iterator = Array.prototype.entries.call(arrayLike);
$.writeln("\nCalling on non-array using variable");
$.writeln("arrayLike object: " + arrayLike);
var result = iterator.next();
while (!result.done) {
    $.writeln(result.value);
    result = iterator.next();
};
$.writeln('arrayLike 3: "d" is ignored since length is 3')
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]