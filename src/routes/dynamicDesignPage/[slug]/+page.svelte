<script lang="ts">
	console.log('test');
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	export let data;
	let element;

	onMount(() => {
		scrollToRight(element);
		console.log(element.scrollWidth);
		console.log(Math.round(element.scrollWidth * Math.random()));
	});
	const scrollToRight = async (node) => {
		node.scroll({
			left: Math.round((element.scrollWidth * Math.random()) / 2),
			behavior: 'smooth'
		});
	};

	onMount(() => {});
</script>

<h1 class="title">{data.post.title}</h1>

<div class="scroll-container" style="position:relative;z-index:5">
	<div bind:this={element} class="scroll-image">
		<!-- https://www.reddit.com/r/sveltejs/comments/v8owzc/is_it_possible_to_get_a_list_of_images_from_a/ -->
		<img class="image" src="{base}/DesignPage/{data.post.img_fname}/1.png" alt="asdf" />
		<img class="image" src="{base}/DesignPage/{data.post.img_fname}/2.png" alt="asdf" />
		<img class="image" src="{base}/DesignPage/{data.post.img_fname}/3.png" alt="asdf" />
		<img class="image" src="{base}/DesignPage/{data.post.img_fname}/4.png" alt="asdf" />
		<img class="image" src="{base}/DesignPage/{data.post.img_fname}/5.png" alt="asdf" />
	</div>
</div>

<p class="bottom-text">
	{data.post.content}
</p>

<style>
	.scroll-image {
		display: flex; /* Use flexbox to align images horizontally */
		overflow-x: auto; /* Enable horizontal scrolling if images overflow */
		white-space: nowrap; /* Prevent images from wrapping to the next line */
	}
	.title {
		position: absolute;
		top: 15vh;
		left: 50vw;
	}
	.bottom-text {
		position: absolute;
		top: 70vh;
		left: 15vw;
		width: 40vh;
	}
	.scroll-container {
		top: 30vh;
		position: absolute;
	}
	.scroll-image {
		overflow: auto;
		width: 100vw;
	}
	.image {
		height: 40vh;
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
