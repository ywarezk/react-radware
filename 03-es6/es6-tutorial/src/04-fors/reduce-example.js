

const arrayOfNumbers = [1,2,3,4]

// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

const twenty = arrayOfNumbers.reduce(
	function reducer(initialValueSumOfPreviousCalculation, currentIteration) {
		return 	initialValueSumOfPreviousCalculation + currentIteration
	},
	10
)