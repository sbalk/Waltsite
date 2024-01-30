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
		node.scroll({ left: node.scrollWidth, behavior: 'smooth' });
		// node.scroll({ left: node.scrollWidth, behavior: 'smooth' });
	};

	onMount(() => {});
</script>

<!-- poepgat horizontaal scrollen -->
<!-- https://stackoverflow.com/questions/73987081/scroll-to-bottom-of-element-in-sveltekit -->
<!-- https://github.com/bartholomej/svelte-scrollto-element -->


<div bind:this={element} class="scroll-container">
	<img class="image" src="{base}/sub_project1.jpg" alt="asdf" />
</div>

<style>
	.scroll-container {
		/* overflow-x: scroll;
		display: flex; */
		/* overflow-x: scroll; */
		width: 2700px;
	}
	.image {
		width: max-content;
		/* display: inline-flex; */
		/* overflow: auto; */
		top: 30vh;
		position: absolute;
		height: 40vh;
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
