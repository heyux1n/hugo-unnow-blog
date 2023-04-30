# hugo-unnow-blog
hugo搭建的静态博客



## 子模块



### themes

使用主题[FixIt]([hugo-fixit/FixIt: 🔧 A clean, elegant but advanced blog theme for Hugo 一个简洁、优雅且高效的 Hugo 主题 (github.com)](https://github.com/hugo-fixit/FixIt))

> themes/FixIt



### posts

单独存放[文章]([heyux1n/unnow-blog-posts: unnow博客的文章 (github.com)](https://github.com/heyux1n/unnow-blog-posts))

> content/posts



## hugo博客

基于hugo，需要安装hugo



### 创建文章

```bash
# 创建文章
hugo new posts/categories/文章名称/index.md
# 安装categories分类创建文章
# 文章名称即为title
# index.md固定
# index.md同级目录下assets文件夹用于存放静态文件
```



### 启动

```bash
# bind 设置ip可访问
# buildDrafts 展示草稿
# --port=1313 默认端口1313
hugo server --bind=0.0.0.0 --buildDrafts
```



### pm2管理服务

使用pm2管理hugo服务

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

