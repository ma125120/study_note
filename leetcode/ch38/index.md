<div class="description__2b0C"><div data-show-mask="false" class="css-xfm0cl-Container eugt34i0"><h4 data-cypress="QuestionTitle" class="css-10c1h40-Title eugt34i1"><a href="/problems/count-and-say/">38. 外观数列</a></h4><div class="css-1e1vffy-Tools e1o5n5iy0"><span data-small-spacing="true" class="css-1p5igso-Difficulty e1o5n5iy1">难度</span><span data-degree="easy" class="css-1p5igso-Difficulty e1o5n5iy1">简单</span><button class="css-nabodd-Button e167268t1"><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon"><path fill-rule="evenodd" d="M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 01-2-2v-8a2 2 0 012-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z"></path></svg><span>669</span></button><button class=" css-nabodd-Button e167268t1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M15.392 8.23l5.695.832a.942.942 0 01.521 1.607l-4.12 4.013.972 5.67a.942.942 0 01-1.367.993L12 18.667l-5.093 2.678a.942.942 0 01-1.367-.993l.972-5.67-4.12-4.013a.942.942 0 01.52-1.607l5.696-.833 2.547-5.16a.942.942 0 011.69 0l2.547 5.16zm-1.329 1.826L12 5.876l-2.063 4.18-4.615.675 3.34 3.252-.789 4.594L12 16.407l4.127 2.17-.788-4.594 3.34-3.252-4.616-.675z" clip-rule="evenodd"></path></svg><span>收藏</span></button><button class=" css-nabodd-Button e167268t1"><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon"><path fill-rule="evenodd" d="M17 5V2l5 5h-9a2 2 0 00-2 2v8H9V9a4 4 0 014-4h4zm3 14V9h2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h3v2H4v14h16z"></path></svg><span>分享</span></button><button class="css-nabodd-Button e167268t1"><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon"><path fill-rule="evenodd" d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>切换为英文</button><button class="css-nabodd-Button e167268t1"><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon"><path fill-rule="evenodd" d="M12 22c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-6l2 2v1H4v-1l2-2v-5c0-3.08 1.64-5.64 4.5-6.32V4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.68C16.37 5.36 18 7.93 18 11v5zm-2 1v-6c0-2.48-1.51-4.5-4-4.5S8 8.52 8 11v6h8z"></path></svg>接收动态</button><button class="css-nabodd-Button e167268t1"><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon"><path fill-rule="evenodd" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2v-2zm0-6h2v4h-2V6z"></path></svg>反馈</button></div></div><div class="content__1Y2H"><div class="notranslate"><p>给定一个正整数 <code>n</code> ，输出外观数列的第 <code>n</code> 项。</p>

<p>「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。</p>

<p>你可以将其视作是由递归公式定义的数字字符串序列：</p>

<ul>
	<li><code>countAndSay(1) = "1"</code></li>
	<li><code>countAndSay(n)</code> 是对 <code>countAndSay(n-1)</code> 的描述，然后转换成另一个数字字符串。</li>
</ul>

<p>前五项如下：</p>

<pre>1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1 
描述前一项，这个数是 <code>1</code> 即 “ 一 个 1 ”，记作 <code>"11"
</code>描述前一项，这个数是 <code>11</code> 即 “ 二 个 1 ” ，记作 <code>"21"
</code>描述前一项，这个数是 <code>21</code> 即 “ 一 个 2 + 一 个 1 ” ，记作 "<code>1211"
</code>描述前一项，这个数是 <code>1211</code> 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "<code>111221"</code>
</pre>

<p>要 <strong>描述</strong> 一个数字字符串，首先要将字符串分割为 <strong>最小</strong> 数量的组，每个组都由连续的最多 <strong>相同字符</strong> 组成。然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。要将描述转换为数字字符串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。</p>

