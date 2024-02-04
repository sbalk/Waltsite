<script lang="ts">
	import { base } from '$app/paths';
	export let data;

	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadSlim } from '@tsparticles/slim';
	let ParticlesDesignComponent;
	onMount(async () => {
		const module = await import('@tsparticles/svelte');
		ParticlesDesignComponent = module.default;
	});
	let particlesDesignConfig = {
		particles: {
			color: {
				value: '#000'
			},
			links: {
				enable: false,
				color: '#000'
			},
			move: {
				enable: true
			},
			number: {
				value: 3
			},
			size: {
				value: { min: 2, max: 2 }
			}
		}
	};
	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};
	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});
</script>

<svelte:component
	this={ParticlesDesignComponent}
	id="tsparticles"
	class=""
	style=""
	options={particlesDesignConfig}
	on:particlesLoaded={onParticlesLoaded}
/>

<div class="scroll-container" style="position:relative;z-index:5">
	<div class="scroll-div">
		<div class="text-div">
			<div class="text-block">
				<h1>Design</h1>
				<p>
					Design is fucking awesome and if you don't pay me a ton of money for some services I'll
					find out where you live and stab your eyes out. Look at the following projects while you
					still can.
				</p>
			</div>
		</div>
	</div>

	{#each data.summaries as { slug, title, img_fname }}
		<div class="scroll-div">
			<a href="{base}/dynamicDesignPage/{slug}">
				<img class="image" src="{base}/Design/{img_fname}.jpg" alt="asdf" />
			</a>
		</div>
	{/each}
</div>

<!-- <p class="bottom-text">
	The goal of this project was to develop a future context understanding, a vision on what to add to
	this context an the characteristics to achieve the desired effects with a design. Ultimately to
	develop a concept in a
	ccordance with this vision and characteristics, and to deliver a functional
	prototype
</p> -->

<style>
	.scroll-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		overflow-x: hidden;
	}
	.scroll-div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70vh;
		scroll-snap-align: center;
	}
	.text-div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60vh;
		width: 40vh;
	}
	.text-block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		height: 60vh;
	}
	.image {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60vh;
		cursor: pointer;
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
