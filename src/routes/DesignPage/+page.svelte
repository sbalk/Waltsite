<script>
	import { base } from '$app/paths';
	import img1 from '$lib/design1.jpg';
	import img2 from '$lib/design2.jpg';
	import img3 from '$lib/design3.jpg';
</script>

<h1>Design page</h1>

<div class="scroll-container">
	<div class="scroll-div">
		<a href="{base}/DesignPage/cncptmoto">
			<img class="image" src={img1} alt="asdf" />
		</a>
	</div>
	<div class="scroll-div">
		<a href="{base}/DesignPage/cncptmoto">
			<img class="image" src={img2} alt="asdf" />
		</a>
	</div>
	<div class="scroll-div">
		<a href="{base}/DesignPage/cncptmoto">
			<img class="image" src={img3} alt="asdf" />
		</a>
	</div>
</div>


<style>
	.scroll-container {
		height: 80vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}
	.scroll-div {
		height: 80vh;
		scroll-snap-align: start;
		cursor: pointer;
	}
	.image {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60vh;
	}
	:global(body) {
        margin: 0;
        padding: 0;
    }
</style>
