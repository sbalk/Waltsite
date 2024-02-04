import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((prjct) => ({
			slug: prjct.slug,
			title: prjct.title,
			img_fname: prjct.img_fname,
			banner_img: prjct.banner_img
		}))
	};
}
