module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: ['plugin:vue/vue3-recommended', 'airbnb-base', './src/@types/eslintrc-auto-import.json'],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
					['@utils', './src/utils'],
					['@components', './src/components'],
				],
				extensions: ['.ts', '.js', '.jsx', '.json'],
			},
		},
	},
	overrides: [
		{
			files: ['*.html'],
			processor: 'vue/.vue',
		},
	],
	rules: {
		indent: 'off', // 缩进
		semi: [2, 'never'], // 关闭尾分号
		camelcase: 'off', // 关闭驼峰检测
		'no-tabs': 'off', // 不用tab
		'no-plusplus': 'off', // 一元操作符
		'no-unused-expressions': 0, // 三元和短路
		'consistent-return': 'off', // 函数return必须一致
		'object-curly-newline': 'off', // {}换行关闭
		'no-param-reassign': 'off', // 函数参数赋值
		'operator-linebreak': 'off', // 等号后的换行
		'func-names': 'off', // 函数名校验
		'linebreak-style': ['error', 'unix'], // 换行符号用LF
		'implicit-arrow-linebreak': 'off', // 箭头函数换行
		'space-before-function-paren': 'off', // 函数定义时括号前面不要有空格
		'function-paren-newline': 'off', // 函数括号换行
		'vue/multi-word-component-names': 0, // 多单词命名检测
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // console配置
		'import/extensions': ['error', { vue: 'ignorePackages', js: 'nerve' }], // 导入js和vue文件关闭后缀检验
		'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }], // TS变量定义未使用
		'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.config.ts'] }],
		'import/prefer-default-export': 'off', // 关闭首选默认导出
	},
}
