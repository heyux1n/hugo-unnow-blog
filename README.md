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

