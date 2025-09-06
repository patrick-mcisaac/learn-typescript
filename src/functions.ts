// you can set default values, in case you need to call a function without that parameter

// always annotate parameters and returns
function calculateTax(income: number, taxYear = 2022): number {
	if (taxYear < 2022) return income * 1.2
	return income * 1.3
}

console.log(calculateTax(10_000, 2021))
console.log(calculateTax(10_000))
