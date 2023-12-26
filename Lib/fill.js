/**
 * Fill all the elements of an array with a static value from a start index to an end index (excluding the end index).
 *
 * @param {any} value - The value to fill the array with.
 * @param {number} start - The index to start filling the array from. If not provided, default is 0.
 * @param {number} end - The index to stop filling the array at. If not provided, default is the length of the array.
 * @return {Array} - The modified array with filled elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
 */
if (!Array.prototype.fill) {
    Array.prototype.fill = function (value /*, start, end*/) {
        if (isNaN(arguments[1]) && typeof arguments[1] === "number") return this;
        if (isNaN(arguments[2]) && typeof arguments[2] === "number") return this;

        var len = this.length;

        var start = arguments[1] || 0;
        var end = arguments[2] || len;

        start = start < 0 ? len + start : start;
        start = start < 0 ? 0 : start;

        end = end < 0 ? len + end : end;
        end = end < 0 ? 0 : end;

        if (start >= len) return this;
        end = end >= len ? len : end;

        if (start < end)
            for (var i = start; i < end; i++) {
                this[i] = value;
            }

        return this;
    };
};