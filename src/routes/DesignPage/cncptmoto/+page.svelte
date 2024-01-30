<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	let element;

	onMount(() => scrollToRight(element));

	const scrollToRight = async (node) => {
		node.scroll({ left: node.scrollWidth, behavior: 'smooth' });
	};

</script>

<div class="scroll-container">
	<img bind:this={element} class="image" src="{base}/sub_project1.jpg" alt="asdf" />
</div>

<style>
	.scroll-container {
		/* overflow-x: scroll;
		display: flex; */
		overflow-x: scroll;
		width: 500px;
		/* overflow: auto; */
	}
	.image {
		top: 30vh;
		position: absolute;
		height: 40vh;
	}
	/* :global(body) {
		margin: 0;
		padding: 0;
	} */
</style>
