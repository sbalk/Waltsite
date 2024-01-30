<script>
	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
	import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
	import { base } from '$app/paths';
	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	let particlesUrl =
		'https://raw.githubusercontent.com/tsparticles/svelte-auth-template/40faa2d5a3806459533a5c61a5e362561881bd86/src/particles.json'; // placeholder, replace it with a real url

	let particlesConfig = {
		particles: {
			color: {
				value: '#000'
			},
			links: {
				enable: true,
				color: '#000'
			},
			move: {
				enable: true
			},
			number: {
				value: 100
			}
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	void particlesInit(async (engine) => {
		// call this once per app
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(main);
		await loadSlim(engine);
	});
</script>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="put your classes here"
	style=""
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
/>

<!-- <svelte:component
	this="{ParticlesComponent}"
	id="tsparticles"
	class="put your classes here"
	style=""
	url="{particlesUrl}"
	on:particlesLoaded="{onParticlesLoaded}"
/> -->

<div class="image-container">
	<img class="triangle" src="{base}/Triangle_Menu_v1.webp" alt="asdf" usemap="#image-map" />

	<map name="image-map">
		<area
			target="_self"
			alt="DesignPage"
			title="DesignPage"
			href="{base}/DesignPage"
			coords="34,44,270,350"
			shape="rect"
		/>
		<area
			target="_self"
			alt="VisualizationPage"
			title="VisualizationPage"
			href="{base}/VisualizationPage"
			coords="290,172,333,250"
			shape="circle"
		/>
		<area
			target="_self"
			alt="ArtPage"
			title="ArtPage"
			href="{base}/ArtPage"
			coords="345,58,406,130,373,204"
			shape="poly"
		/>
	</map>
</div>

<!-- https://svelte.dev/repl/218a65f83c2b4b4c8f10a253587d6c1b?version=4.2.9
https://kit.svelte.dev/docs/page-options
https://codepen.io/matteobruni/pen/NWrEOzQ
https://svelte.dev/repl/2f5ca1b9da90406cbe6678791193f0d4?version=3.20.1
https://stackoverflow.com/questions/70456275/two-scrollbars-after-adding-scroll-affect-in-css-and-svelte -->

<style>
	/* Add your styles here */
	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.triangle {
		width: 60vh;
		/* Style your shapes here */
	}
</style>
