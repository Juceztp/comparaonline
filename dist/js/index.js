'use strict';

var Product = require('./Product.js').default;
var CarInsurance = require('./CarInsurance.js').default;

var productsAtDayZero = [
//new Product('Medium Coverage', -1, 10),
//new Product('Full Coverage', 3, 0),
//new Product('Low Coverage', 5, 7),
//new Product('Mega Coverage', 0, 80),
//new Product('Mega Coverage', -1, 80),
//new Product('Special Full Coverage', 15, 40),
//new Product('Special Full Coverage', 10, 49),
//new Product('Special Full Coverage', 5, 49),
new Product('Super Sale', 3, 6)];

var carInsurance = new CarInsurance(productsAtDayZero);
var productPrinter = function productPrinter(product) {
	// eslint-disable-next-line no-console
	console.log(product.name + ', ' + product.sellIn + ', ' + product.price);
};

for (var i = 1; i <= 30; i += 1) {
	// eslint-disable-next-line no-console
	console.log('Day ' + i);
	// eslint-disable-next-line no-console
	console.log('name, sellIn, price');
	carInsurance.updatePrice().forEach(productPrinter);
	// eslint-disable-next-line no-console
	console.log('');
}