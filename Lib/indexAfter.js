/**
 * Finds the index of the given element in the array and returns the index
 * of the element that comes after it. If the element is not found, it
 * returns -1.
 * Does not check whether there is actually a next element.
 *
 * @param {any} element - The element to find the index of.
 * @return {number} The index of the element that comes after the given
 * element, or -1 if the element is not found.
 * !dependencies: indexOf()
 */
if (!Array.prototype.indexAfter) {
	#include ".\\indexOf.js"
	Array.prototype.indexAfter = function (element) {
		const index = this.indexOf(element);
		return index === -1 ? index : index + 1;
	};
};