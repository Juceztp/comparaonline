'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Dependencies local
var MediumCoverage = require('./business/medium-coverage.js').default;
var FullCoverage = require('./business/full-coverage.js').default;
var MegaCoverage = require('./business/mega-coverage.js').default;
var SpecialFullCoverage = require('./business/special-full-coverage.js').default;
var SuperSale = require('./business/super-sale.js').default;

// Constants
var COVERAGES = ['Full Coverage', 'Mega Coverage', 'Special Full Coverage', 'Super Sale'];

var CarInsurance = function () {
	function CarInsurance() {
		var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		_classCallCheck(this, CarInsurance);

		this.products = products;
	}

	_createClass(CarInsurance, [{
		key: 'updatePrice',
		value: function updatePrice(d) {

			if (d === 0) return this.products;

			var _mediumCoverage = new MediumCoverage();
			var _fullCoverage = new FullCoverage();
			var _megaCoverage = new MegaCoverage();
			var _specialFullCoverage = new SpecialFullCoverage();
			var _superSale = new SuperSale();

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var product = _step.value;


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

					if (product.name !== COVERAGES[1]) product.sellIn = product.sellIn - 1;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return this.products;
		}
	}]);

	return CarInsurance;
}();

exports.default = CarInsurance;