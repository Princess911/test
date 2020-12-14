# Git 基础教程

## Git 概述

分布式文件系统

Linus 开发

## 安装与基础配置

windows下安装

Linux 下安装

MacOS下安装

```
git config --global user.name "你账号名"
git config --global user.email "你的Email"
```

## 几个基础概念

工作区
暂存区
本地仓库
远程仓库

## 建立本地仓库

1. 创建工作目录 `learnjs`，进入该目录

```
mkdir learnjs
cd learnjs
```

2. 执行以下命令，让该目录被 git 管理

```
git init
```

运行该命令后，当前目录下就创建了一个隐藏目录 `.git`，我们的本地仓库就放在这里。

3. 创建本地文件

打开 visual Studio code，打开 `learnjs` 目录，创建文件。

4. 执行以下命令，把创建的文件添加到暂存区

```
git add .
```

5. 执行以下命令，把文件存到本地仓库

```
git commit -m "提交说明"
```

6. 添加 SSH Key

执行如下命令：


```
ssh-keygen -t rsa -C "你的电子邮件"
```

把 id_rsa.pub 文件的内容复制出来。

到 github 或者 gitee 上添加 SSH 公钥。


7. 到 github.com 或者 gitee.com 创建仓库

在 Github 或者 Gitee 上创建仓库 learnjs

记下仓库 SSH 地址，比如
git@github.com:你的账号/learnjs.git
git@gitee.com:你的账号/learnjs.git

8. 关联本地仓库和远程仓库

执行如下命令(github作为远程仓库）：

```
git remote add origin git@github.com:你的账号/learnjs.git
```

或者（gitee作为远程仓库）：

```
git remote add origin git@gitee.com:你的账号/learnjs.git
```

9. 把本地仓库推送到远程仓库

执行如下命令，把本地仓库推送到远程仓库：

```
git push -u origin master
```

转到github.com或者gitee.com看看仓库是否已经被推送上去。





