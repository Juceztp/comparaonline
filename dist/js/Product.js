"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function Product(name, sellIn, price) {
	_classCallCheck(this, Product);

	this.name = name;
	this.sellIn = sellIn;
	this.price = price;
};

exports.default = Product;