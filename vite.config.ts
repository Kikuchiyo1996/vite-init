import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import compressPlugin from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import viteImagemin from 'vite-plugin-imagemin'
import { ElementPlusPath, ElementPlusCss, VueRouter, VueDemi, Pinia, VueI18n } from './src/cdn/index'

export default defineConfig(({ mode }) => {
	/**
	 * ! 环境变量
	 */
	const diffMode = loadEnv(mode, process.cwd())
	const isDev = mode === 'development'
	return {
		base: diffMode.VITE_APP_PUBLIC_PATH,
		plugins: [
			vue(),
			/**
			 * ! 打包分析
			 */
			visualizer({
				open: false,
				gzipSize: true,
				brotliSize: true,
			}),
			/**
			 * ! 超过5KB开启Gzip
			 */
			compressPlugin({
				threshold: 5000,
			}),
			// ! 图片压缩
				viteImagemin({
					gifsicle: {
						optimizationLevel: 7,
						interlaced: false,
					},
					optipng: {
						optimizationLevel: 7,
					},
					webp: {
						quality: 75,
					},
					mozjpeg: {
						quality: 65,
					},
					pngquant: {
						quality: [0.65, 0.9],
						speed: 4,
					},
					svgo: {
						plugins: [
							{
								removeViewBox: false,
							},
							{
								removeEmptyAttrs: false,
							},
						],
					},
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
						path: ElementPlusPath,
						css: ElementPlusCss,
					},
					{
						name: 'vue-router',
						var: 'VueRouter',
						path: VueRouter,
					},
					{
						name: 'vue-demi',
						var: 'VueDemi',
						path: VueDemi,
					},
					{
						name: 'pinia',
						var: 'Pinia',
						path: Pinia,
					},
					{
						name: 'vue-i18n',
						var: 'VueI18n',
						path: VueI18n,
					},
				],
			}),
			/**
			 * ! 自动导入组件
			 */
			AutoImport({
				include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
				dts: 'src/@types/auto-imports.d.ts',
				imports: ['pinia', 'vue-router'],
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
			sourcemap: true, // 源文件 便于定位bug
			outDir: diffMode.VITE_APP_OUTPUT_DIR,
			cssCodeSplit: true, // 分割css
			assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
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
				'@components': resolve(__dirname, 'src/components'),
				'@utils': resolve(__dirname, 'src/utils'),
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
