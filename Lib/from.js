/**
 * @desc Implements the Array.from() method, which creates a new, shallow-copied Array instance
 *       from an array-like or iterable object.
 * @param {ArrayLike} arrayLike - An array-like or iterable object to convert to an array.
 * @param {Function}  [mapFn] - A map function to call on every element of the array.
 * @param {*} [thisArg] - Value to use as `this` when executing `mapFn`.
 * @return {Array} A new Array instance.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 */
if (!Array.from) {
    Array.from = function (arrayLike /*, mapFunction, thisArg*/) {
        var result = [];
        var length = arrayLike.length;
        var mapFunction = arguments[1] || function (x) {
            return x;
        };
        var thisArg = arguments[2] || undefined;
        for (var i = 0; i < length; i++) {
            result.push(mapFunction.call(thisArg, arrayLike[i], i));
        }
        return result;
    };
};