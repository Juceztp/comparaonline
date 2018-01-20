export default class SpecialFullCoverage {

	constructor() {
	}

	getPrice(price, sell) {
		if (sell < 1)
			return 0;
		if (price > 49)
			return 50;
		if (sell <= 10)
			return price + 2;
		if (sell <= 5)
			return price + 3;
		return price + 1;
	}
}