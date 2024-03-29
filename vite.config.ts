/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [postcssNesting],
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
	resolve: {
		alias: {
			'@': `${__dirname}/src`,
			'@routes': `${__dirname}/src/routes`,
			'@pages': `${__dirname}/src/pages`,
			'@interfaces': `${__dirname}/src/interfaces`,
			'@interceptors': `${__dirname}/src/interceptors`,
			'@constants': `${__dirname}/src/constants`,
			'@sass': `${__dirname}/src/sass`,
			'@assets': `${__dirname}/src/assets`,
			'@components': `${__dirname}/src/components`,
			'@services': `${__dirname}/src/services`,
			'@tests': `${__dirname}/src/tests`,
			'@store': `${__dirname}/src/store`,
			'@slices': `${__dirname}/src/store/slices`,
			'@hooks': `${__dirname}/src/hooks`,
		},
	},
});
