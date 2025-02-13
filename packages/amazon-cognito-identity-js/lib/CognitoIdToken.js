'use strict';

exports.__esModule = true;
exports['default'] = void 0;
var _CognitoJwtToken2 = _interopRequireDefault(require('./CognitoJwtToken'));
function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}
function _inheritsLoose(subClass, superClass) {
	subClass.prototype = Object.create(superClass.prototype);
	subClass.prototype.constructor = subClass;
	_setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
	_setPrototypeOf = Object.setPrototypeOf
		? Object.setPrototypeOf.bind()
		: function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
		  };
	return _setPrototypeOf(o, p);
}
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/** @class */
var CognitoIdToken = /*#__PURE__*/ (function (_CognitoJwtToken) {
	_inheritsLoose(CognitoIdToken, _CognitoJwtToken);
	/**
	 * Constructs a new CognitoIdToken object
	 * @param {string=} IdToken The JWT Id token
	 */
	function CognitoIdToken(_temp) {
		var _ref = _temp === void 0 ? {} : _temp,
			IdToken = _ref.IdToken;
		return _CognitoJwtToken.call(this, IdToken || '') || this;
	}
	return CognitoIdToken;
})(_CognitoJwtToken2['default']);
exports['default'] = CognitoIdToken;
