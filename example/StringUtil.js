(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearElement = exports.clearBlank = exports.toHtmlEnter = exports.toSymbol = undefined;

var _generalUtil = require('general-util');

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
  return (0, _generalUtil.hasVal)(str) ? str.replace(/\r\n/g, symbol).replace(/\n/g, symbol) : str;
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
  return (0, _generalUtil.hasVal)(str) ? toSymbol(str).split(symbol).map(function (tx) {
    return '<div>' + tx + '</div>';
  }).join('') : str;
};

/**
 * @function
 * @description 去除所有空白
 * @param  {String}
 * @return {String}
 */
var clearBlank = exports.clearBlank = function clearBlank(str) {
  return (0, _generalUtil.hasVal)(str) ? str.replace(/\s/g, "") : '';
};

/**
 * @function
 * @description 刪除所有  html element tag
 * @param  {String}
 * @return {String}
 */
var clearElement = exports.clearElement = function clearElement(str) {
  return (0, _generalUtil.hasVal)(str) ? str.replace(/<[^>]*>/g, '') : str;
};

var stringUtil = {
  toHtmlEnter: toHtmlEnter,
  toSymbol: toSymbol,
  clearBlank: clearBlank,
  clearElement: clearElement
};

if (!window.stringUtil) {
  window.stringUtil = stringUtil;
}

exports.default = stringUtil;

},{"general-util":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @author ocean
 * @name 一般工具 
 * @module
 */

//判斷有無數值
var hasVal = exports.hasVal = function hasVal(val) {
	return !(val === null || typeof val === 'undefined' || val === '' || val === false);
};

//數值轉字串
var toStr = exports.toStr = function toStr(number) {
	return hasVal(number) ? number + '' : null;
};

//字串轉10進數值
var toInt = exports.toInt = function toInt(numStr) {
	return hasVal(numStr) ? parseInt(numStr, 10) : NaN;
};

//取整數
var clearFloat = exports.clearFloat = function clearFloat(number) {
	return hasVal(number) && !isNaN(number) ? number | 0 : NaN;
};

var filterInt = exports.filterInt = function filterInt(value) {
	return (/^(\-|\+)?([0-9]+|Infinity)$/.test(value) ? Number(value) : NaN
	);
};

var filterFloat = exports.filterFloat = function filterFloat(value) {
	return (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value) ? Number(value) : NaN
	);
};

var generalUtil = {
	hasVal: hasVal,
	toStr: toStr,
	toInt: toInt,
	clearFloat: clearFloat,
	filterInt: filterInt,
	filterFloat: filterFloat
};

if (!window.generalUtil) {
	window.generalUtil = generalUtil;
}

exports.default = generalUtil;

},{}]},{},[1]);
