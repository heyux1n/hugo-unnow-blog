# hugo-unnow-blog

hugo 搭建的静态博客

标题：`unnow`
关键词：`unnow`, `heyux1n`, `heyuxin`, `unnow blog`, `heyuxin’s blog`, `heyux1n个人博客`, `heyuxin个人博客`, `何裕鑫`

unnow，IT 技术分享与探索。heyux1n 的个人博客，致力于交流、分享、探索和记录的宗旨，欢迎来踩，相互交流，共同探索未知数，追寻心中的答案

## 项目初始化

### 克隆项目

```bash
# 克隆项目
git clone https://github.com/heyux1n/hugo-unnow-blog.git
# 初始化子仓库
git submodule init
# 更新子仓库代码
git submodule update

```

### 子仓库

#### themes

使用主题[FixIt](https://github.com/hugo-fixit/FixIt)

> themes/FixIt

#### posts

单独存放[文章](https://github.com/heyux1n/unnow-blog-posts)

> content/posts

### 更新子仓库

```bash
# 父仓库的根目录下执行。它会遍历子模块，并根据父仓库所指定的提交信息，更新子模块的代码到最新状态，并将最新的提交合并到子模块的本地分支
git submodule update --remote --merge
```

## hugo 博客

基于 hugo，需要安装 hugo

### 创建文章

```bash
# 创建文章
hugo new posts/categories/文章名称/index.md
# 安装categories分类创建文章
# 文章名称即为title
# index.md固定
# index.md同级目录下assets文件夹用于存放静态文件
```

### 开发模式启动

```bash
# bind 设置ip可访问
# buildDrafts 展示草稿
# --port=1313 默认端口1313
hugo server --bind=0.0.0.0 --buildDrafts
```

### pm2 管理服务

使用 pm2 管理 hugo 服务

创建文件`ecosystem.config.js`

```js
module.exports = {
  apps: [
    {
      name: 'hugo-server',
      script: 'hugo',
      args: 'server --bind=0.0.0.0'
    }
  ]
};
```

博客根目录下执行命令

```bash
# 启动
pm2 start ecosystem.config.js

# 关闭
pm2 stop hugo-blog-server
```

### nginx 部署（⭐ 目前采用）

```bash
# hugo编译静态代码至public目录下
hugo

# nginx下配置https，并将ip访问、http访问重定向至https下的www网址下
```
