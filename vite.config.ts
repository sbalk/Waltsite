// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });

import { sveltekit } from '@sveltejs/kit/vite';
// import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
        sveltekit(), 
        // enhancedImages()
    ],
    // define: {
    //     IMAGE_DIR: '/lib',
    // },
	ssr: {
		noExternal: ['tsparticles', '@tsparticles/slim', '@tsparticles/engine', '@tsparticles/svelte'] // add all tsparticles libraries here, they're not made for SSR, they're client only
	},
});
