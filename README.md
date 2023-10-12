# vite-plugin-vitepress-medium-zoom
## A plugin tool that can zoom in and view vitepress images
## 一个可以在vitepress中放大查看图片的插件工具

- 【注意】开始vitepress的时候选择  Default Theme + Customization (Add custom CSS and layout slots) 才好使，默认样式和自定义样式还没有做兼容（没有合适的方案）

![image](https://github.com/tyj-321/vite-plugin-vitepress-medium-zoom/assets/65441198/b3f28711-5d00-4e4c-a30c-64fd96585647)


# Usage
```shell
pnpm install medium-zoom
pnpm install vite-plugin-vitepress-medium-zoom
```
.virepress/config.js
```js
import MediumZoom from "vite-plugin-vitepress-medium-zoom"
export default {
  ... // other config
  vite: {
    plugins: [
      MediumZoom.vite()
    ]
  },
  ... // other config
}
```
