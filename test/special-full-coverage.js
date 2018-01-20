// Dependencies
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Dependencies local
const Product = require('../src/js/Product').default;
const CarInsurance = require('../src/js/CarInsurance').default;

// Constants
const SPECIAL_FULL_COVERAGE = 'Special Full Coverage';

describe('Special Full Coverage', () => {
	it('should sellIn be equal to 14', () => {
		const _CarInsurance = new CarInsurance([new Product(SPECIAL_FULL_COVERAGE, 15, 20)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].sellIn).equal(14);
	});

	it('should price be equal to 19', () => {
		const _CarInsurance = new CarInsurance([new Product(SPECIAL_FULL_COVERAGE, 15, 20)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(21);
	});

	it('should price be equal to 22', () => {
		const _CarInsurance = new CarInsurance([new Product(SPECIAL_FULL_COVERAGE, 10, 20)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(22);
	});

	it('should price be equal to 50', () => {
		const _CarInsurance = new CarInsurance([new Product(SPECIAL_FULL_COVERAGE, 5, 50)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(50);
	});

	it('should price be equal to 0 when sellIn less than or equal to 0', () => {
		const _CarInsurance = new CarInsurance([new Product(SPECIAL_FULL_COVERAGE, 0, 50)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(0);
	});
});