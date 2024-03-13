const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [input, numberArrangement] = fs.readFileSync(filePath).toString().trim().split("\n");
const [lengOfArr, numOfSwap] = input.trim().split(" ");

const arr = numberArrangement.split(" ");

function merge(left, right) {
	const result = [];
	while (left.length !== 0 && right.length !== 0) {
		left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
	}
	return [...result, ...left, ...right];
}

function mergeSort(array) {
	if (array.length === 1) return array;

	const middleIndex = Math.floor(array.length / 2);
	const left = array.slice(0, middleIndex);
	const right = array.slice(middleIndex);

	return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));
return mergeSort(arr);
