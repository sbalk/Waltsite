<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	let element;

	onMount(() => {
		scrollToRight(element);
		console.log(element.scrollWidth);
		console.log(Math.round(element.scrollWidth * Math.random()));
	});
	const scrollToRight = async (node) => {
		node.scroll({ left: Math.round(element.scrollWidth * Math.random()), behavior: 'smooth' });
	};

	onMount(() => {});
</script>

<div class="scroll-container">
	<div bind:this={element} class="scroll-image">
		<img class="image" src="{base}/sub_project1.jpg" alt="asdf" />
	</div>
</div>

<style>
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
