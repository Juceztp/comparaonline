// Dependencies
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Dependencies local
const Product = require('../src/js/Product').default;
const CarInsurance = require('../src/js/CarInsurance').default;

// Constants
const SUPER_SALE_COVERAGE = 'Super Sale Coverage';

describe('Super Sale Coverage', () => {
	it('should sellIn be equal to 14', () => {
		const _CarInsurance = new CarInsurance([new Product(SUPER_SALE_COVERAGE, 15, 2)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].sellIn).equal(14);
	});

	// FIXME: Degrade in price twice as fast as normal Products.
	it('should price be equal to 2', () => {
		const _CarInsurance = new CarInsurance([new Product(SUPER_SALE_COVERAGE, 15, 4)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(2);
	});

	it('should: price of a product is never negative.', () => {
		const _CarInsurance = new CarInsurance([new Product(SUPER_SALE_COVERAGE, 0, 0)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(0);
		expect(products[0].sellIn).equal(-1);
	});
});