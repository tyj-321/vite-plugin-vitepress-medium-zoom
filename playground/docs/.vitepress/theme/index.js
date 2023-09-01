import Theme from 'vitepress/theme'
import './style.css'
export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
  },
}
