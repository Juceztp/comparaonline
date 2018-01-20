export default class FullCoverage {

	constructor() {
	}

	getPrice(price, sell) {
		if (price > 49)
			return 50;

		return sell < 0 ?
			price + 2 :
			price + 1;
	}
}