import MediumZoom from "../../../src/index"
export default {
  title: "test",
  base: "/",
  description: '一个测试',
  vite: {
    plugins: [
      MediumZoom.vite()
    ]
  },
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: '2️⃣0️⃣2️⃣3️⃣',
          items: [
            { text: '测试', link: '../documents/use-pnpm.html' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}
