class ListNode {
	constructor(val, next) {
		this.val = val
		this.next = next
	}
	toString() {
		let res = []
		let cur = this
		while (cur) {
			res.push(cur.val)
			cur = cur.next
		}
		return res.join(',')
	}
}

var toList = (list) => {
	var root = new ListNode()
	var cur = root
	list.forEach((val) => {
		cur.next = new ListNode(val)
		cur = cur.next
	})

	return root.next
}

function reverseMN(head, m, n) {
	if (m === 1) return reverseN(head, n)
	if (m === n) return head

	let cur = head,
		prev = null
	for (let i = 1; i < m; i++) {
		if (!cur) return head

		prev = cur
		cur = cur.next
	}
	if (!prev) return reverseMN(head, n)
	prev.next = reverseN(cur, n)

	return head
}
function reverseN(head, n) {
	if (n === 1) return head

	let prev = null,
		cur = head,
		count = 0
	while (cur && count < n) {
		count++
		const next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	head.next = cur

	return prev
}
var root = toList([1, 2, 3, 4, 5])
reverseMN(root, 1, 5)

class LRU {
	constructor(limit) {
		this.limit = limit
		this.node = new ListNode()
		this.map = new Map()
	}
	get(key) {
		if (this.map.has(key)) {
			const val = this.map.get(key)
			let prev = this.node
			let cur = prev.next
			while (cur) {
				if (cur.val === key) {
					prev.next = cur.next
				} else {
					prev = cur
				}

				cur = cur.next
			}
			prev.next = new ListNode(key)

			return val
		}

		return -1
	}
	set(key, val) {
		let count = 0
		let prev = this.node
		let cur = prev.next
		while (cur) {
			if (cur.val === key) {
				prev.next = cur.next
				cur = cur.next
			} else {
				count++
				prev = cur
				cur = cur.next
			}
		}
		if (count >= this.limit) {
			this.node = this.node.next
			this.map.delete(this.node.val)
		}
		prev.next = new ListNode(key)

		this.map.set(key, val)
	}
}
var root = toList([1, 2, 3, 4, 5])
var node = new LRU(2)
node.set('a', 1)
node.set('b', 2)
node.set('c', 3)
function reverseGroup(head, n = 2) {
	if (!head) return head

	let prev = head
	let cur = head
	for (let i = 0; i < n; i++) {
		if (!cur) return head
		cur = cur.next
	}

	const node = reverseRange(prev, cur)
	prev.next = reverseGroup(cur, n)

	return node
}
function reverseRange(head, b) {
	let prev = b
	let cur = head
	while (cur) {
		if (cur === b) break

		const next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	return prev
}

function del(root, target) {
	let prev = new ListNode()
	let node = prev
	let cur = root
	while (cur) {
		if (cur.val === target) {
			prev.next = cur.next
			break
		}
		prev = cur
		cur = cur.next
	}

	return node.next
}
del(root, 2)

function LCS(a, b) {
	const dp = []
	const m = a.length
	const n = b.length
	for (let i = 0; i <= m; i++) dp[i] = [0]
	for (let i = 0; i <= n; i++) dp[0][i] = 0

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (a[i - 1] === b[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}

	return dp[m][n]
}

function needDelte(a, b) {
	let res = 0
	const dp = [[0]]
	const m = a.length
	const n = b.length
	for (let i = 1; i <= m; i++) {
		dp[i] = dp[i] || []
		dp[i][0] = dp[i - 1][0] + a.charCodeAt(i - 1)
	}
	for (let i = 1; i <= n; i++) {
		dp[0][i] = dp[0][i - 1] + b.charCodeAt(i - 1)
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (a[i - 1] === b[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1]
			} else {
				dp[i][j] = Math.min(
					dp[i - 1][j] + a.charCodeAt(i - 1),
					dp[i][j - 1] + b.charCodeAt(j - 1),
				)
			}
		}
	}

	return dp[m][n]
}
needDelte(`sea`, `eat`)

function longest(s) {
	const dp = [[0]]
	for (let i = 0; i < s.length; i++) dp[i] = dp[i] || []

	let len = 1,
		start = 0
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j <= i; j++) {
			if (i - j < 2) {
				dp[j][i] = s[i] === s[j]
			} else {
				dp[j][i] = s[i] === s[j] && dp[j + 1][i - 1]
			}

			if (dp[j][i] && i + 1 - j > len) {
				len = i + 1 - j
				start = j
			}
		}
	}

	return s.slice(start, start + len - 1)
}
longest(`sabccbaq`)

function longest1(s) {
	const dp = [[0]]
	for (let i = 0; i < s.length; i++) {
		dp[i] = dp[i] || []
		dp[i][i] = 1
	}

	for (let i = s.length - 2; i >= 0; i--) {
		for (let j = i; j < s.length; j++) {
			if (s[i] === s[j]) {
				dp[i][j] = (dp[i + 1][j - 1] || 0) + 2
			} else {
				dp[i][j] = Math.max(dp[i + 1][j] || 0, dp[i][j - 1] || 0)
			}
		}
	}

	return dp[0][s.length - 1]
}
longest1(`AsabccbaqA`)

function LIS(nums) {
	const dp = []
	let res = 1
	for (let i = 0; i < nums.length; i++) {
		if (dp.length) {
			let count = 1
			for (let j = 0; j < dp.length; j++) {
				if (nums[i] >= nums[j]) {
					count = Math.max(dp[j] + 1, count)
				}
			}

			res = Math.max(res, count)
			dp.push(count)
		} else {
			dp.push(1)
		}
	}

	return res
}
LIS([1, 8, 5, 3, 6, 9, 20])

function toEight(num) {
	const res = []
	let f = 0
	let n = num
	while (n) {
		res.unshift(n % 8)
		f = n % 8 === 0 ? 1 : 0

		n = (n / 8) >> 0
	}

	return (f ? f : '') + res.join('')
}

toEight(80)

function add(a, b) {
	const res = []
	const max = Math.max(a.length, b.length)
	a = a.padStart(max, 0)
	b = b.padStart(max, 0)

	let f = 0
	for (let i = max - 1; i >= 0; i--) {
		const sum = +a[i] + +b[i] + f
		res[i] = sum % 10
		f = (sum / 10) >> 0
	}

	return (f ? f : '') + res.join('')
}
add('88', '88')

function mul(a, b) {
	const res = []

	for (let i = a.length - 1; i >= 0; i--) {
		for (let j = b.length - 1; j >= 0; j--) {
			const sum = a[i] * b[j] + (res[i + j + 1] || 0)

			res[i + j + 1] = sum % 10
			res[i + j] = ((res[i + j] || 0) + sum / 10) >> 0
		}
	}
	for (let i = 0; i < res.length; i++) {
		if (res[i] === 0) res[i] = ''
		else break
	}

	return res.join('')
}
mul('88', '88')
