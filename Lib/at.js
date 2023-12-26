/**
 * Retrieves the element at the specified index of the array.
 *
 * @param {number} index - The index of the element to retrieve.
 * @return {*} - The element at the specified index, or undefined if the index is out of range.
 */
if (!Array.prototype.at) {
    Array.prototype.at = function (index) {
        index = Math.floor(index) || 0;
        index = index < 0 ? this.length + index : index;
        if (index < 0 || index >= this.length) return undefined;

        return this[index];
    };
};