const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [input, numberArrangement] = fs.readFileSync(filePath).toString().trim().split("\n");
const [lengOfArr, numOfSwap] = input.trim().split(" ");

const numberArray = numberArrangement.split(" ");

for (let i = 0; i < lengOfArr - 1; i++) {
	let minIndex = i;
	for (let j = i + 1; j < lengOfArr; j++) {
		if (numberArray[i] > numberArray[j]) {
			minIndex = j;
		}
	}
	if (minIndex !== i) {
		[numberArray[i], numberArray[minIndex]] = [numberArray[minIndex], numberArray[i]];
	}
}

console.log(numberArray.join(""));
return numberArray.join("");
