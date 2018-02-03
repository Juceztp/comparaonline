//Dependencies local
const MediumCoverage = require('./business/medium-coverage.js').default;
const FullCoverage = require('./business/full-coverage.js').default;
const MegaCoverage = require('./business/mega-coverage.js').default;
const SpecialFullCoverage = require('./business/special-full-coverage.js').default;
const SuperSale = require('./business/super-sale.js').default;

// Constants
const COVERAGES = ['Full Coverage', 'Mega Coverage', 'Special Full Coverage', 'Super Sale'];

export default class CarInsurance {

	constructor(products = []) {
		this.products = products;
	}

	updatePrice(d) {

		if (d === 0)
			return this.products;

		const _mediumCoverage = new MediumCoverage();
		const _fullCoverage = new FullCoverage();
		const _megaCoverage = new MegaCoverage();
		const _specialFullCoverage = new SpecialFullCoverage();
		const _superSale = new SuperSale();

		for (const product of this.products) {

			if (product.name === COVERAGES[0]) {
				product.price = _fullCoverage.getPrice(product.price, product.sellIn);
			}

			if (product.name === COVERAGES[1]) {
				product.price = _megaCoverage.getPrice();
			}

			if (product.name === COVERAGES[2]) {
				product.price = _specialFullCoverage.getPrice(product.price, product.sellIn);
			}

			if (product.name === COVERAGES[3]) {
				product.price = _superSale.getPrice(product.price);
			}

			if (COVERAGES.includes(product.name) === false) {
				product.price = _mediumCoverage.getPrice(product.price, product.sellIn);
			}

			if (product.name !== COVERAGES[1])
				product.sellIn = product.sellIn - 1;
		}

		return this.products;
	}
}