<script>
	import { base } from '$app/paths';
	import img1 from '$lib/design1.jpg';
	import img2 from '$lib/design2.jpg';
	import img3 from '$lib/design3.jpg';
	import walt from '$lib/walt.png';
</script>

<!-- <h1>Design page</h1> -->

<div class="scroll-container">
	<div class="scroll-div">
		<div class="text-div">
			<div class="text-block">
				<h1>Design</h1>
				<p>Design is fucking awesome and if you don't pay me a ton of money for some bla bla</p>
			</div>
		</div>
	</div>
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
	<div class="scroll-div">
		<div class="text-div">
			<div class="text-block">
				<h1>Contact</h1>
				<p>Contact me, I'm a great designer, I'm also a great fish stick</p>
				<img class="walt" src={walt} alt="asdf" />
			</div>
		</div>
	</div>
</div>


<style>
	.scroll-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}
	.scroll-div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70vh;
		scroll-snap-align: center;
		cursor: pointer;
	}
	.text-div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60vh;
	}
	.text-block{
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
	}
	.walt {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vh;
	}
	:global(body) {
        margin: 0;
        padding: 0;
    }
</style>
