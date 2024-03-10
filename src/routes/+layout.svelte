<script>
	import { base } from '$app/paths';
	// import Navbar from '$components/Navbar.svelte';
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	// add a function that takes the width of the pages and devides it by 60, rounds down that number and then devides the page width by that number
	// function calcHorDots() {
	// 	let pageWidth = window.innerWidth;
	// 	let dots = Math.floor(pageWidth / 60);
	// 	let scale = 1 / dots;
	// 	return scale;
	// }
	// function calcVerDots() {
	// 	let pageHeight = window.innerHeight;
	// 	let dots = Math.floor(pageHeight / 60);
	// 	let scale = 1 / dots;
	// 	return scale;
	// }

	// $: horDots = calcHorDots();
	// $: verDots = calcVerDots();
</script>

<div class="relative px-8">
	<Navbar
		class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b border-b-4 border-blue-900"
	>
		<NavBrand href="/">
			<img src="/{base}/Logo_v1.webp" class="me-3 h-6 sm:h-9" alt="asdf" />
		</NavBrand>
		<NavHamburger />
		<NavUl class="center">
			<NavLi href="/{base}/">ART SPACE</NavLi>
			<NavLi href="/{base}/dynamicDesignPage">DESIGN & DEVELOPMENT</NavLi>
			<NavLi href="/{base}/">VISUALIZATION</NavLi>
		</NavUl>
	</Navbar>
</div>

<!-- <Navbar /> -->
<slot />

<!-- <a href="{base}/" class="home-button">
	<img src="{base}/Logo_v1.webp" alt="Home" />
</a>

<a href="mailto:walt@example.com" class="email-button">
	<img src="{base}/ContactStar_v1.webp" alt="email" width="30px" height="30px" />
</a> -->

<style>
	/* .home-button {
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
	} */

	:global(body) {
		background-size: 5vw 10vh;
		background-position: center center;
		background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 0px);
	}
</style>
