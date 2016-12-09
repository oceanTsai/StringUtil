import React, {Component} from 'react'
import {hasVal}  from 'pureFun/EtonO/Util'

/**
 * @author ocean
 * @name 字串處理工具
 * @module
 */

const defauleSymbol = '<br/>'

/**
 * @function
 * @description 		將斷行符號以symbol替換跳
 * @param  {String} str 		傳入字串
 * @param  {String} symbol 	要替代的符號
 * @return {String}
 */
export const toSymbol=(str, symbol=defauleSymbol)=>(
	hasVal(str) 
		? str.replace(/\r\n/g, symbol).replace(/\n/g, symbol)
		: str
)

/**
 * @function toHtmlEnter
 * @description 
 * @param  {String} str 		傳入字串
 * @param  {String} symbol 	要替代的符號
 * @return {JSX} 
 */
export const toHtmlEnter=(str, symbol=defauleSymbol)=>(
	hasVal(str)
		? toSymbol(str).split(symbol).map(tx=>(<div>{tx}</div>))
		: str
)

/**
 * @function
 * @description 去除所有空白
 * @param  {String}
 * @return {String}
 */
export const clearBlank=(str)=>(
	hasVal(str)
		? str.replace(/\s/g, "")
		: ''
)

/**
 * @function
 * @description 刪除所有  html element tag
 * @param  {String}
 * @return {String}
 */
export const clearElement=(str)=>(
	hasVal(str)
		? str.replace(/<[^>]*>/g, '')
		: str
)

export default {
	toHtmlEnter : toHtmlEnter,
	toSymbol : toSymbol,
	clearBlank : clearBlank,
	clearElement : clearElement
}
