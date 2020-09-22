function countPrimeNumbers() {
	let n = [];
	for (let i = 2; i < 100; i++) {
		if (i % 2 != 0) {
			n.push(i);
		}
	}
	return n.length;
}

let start_time = window.performance.now();

for (let i = 0; i < 100; i++) {
	setTimeout(() => {countPrimeNumbers();}, 1000);
}

let end_time = window.performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end_time - start_time) + " milliseconds.");
