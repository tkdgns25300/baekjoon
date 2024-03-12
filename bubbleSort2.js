const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [input, numberArrangement] = fs.readFileSync(filePath).toString().trim().split("\n");
const [lengOfArr, numOfSwap] = input.trim().split(" ");

let curSwap = 0;

const numArray = numberArrangement.split(" ");

for (let i = 1; i <= lengOfArr; i++) {
	let swap1;
	let swap2;
	for (let j = 0; j < lengOfArr - i; j++) {
		if (numArray[j] > numArray[j + 1]) {
			swap1 = numArray[j];
			swap2 = numArray[j + 1];
			numArray[j] = swap2;
			numArray[j + 1] = swap1;
			curSwap++;
			if (curSwap === Number(numOfSwap)) console.log(`${swap2} ${swap1}`);
		}
	}
	if (!swap1) break;
}

if (curSwap < numOfSwap) console.log(-1);
