$.writeln([].at(0)); // empty array = undefined
arr = [1, 2, 3, 4, 5, 6, 7, 8];

$.writeln(arr.at(-1)); // 8
$.writeln(arr.at(-11)); // Out Of Boundaries = undefined
$.writeln(arr.at(10)); // OOB too = undefined
$.writeln(arr.at(0)); // 1
$.writeln(arr.at(NaN)); // Treated as zero = 1
$.writeln(arr.at("1")); // Converted to number = 2
$.writeln(arr.at("-1")); // Converted to number = 8
$.writeln(arr.at(undefined)); // undefined, treated as zero = 1
$.writeln(arr.at()); // undefined, treated as zero = 1
$.writeln(arr.at(null)); // undefined, treated as zero = 1

const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
};
$.writeln(Array.prototype.at.call(arrayLike, -1)); // "b"