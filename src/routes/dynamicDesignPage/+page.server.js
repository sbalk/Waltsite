import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((prjct) => ({
			design_project: prjct.design_project,
			title: prjct.title,
			image: prjct.img_fname
		}))
	};
}
