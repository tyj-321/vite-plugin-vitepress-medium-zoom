import { createUnplugin } from 'unplugin'
export default createUnplugin((options) => {
  return {
    name: 'vite-plugin-vitepress-medium-zoom',
    enforce: 'pre',
    transformInclude(id) {
      return id.endsWith('index.js') || id.endsWith('style.css')
    },
    transform(code) {
      // index.js文件需要加上对应的处理，用于做放大查看操作的逻辑
      if (code.includes('export default')) {
        const regex = new RegExp(/export default {/g)
        // 参考https://github.com/vuejs/vitepress/issues/854#issuecomment-1293930473
        const code1 = code.replace(regex, (match, p1, p2) => {
          return `import { onMounted, watch, nextTick } from \'vue\'\nimport mediumZoom from \'medium-zoom\'\nimport { useRoute } from \'vitepress\'\n${match}`
        })
        const code2 = code1.replace(regex, (match, p1, pa) => {
          return `${match}\n  setup() {
    const route = useRoute();
    const initZoom = () => {
      new mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },`
        })
        return code2
      } else if (code.includes('--vp-c-brand')){
        return code + `.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 21;
}`
      }
    },
  }
})