<p>例如，数字字符串 <code>"3322251"</code> 的描述如下图：</p>
<img style="width: 581px; height: 172px;" src="https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg" alt="">
<ul>
</ul>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>n = 1
<strong>输出：</strong>"1"
<strong>解释：</strong>这是一个基本样例。
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>n = 4
<strong>输出：</strong>"1211"
<strong>解释：</strong>
countAndSay(1) = "1"
countAndSay(2) = 读 "1" = 一 个 1 = "11"
countAndSay(3) = 读 "11" = 二 个 1 = "21"
countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 30</code></li>
</ul>
</div></div><div class="css-dhjq4w-Submission e1oinl1z0"><span class="css-16xftbw-Type e1oinl1z2">通过次数</span><span class="css-1ne6r7t-Count e1oinl1z3">177,887</span><div class="css-1vr2lla-Separator e1oinl1z1"></div><span class="css-16xftbw-Type e1oinl1z2">提交次数</span><span class="css-1ne6r7t-Count e1oinl1z3">310,116</span></div><div class="header__2ao3"><div class="css-rrr7do enw8myh0">在真实的面试中遇到过这道题？</div><div class="btn-wrapper__PZW-"><button class="css-9bi2u7-BaseButtonComponent ery7n2v0"><span>是</span></button></div><div class="btn-wrapper__PZW-"><button class="css-9bi2u7-BaseButtonComponent ery7n2v0"><span>否</span></button></div></div><div class="container__35eI"><div class="label__1TJ4">贡献者</div><div class="contributors__1Ef7"><div><a id="0" target="_blank"><img class="avatar__3dBl" src="https://static.leetcode-cn.com/cn-legacy-assets/images/LeetCode_avatar.png" alt="LeetCode"></a></div></div></div><div class="css-5nit4e"><div class="css-a8m6w7-baseHeaderStyle elxju5k0"><div class="css-1jqueqk"><div class="header__1If0"><span>相关企业<svg viewBox="0 0 24 24" width="1em" height="1em" class="info-icon__3L3i css-1lc17o4-icon"><path fill-rule="evenodd" d="M13.91 3.5c.436.031.795.187 1.075.468.28.28.421.63.421 1.052 0 .42-.14.771-.42 1.052-.281.28-.64.42-1.076.42-.437 0-.795-.14-1.076-.42-.28-.28-.42-.631-.42-1.052 0-.421.14-.772.42-1.052.28-.281.64-.437 1.076-.468zm-.374 4.77c.56 0 .85.233.865.7.015.468-.024.874-.117 1.217l-1.17 4.395c-.404 1.465-.576 2.385-.514 2.759.125.25.398.25.819 0 .42-.25.818-.5 1.192-.748l.047-.047c.062 0 .125.03.187.093l.187.328c.031.062 0 .124-.094.187L12.6 18.79c-.405.28-.966.507-1.683.678-.717.172-1.029-.35-.935-1.566.561-2.681 1.036-4.684 1.426-6.009.39-1.325.101-1.675-.865-1.052l-1.075.702c-.094.062-.156.085-.187.07-.032-.016-.078-.102-.14-.257L9 11.122c0-.031.047-.094.14-.187.094-.094.678-.522 1.754-1.286 1.075-.764 1.956-1.224 2.642-1.38z"></path></svg></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="lock-icon__26Ue css-3v6l1g-Svg ea8ky5j0"><path fill-rule="evenodd" d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"></path></svg></div></div><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1fdhzq0-icon"><path fill-rule="evenodd" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div><div class="css-1hky5w4"></div></div><div class="css-5nit4e"><div class="css-a8m6w7-baseHeaderStyle elxju5k0"><div class="css-1jqueqk"><div class="header__22S7">相关标签</div></div><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1fdhzq0-icon"><path fill-rule="evenodd" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div><div class="css-1hky5w4"><div class="topic-tags__1S89"><a href="/tag/string/" class="topic-tag__1z4- css-15ki55d-BasicTag e4dtce60"><span>字符串</span></a></div></div></div><div class="css-5nit4e"><div class="css-a8m6w7-baseHeaderStyle elxju5k0"><div class="css-1jqueqk"><div class="header___3eQ">相似题目</div></div><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1fdhzq0-icon"><path fill-rule="evenodd" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div><div class="css-1hky5w4"><div class="question__3cwj"><a class="title__2Eh1" href="/problems/encode-and-decode-strings/">字符串的编码与解码</a><div class="difficulty__1lqy medium__36nf">中等</div></div><div class="question__3cwj"><a class="title__2Eh1" href="/problems/string-compression/">压缩字符串</a><div class="difficulty__1lqy medium__36nf">中等</div></div></div></div><div class="css-5nit4e"><div class="css-a8m6w7-baseHeaderStyle elxju5k0"><div class="css-1jqueqk"><div class="header__1OHv">显示提示1</div></div><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1fdhzq0-icon"><path fill-rule="evenodd" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div><div class="css-1hky5w4"><div>The following are the terms from n=1 to n=10 of the count-and-say sequence:
<pre> 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221 
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211
</pre></div></div></div><div class="css-5nit4e"><div class="css-a8m6w7-baseHeaderStyle elxju5k0"><div class="css-1jqueqk"><div class="header__1OHv">显示提示2</div></div><svg viewBox="0 0 24 24" width="1em" height="1em" class="css-1fdhzq0-icon"><path fill-rule="evenodd" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div><div class="css-1hky5w4"><div>To generate the <i>n</i><sup>th</sup> term, just <i>count and say</i> the <i>n</i>-1<sup>th</sup> term.</div></div></div></div>