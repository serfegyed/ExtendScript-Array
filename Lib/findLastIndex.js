/**
 * Find the last index in the array that satisfies the provided testing function.
 *
 * @param {function} callback - The testing function to execute on each element.
 * @param {any} [thisArg] - The value to use as `this` when executing the callback.
 * @return {number} The index of the last element in the array that satisfies the testing function; otherwise, -1.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
 */
if (!Array.prototype.findLastIndex) {
    Array.prototype.findLastIndex = function (callback /*, thisArg*/) {
        if (typeof callback !== "function") throw new TypeError();
        var thisArg = arguments[1] || undefined;

        for (var i = this.length - 1; i >= 0; i--) {
            if (callback.call(thisArg, this[i], i, this)) return i;
        }
        return -1;
    };
};