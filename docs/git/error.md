---
sidebar: false
prev: ./command
next: false
---
# Git问题记录
## Git 中.gitignore 使用和.gitignore 无效的解决方法
1. 创建gitignore文件
```sh
touch .gitignore 
```
2. 然后打开文件
```
open .gitignore
```
3. 添加忽略信息并保存
```
OS X
.DS_Store
# Xcode
build/
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata
*.xccheckout
profile
*.moved-aside
DerivedData
*.hmap
*.ipa
# Bundler
.bundle
```
可是居然没有效果，后来谷歌才知道：
.gitignore只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore 是无效的。   
解决方法是先把本地缓存删除，然后再提交。
```sh
git rm -r --cached .
git add .
git commit -m 'We really don't want Git to track this anymore!'
```
如果缓存中有重要的数据更改，那么你需要单独删除不要的缓存：
```sh
git rm --cached logs/xx.log
```
补充一下 .gitignore 的匹配规则：
此为注释 – 将被 Git 忽略

- .a        # 忽略所有 .a 结尾的文件
- !lib.a    # 但 lib.a 除外
- /TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
- build/    # 忽略 build/ 目录下的所有文件
- doc/.txt  # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt

参考
- [Git 忽略已经被提交的文件](https://segmentfault.com/q/1010000000430426)   
- [Git 忽略规则及 .gitignore 规则不生效的解决办法](http://www.pfeng.org/archives/840)