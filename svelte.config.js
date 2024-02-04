// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		// prerender: {
		// 	concurrency: 1,
		// 	crawl: true,
		// 	entries: ['/dynamicDesignPage/cncptmoto', '/dynamicDesignPage/ebike']
		// },

		prerender: {
			// use relative URLs similar to an anchor tag <a href="/test/1"></a>
			// do not include group layout folders in the path such as /(group)/test/1
			// entries: [
			// '/dynamicDesignPage/cncptmoto',
			// '/dynamicDesignPage/ebike',
			// '/dynamicDesignPage/interiordesign'
			// ]

			entries: [
				'*',
				'/',
				'/dynamicDesignPage/cncptmoto',
				'/dynamicDesignPage/ebike',
				'/dynamicDesignPage/interiordesign'
			]
		},

		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
			// base: process.env.NODE_ENV === 'production' ? '/sbalk' : ''
		}
	}
};

export default config;
