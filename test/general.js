// Dependencies
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Contants
const Product = require('../src/js/Product').default;
const CarInsurance = require('../src/js/CarInsurance').default;

describe('General', () => {
	it('should name product equal to Medium Coverage', () => {
		const _CarInsurance = new CarInsurance([new Product('Medium Coverage', 0, 0)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].name).equal('Medium Coverage');
	});
});