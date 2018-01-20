// Dependencies
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Dependencies local
const Product = require('../src/js/Product').default;
const CarInsurance = require('../src/js/CarInsurance').default;

// Constants
const FULL_COVERAGE = 'Full Coverage';

describe('Full Coverage', () => {
	it('should sellIn be equal to 2', () => {
		const _CarInsurance = new CarInsurance([new Product(FULL_COVERAGE, 3, 0)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].sellIn).equal(2);
	});

	it('should price be equal to 1', () => {
		const _CarInsurance = new CarInsurance([new Product(FULL_COVERAGE, 3, 0)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(1);
	});

	it('Should: increases in price the older it gets. Price equal to 2', () => {
		const _CarInsurance = new CarInsurance([new Product(FULL_COVERAGE, -1, 0)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(2);
	});

	it('Should: the price of a product is never more than 50. Price equal to 50', () => {
		const _CarInsurance = new CarInsurance([new Product(FULL_COVERAGE, -1, 50)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(50);
	});
});