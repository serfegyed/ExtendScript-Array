/**
 * Removes an element from the array at the specified index. The counterpart of the 'insert' method.
 *
 * @param {number} index - The index of the element to remove.
 * @return {Array} - A new array with the element removed.
 */
if (!Array.prototype.remove) {
    Array.prototype.remove = function (index) {
        index = index < 0 ? this.length + index : index;
        if (index < 0 || index >= this.length) throw new RangeError();
        var arr = this.slice();
        arr.splice(index, 1);
        return arr;
    };
};