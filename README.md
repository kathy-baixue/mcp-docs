# MCP
## 文档使用以下组件
https://fumadocs.vercel.app/

## 部署方式使用Nginx + Nextjs生成静态资源
```nginx
try_files $uri $uri/index.html $uri.html $request_uri/index.html;
```

## 编写文档
* 在`content/docs`目录下编写文档，文档格式为`mdx`，可以使用`md`和`jsx`语法。
* 使用Markdown: https://fumadocs.vercel.app/docs/ui/markdown
* 使用MDX： https://fumadocs.vercel.app/docs/ui/mdx
* 官方文档： https://mdxjs.com/docs/

## 发布到 https://mcp.thinkinai.xyz
* release打tag，即可通过github action自动发布到https://mcp.thinkinai.xyz