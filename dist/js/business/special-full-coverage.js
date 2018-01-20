"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialFullCoverage = function () {
	function SpecialFullCoverage() {
		_classCallCheck(this, SpecialFullCoverage);
	}

	_createClass(SpecialFullCoverage, [{
		key: "getPrice",
		value: function getPrice(price, sell) {
			if (sell < 1) return 0;
			if (price > 49) return 50;
			if (sell <= 10) return price + 2;
			if (sell <= 5) return price + 3;
			return price + 1;
		}
	}]);

	return SpecialFullCoverage;
}();

exports.default = SpecialFullCoverage;