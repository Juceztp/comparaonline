// Dependencies
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Dependencies local
const Product = require ('../src/js/Product').default;
const CarInsurance = require('../src/js/CarInsurance').default;

// Constants
const MEDIUM_COVERAGE = 'Medium Coverage';

describe ('Medium Coverage', () => {
	it('should sellIn be equal to 29', () => {
		const _CarInsurance = new CarInsurance([new Product(MEDIUM_COVERAGE, 30, 0)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].sellIn).equal(29);
	});

	it('should price be equal to 29', () => {
		const _CarInsurance = new CarInsurance([new Product(MEDIUM_COVERAGE, 30, 30)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(29);
	});

	it('should: Once the sell by date has passed, price degrades twice as fast.', () => {
		const _CarInsurance = new CarInsurance([new Product(MEDIUM_COVERAGE, -1, 10)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(8);
		expect(products[0].sellIn).equal(-2);
	});

	it('should: price of a product is never negative.', () => {
		const _CarInsurance = new CarInsurance([new Product(MEDIUM_COVERAGE, 0, 0)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(0);
		expect(products[0].sellIn).equal(-1);
	});
});
