'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

exports.default = CarInsurance;