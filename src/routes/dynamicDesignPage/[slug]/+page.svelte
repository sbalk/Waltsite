<script lang="ts">
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
		<img class="image" src="{base}/Design/{data.post.banner_img}.jpg" alt="asdf" />
	</div>
</div>

<p class="bottom-text">
	{data.post.content}
</p>

<style>
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
