### 贪心算法

1. 无重叠区间；**右侧区间排序**，大于等于end，则 count + 1，最后返回 len - count
2. 身高重建队列；身高从大到小**排序**，相等时k从小到大排列，splice
3. 加油站；总和 < 0，则-1； 否则 cur < 0，则 i + 1, cur = 0
4. 跳跃游戏；cover = max(cover, i + nums[i]), i <= cover; if (cover >= len - 1) return true；
5. 跳跃游戏2；循环计算 nextDistance = max(nextDistance, i + nums[i])，如果 **i === cur**，那么count + 1, cur = nextDistance
6. 摆动序列; 当前 > 0 && prev <= 0 || cur < 0&& prev >= 0，结果 + 1，更新prev

1. 不重叠区间；**右排序**
2. 区间合并；**左排序**
3. 区间交集；a2 >= b1 && b2 >= a1, push [max(a1, b1), min(a2, b2)]; if (b2 < a2) j++ else a++