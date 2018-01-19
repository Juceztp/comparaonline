'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function Product(name, sellIn, price) {
	_classCallCheck(this, Product);

	this.name = name;
	this.sellIn = sellIn;
	this.price = price;
};

var CarInsurance = function () {
	function CarInsurance() {
		var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		_classCallCheck(this, CarInsurance);

		this.products = products;
	}

	_createClass(CarInsurance, [{
		key: 'updatePrice',
		value: function updatePrice() {
			for (var i = 0; i < this.products.length; i++) {
				if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
					if (this.products[i].price > 0) {
						if (this.products[i].name != 'Mega Coverage') {
							this.products[i].price = this.products[i].price - 1;
						}
					}
				} else {
					if (this.products[i].price < 50) {
						this.products[i].price = this.products[i].price + 1;
						if (this.products[i].name == 'Special Full Coverage') {
							if (this.products[i].sellIn < 11) {
								if (this.products[i].price < 50) {
									this.products[i].price = this.products[i].price + 1;
								}
							}
							if (this.products[i].sellIn < 6) {
								if (this.products[i].price < 50) {
									this.products[i].price = this.products[i].price + 1;
								}
							}
						}
					}
				}
				if (this.products[i].name != 'Mega Coverage') {
					this.products[i].sellIn = this.products[i].sellIn - 1;
				}
				if (this.products[i].sellIn < 0) {
					if (this.products[i].name != 'Full Coverage') {
						if (this.products[i].name != 'Special Full Coverage') {
							if (this.products[i].price > 0) {
								if (this.products[i].name != 'Mega Coverage') {
									this.products[i].price = this.products[i].price - 1;
								}
							}
						} else {
							this.products[i].price = this.products[i].price - this.products[i].price;
						}
					} else {
						if (this.products[i].price < 50) {
							this.products[i].price = this.products[i].price + 1;
						}
					}
				}
			}

			return this.products;
		}
	}]);

	return CarInsurance;
}();

var productsAtDayZero = [new Product('Medium Coverage', 10, 20), new Product('Full Coverage', 2, 0), new Product('Low Coverage', 5, 7), new Product('Mega Coverage', 0, 80), new Product('Mega Coverage', -1, 80), new Product('Special Full Coverage', 15, 20), new Product('Special Full Coverage', 10, 49), new Product('Special Full Coverage', 5, 49), new Product('Super Sale', 3, 6)];

var carInsurance = new CarInsurance(productsAtDayZero);
var productPrinter = function productPrinter(product) {
	console.log(product.name + ', ' + product.sellIn + ', ' + product.price);
};

for (var i = 1; i <= 30; i += 1) {
	console.log('Day ' + i);
	console.log('name, sellIn, price');
	carInsurance.updatePrice().forEach(productPrinter);
	console.log('');
}