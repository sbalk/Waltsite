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

	// let particlesUrl =
	// 	'https://raw.githubusercontent.com/tsparticles/svelte-auth-template/40faa2d5a3806459533a5c61a5e362561881bd86/src/particles.json'; // placeholder, replace it with a real url

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
				value: 2
			},
			size: {
				value: { min: 1, max: 1 }
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

<!-- <svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="put your classes here"
	style=""
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
/> -->

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
	<div class="scroll-div">
		<a href="{base}/DesignPage/cncptmoto">
			<img class="image" src="{base}/Design/main-cncptmoto.jpg" alt="asdf" />
			<!-- <img class="image" src={img1} alt="asdf" /> -->
		</a>
	</div>
	<div class="scroll-div">
		<a href="{base}/DesignPage/ebike">
			<img class="image" src="{base}/Design/main-ebike.jpg" alt="asdf" />
		</a>
	</div>
	<div class="scroll-div">
		<a href="{base}/DesignPage/cncptmoto">
			<img class="image" src="{base}/design3.jpg" alt="asdf" />
		</a>
	</div>
	<div class="scroll-div">
		<a href="{base}/DesignPage/cncptmoto">
			<img class="image" src="{base}/design4.jpg" alt="asdf" />
		</a>
	</div>
	<div class="scroll-div">
		<div class="text-div">
			<div class="text-block">
				<h1>Contact</h1>
				<p>PENLords agency</p>
				<p>tel: 0031 6 12341234</p>
				<p>mail: penloards@penloards.com</p>
			</div>
		</div>
	</div>
</div>

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
		/* position: relative; */
		/* right: 40vh; */
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
