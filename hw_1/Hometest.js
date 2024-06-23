// Recursive function to flatten an array
function flattenArray(arr) {
	let flatArray = [];
	arr.forEach(element => {
		if (Array.isArray(element)) {
			flatArray = flatArray.concat(flattenArray(element));
		} else {
			flatArray.push(element);
		}
	});
	return flatArray;
}

function duplicateAndFlatten(arr, times) {
	// Duplicate the array
	let result = [];
	for (let i = 0; i < times; i++) {
		result = result.concat(arr);
	}
	// Flatten the array
	return flattenArray(result);
}

$(document).ready(function() {
	var originalArray = [1, 2, [3, 4], [5, [6, 7]], 8];
	var times = 3;
	var duplicatedFlattenedArray = duplicateAndFlatten(originalArray, times);
	console.log(duplicatedFlattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]

	// For demonstration, appending the result to the body
	$('body').append('<div>Duplicated and Flattened Array: ' + JSON.stringify(duplicatedFlattenedArray) + '</div>');