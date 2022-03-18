import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import compressPlugin from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

export default defineConfig(({ mode }) => {
	/**
	 * ! 环境变量
	 */
	const diffMode = loadEnv(mode, process.cwd())
	const isDev = mode === 'development'
	console.log(mode, isDev)

	return {
		base: diffMode.VITE_APP_PUBLIC_PATH,
		plugins: [
			vue(),
			/**
			 * ! 打包分析
			 */
			visualizer({
				open: true,
				gzipSize: true,
				brotliSize: true,
			}),
			/**
			 * ! 超过5KB开启Gzip
			 */
			compressPlugin({
				threshold: 5000,
			}),
			/**
			 * ! CDN引入并排除打包
			 */
			importToCDN({
				modules: [
					autoComplete('vue'),
					autoComplete('axios'),
					{
						name: 'element-plus',
						var: 'ElementPlus',
						path: 'https://cdn.jsdelivr.net/npm/element-plus@2.1.3/dist/index.full.min.js',
						css: 'https://cdn.jsdelivr.net/npm/element-plus@2.1.3/dist/index.min.css',
					},
					{
						name: 'vue-router',
						var: 'VueRouter',
						path: 'https://cdn.jsdelivr.net/npm/vue-router@4.0.14/dist/vue-router.global.prod.min.js',
					},
					{
						name: 'vue-demi',
						var: 'VueDemi',
						path: 'https://cdn.jsdelivr.net/npm/vue-demi@0.12.1/lib/index.iife.min.js',
					},
					{
						name: 'pinia',
						var: 'Pinia',
						path: 'https://cdn.jsdelivr.net/npm/pinia@2.0.12/dist/pinia.iife.min.js',
					},
				],
			}),
			/**
			 * ! 自动导入组件
			 */
			AutoImport({
				include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
				dts: 'src/@types/auto-imports.d.ts',
				imports: ['vue', 'pinia', 'vue-router'],
				// eslint 全局配置
				eslintrc: {
					enabled: true,
					filepath: 'src/@types/eslintrc-auto-import.json',
					globalsPropValue: true,
				},
			}),
			ViteComponents({
				dirs: ['src/components'],
				extensions: ['vue'],
				dts: 'src/@types/components.d.ts',
			}),
		],
		/**
		 * ! 打包配置
		 */
		build: {
			sourcemap: isDev, // 源文件 便于定位bug
			outDir: diffMode.VITE_APP_OUTPUT_DIR,
			rollupOptions: {
				/**
				 * ! 打包输出文件目录和代码拆分
				 */
				output: {
					chunkFileNames: 'static/js/[name]-[hash].js',
					entryFileNames: 'static/js/[name]-[hash].js',
					assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
					manualChunks(id, { getModuleInfo }) {
						// 这里可以按路由拆分
						/* 	if (id.includes('src/router_a')) {
							return 'router_a'
						} */
						// node_modules
						if (id.includes('node_modules')) {
							return 'vendor'
						}
						// 	被多处引用的组件
						const reg = /(.*)\/src\/components\/(.*)/
						if (reg.test(id)) {
							const importersLen = getModuleInfo(id).importers.length
							if (importersLen > 1) {
								return 'common'
							}
						}
					},
				},
			},
		},
		/**
		 * ! 项目别名
		 */
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
			extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
		},
		/**
		 * ! 开发服务器
		 */
		server: {
			port: 3000,
			open: true,
			host: true,
			https: true,
			/* proxy: {
				'/api':diffMode.VITE_APP_BASE_URL,
			}, */
		},
	}
})
