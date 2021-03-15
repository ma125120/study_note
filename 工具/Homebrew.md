# [mac下镜像飞速安装Homebrew教程](https://zhuanlan.zhihu.com/p/90508170)

## 安装及卸载

1. 执行镜像脚本
```
/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"
```

2. 如果命令执行中卡在下面信息：ctrl + c中断
```
==> Tapping homebrew/core
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
```

执行下述命令
```
cd "$(brew --repo)/Library/Taps/"
mkdir homebrew && cd homebrew
git clone git://mirrors.ustc.edu.cn/homebrew-core.git
brew update
```
3. 卸载（如果需要的话）
```
/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/uninstall)"
```

## 设置镜像

命令查看配置信息。
```
brew config
```

镜像源：
* https://mirrors.ustc.edu.cn 中科大源
* https://mirrors.tuna.tsinghua.edu.cn 清华大学源

```
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

brew update

# 长期替换homebrew-bottles
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile

source ~/.bash_profile
```