import { findSubstring } from './answer'
import { data } from './mock'

data.map((v) => {
	const msg = `${v.s} ${v.words.toString()}`
	test(msg, () => {
		expect(findSubstring(v.s, v.words)).toStrictEqual(v.res)
	})
})
