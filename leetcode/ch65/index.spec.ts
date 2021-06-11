import { isNumber } from './index'

test(`有效数字 1`, () => {
	expect(isNumber(`2`)).toStrictEqual(true)
	expect(isNumber(`0089`)).toStrictEqual(true)

	expect(isNumber(`-0.1`)).toStrictEqual(true)
	expect(isNumber(`+3.14`)).toStrictEqual(true)
	expect(isNumber(`4.`)).toStrictEqual(true)
	expect(isNumber(`4.14`)).toStrictEqual(true)
	expect(isNumber(`-.9`)).toStrictEqual(true)
	expect(isNumber(`.9`)).toStrictEqual(true)

	expect(isNumber(`2e10`)).toStrictEqual(true)
	expect(isNumber(`-90E3`)).toStrictEqual(true)
	expect(isNumber(`3e+7`)).toStrictEqual(true)
	expect(isNumber(`+6e-1`)).toStrictEqual(true)
	expect(isNumber(`53.5e93`)).toStrictEqual(true)
	expect(isNumber(`-123.456e789`)).toStrictEqual(true)
	expect(isNumber(`45.e456`)).toStrictEqual(true)
})

test(`有效数字 2`, () => {
	expect(isNumber(`asd`)).toStrictEqual(false)
	expect(isNumber(`1a`)).toStrictEqual(false)
	expect(isNumber(`1e`)).toStrictEqual(false)
	expect(isNumber(`e3`)).toStrictEqual(false)
	expect(isNumber(`99e2.5`)).toStrictEqual(false)
	expect(isNumber(`--6`)).toStrictEqual(false)
	expect(isNumber(`-+3`)).toStrictEqual(false)
	expect(isNumber(`96a456`)).toStrictEqual(false)
	expect(isNumber(`.`)).toStrictEqual(false)
	expect(isNumber(`..2`)).toStrictEqual(false)
	expect(isNumber(`e+`)).toStrictEqual(false)
	expect(isNumber(`.e456`)).toStrictEqual(false)
	expect(isNumber(`6ee69`)).toStrictEqual(false)
	expect(isNumber(`92e1740e91`)).toStrictEqual(false)
})
