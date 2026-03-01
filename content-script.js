Object.defineProperty(console, "warn", {
	value: (...data) => {
		throw new Error;
	},
	writable: false,
	configurable: false
});

Object.defineProperty(console, "clear", {
	value: (...data) => {
		throw new Error;
	},
	writable: false,
	configurable: false
});