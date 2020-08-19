#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo 'songjian925.cn' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:it-song1992/it-song1992.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://it-song1992:${GITHUB_TOKEN}@github.com/it-song1992/it-song1992.github.io.git
  git config --global user.name "it-song1992"
  git config --global user.email "2625601001@qq.com"
fi

git init
git add -A
git commit -m "${msg}"


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f $githubUrl master:gh-pages

cd -
rm -rf docs/.vuepress/dist