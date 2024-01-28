<script>
	import { base } from '$app/paths';
	// import triangle from '$lib/Triangle_Menu_v1.webp';
	import ster from '$lib/ContactStar_v1.webp';
	import logo from '$lib/Logo_v1.webp';
	// Add your JavaScript here
</script>

<a href="{base}/" class="home-button">
	<img src={logo} alt="Home" />
</a>

<slot />

<a href="mailto:example@example.com" class="email-button">
	<img src={ster} alt="email" width="30px" height="30px" />
</a>

<style>
	/* Add your styles here */
	.home-button {
		position: absolute;
		top: 20px;
		left: 20px;
	}
	.home-button img {
		width: 60%;
		height: 60%;
	}
	/* .email-button img {
		width: 10%;
		height: 10%;
	} */
	.email-button {
		position: absolute;
		bottom: 50px;
		right: 50px;
	}

	:global(body) {
		background-size: 60px 60px;
		background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px);

		/* background-size: 40px 40px;
		background-image: linear-gradient(to right, grey 1px, transparent 1px),
			linear-gradient(to bottom, grey 1px, transparent 1px); */
	}
</style>
