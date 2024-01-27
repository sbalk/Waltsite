<script>
	import { base } from '$app/paths';
	// Add your JavaScript here
</script>

<a href="{base}/" class="home-button">
	<img src="{base}/path234.svg" alt="Home" />
</a>

<a href="mailto:example@example.com" class="email-button">
	<img src="{base}/ster.svg" alt="email" width="30px" height="30px" />
</a>

<slot />

<style>
	/* Add your styles here */
	.home-button {
		position: absolute;
		top: 10px;
		left: 10px;
	}
	.home-button img {
		width: 30%;
		height: 30%;
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
</style>
