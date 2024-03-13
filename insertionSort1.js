const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [input, numberArrangement] = fs.readFileSync(filePath).toString().trim().split("\n");
const [lengOfArr, numOfSwap] = input.trim().split(" ");

const arr = numberArrangement.split(" ");

for (let i = 1; i < lengOfArr; i++) {
	let curValue = arr[i];
	let left = i - 1;
	while (left >= 0 && arr[left] > curValue) {
		arr[left + 1] = arr[left];
		left--;
	}
	arr[left + 1] = curValue;
}

console.log(arr);
return arr;
