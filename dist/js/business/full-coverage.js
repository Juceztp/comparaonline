"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FullCoverage = function () {
	function FullCoverage() {
		_classCallCheck(this, FullCoverage);
	}

	_createClass(FullCoverage, [{
		key: "getPrice",
		value: function getPrice(price, sell) {
			if (price > 49) return 50;

			return sell < 0 ? price + 2 : price + 1;
		}
	}]);

	return FullCoverage;
}();

exports.default = FullCoverage;