const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [input, cardArrangement] = fs.readFileSync(filePath).toString().trim().split("\n");
const [numOfCard, numOfPlay] = input.trim().split(" ");

const cardArray = cardArrangement.split("");
for (let i = 1; i <= numOfPlay; i++) {
	let swap;
	for (let j = 0; j <= numOfCard - i; j++) {
		if (isWin(cardArray[j], cardArray[j + 1])) {
			swap = cardArray[j];
			cardArray[j] = cardArray[j + 1];
			cardArray[j + 1] = swap;
		}
	}
	if (!swap) break;
}

function isWin(me, you) {
	if ((me === "S" && you == "P") || (me === "R" && you == "S") || (me === "P" && you == "R") || me === "0") {
		return true;
	}
	return false;
}

console.log(cardArray.join(""));
