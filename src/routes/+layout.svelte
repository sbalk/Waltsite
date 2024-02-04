<script>
	import { base } from '$app/paths';
</script>

<slot />
<a href="{base}/" class="home-button">
	<img src="{base}/Logo_v1.webp" alt="Home" />
</a>

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
