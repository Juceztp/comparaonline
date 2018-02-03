export default class MediumCoverage {

	constructor() {
	}

	getPrice (price, sell) {
		if (!price)
			return 0;

		return sell > 0 ?
			price - 1 :
			price - 2;
	}
}