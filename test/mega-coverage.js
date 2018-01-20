// Dependencies
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Dependencies local
const Product = require('../src/js/Product').default;
const CarInsurance = require('../src/js/CarInsurance').default;

// Constants
const MEGA_COVERAGE = 'Mega Coverage';

describe('Mega Coverage', () => {
	it('should sellIn be equal to 0', () => {
		const _CarInsurance = new CarInsurance([new Product(MEGA_COVERAGE, 0, 80)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].sellIn).equal(0);
	});

	it('should price be equal to 80', () => {
		const _CarInsurance = new CarInsurance([new Product(MEGA_COVERAGE, -1, 80)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(80);
	});

	// FIXME NO LET PRICES DIFF TO 80
	it('should: price be 80 and it never alters', () => {
		const _CarInsurance = new CarInsurance([new Product(MEGA_COVERAGE, -1, 90)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(80);
	});
});