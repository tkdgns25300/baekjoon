const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [input, numberArrangement] = fs.readFileSync(filePath).toString().trim().split("\n");
const [lengOfArr, numOfSwap] = input.trim().split(" ");

const array = numberArrangement.split(" ");

function quickSort(arr) {
	if (arr.length <= 1) return arr;

	const pivot = arr[0];
	const left = [];
	const right = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= pivot) left.push(arr[i]);
		else right.push(arr[i]);
	}

	const lSorted = quickSort(left);
	const rSorted = quickSort(right);
	return [...lSorted, pivot, ...rSorted];
}

console.log(quickSort(array));
