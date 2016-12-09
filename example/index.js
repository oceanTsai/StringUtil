'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearElement = exports.clearBlank = exports.toHtmlEnter = exports.toSymbol = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Util = require('pureFun/EtonO/Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author ocean
 * @name 字串處理工具
 * @module
 */

var defauleSymbol = '<br/>';

/**
 * @function
 * @description 		將斷行符號以symbol替換跳
 * @param  {String} str 		傳入字串
 * @param  {String} symbol 	要替代的符號
 * @return {String}
 */
var toSymbol = exports.toSymbol = function toSymbol(str) {
  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defauleSymbol;
  return (0, _Util.hasVal)(str) ? str.replace(/\r\n/g, symbol).replace(/\n/g, symbol) : str;
};

/**
 * @function toHtmlEnter
 * @description 
 * @param  {String} str 		傳入字串
 * @param  {String} symbol 	要替代的符號
 * @return {JSX} 
 */
var toHtmlEnter = exports.toHtmlEnter = function toHtmlEnter(str) {
  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defauleSymbol;
  return (0, _Util.hasVal)(str) ? toSymbol(str).split(symbol).map(function (tx) {
    return _react2.default.createElement(
      'div',
      null,
      tx
    );
  }) : str;
};

/**
 * @function
 * @description 去除所有空白
 * @param  {String}
 * @return {String}
 */
var clearBlank = exports.clearBlank = function clearBlank(str) {
  return (0, _Util.hasVal)(str) ? str.replace(/\s/g, "") : '';
};

/**
 * @function
 * @description 刪除所有  html element tag
 * @param  {String}
 * @return {String}
 */
var clearElement = exports.clearElement = function clearElement(str) {
  return (0, _Util.hasVal)(str) ? str.replace(/<[^>]*>/g, '') : str;
};

exports.default = {
  toHtmlEnter: toHtmlEnter,
  toSymbol: toSymbol,
  clearBlank: clearBlank,
  clearElement: clearElement
};