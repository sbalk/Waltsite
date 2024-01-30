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

<h1 class="title">VANMOOF PROTO 3000</h1>

<div class="scroll-container">
	<div bind:this={element} class="scroll-image">
		<img class="image" src="{base}/Design/design-ebike-banner.jpg" alt="asdf" />
	</div>
</div>

<p class="bottom-text">
	The goal of this project was to develop a future context understanding, a vision on what to add to
	this context an the characteristics to achieve the desired effects with a design. Ultimately to
	develop a concept in accordance with this vision and characteristics, and to deliver a functional
	prototype
</p>

<style>
	.title {
		/* font-size: 3rem;
        font-weight: 700; */
		position: absolute;
		top: 15vh;
		left: 50vw;
	}
	.bottom-text {
		position: absolute;
		top: 70vh;
		left: 15vw;
		height: 60vh;
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
