git reset --soft [HEAD] 撤销commit，不撤销add，不改变文件
git reset --mixed [HEAD] 默认行为。撤销commit 和 add，不改变文件
git reset --hard [HEAD] 撤销commit 和 add，改变文件

git checkout [分支名] 切换到该分支
git checkout [HEAD] [文件名] 将文件内容改写为commit下的文件，