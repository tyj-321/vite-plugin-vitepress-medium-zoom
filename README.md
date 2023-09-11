# vite-plugin-vitepress-medium-zoom
## A plugin tool that can zoom in and view vitepress images

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
