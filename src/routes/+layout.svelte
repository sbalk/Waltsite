<script>
	import { base } from '$app/paths';
	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadSlim } from '@tsparticles/slim';
	let ParticlesComponent;
	onMount(async () => {
		const module = await import('@tsparticles/svelte');
		ParticlesComponent = module.default;
	});

	let particlesConfig = {
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

<a href="{base}/" class="home-button">
	<img src="{base}/Logo_v1.webp" alt="Home" />
</a>

<slot />
<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class=""
	style="position:relative;z-index:0"
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
/>

<a href="mailto:walt@example.com" class="email-button">
	<img src="{base}/ContactStar_v1.webp" alt="email" width="30px" height="30px" />
</a>

<style>
	.home-button {
		position: relative;
		z-index: 5;
		position: fixed;
		top: 20px;
		left: 20px;
	}
	.home-button img {
		width: 60%;
		height: 60%;
	}
	.email-button {
		position: relative;
		z-index: 5;
		position: fixed;
		bottom: 50px;
		right: 50px;
	}

	:global(body) {
		background-size: 10vh 10vh;
		/* background-size: 60px 60px; */
		background-image: radial-gradient(circle, #000000 2px, rgba(0, 0, 0, 0) 0px);

		/* background-size: 40px 40px;
		background-image: linear-gradient(to right, grey 1px, transparent 1px),
			linear-gradient(to bottom, grey 1px, transparent 1px); */
	}
</style>
