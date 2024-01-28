<script>
	import { base } from '$app/paths';
	// import img1 from '{base}/lib/design1.jpg';
	// import img2 from '$lib/design2.jpg';
	// import img3 from '$lib/design3.jpg';
	// import img4 from '$lib/design4.jpg';
	// import walt from '$lib/walt.png';
</script>

<!-- <h1>Design page</h1> -->

<div class="scroll-container">
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
			<img class="image" src="{base}/design1.jpg" alt="asdf" />
			<!-- <img class="image" src={img1} alt="asdf" /> -->
		</a>
	</div>
	<div class="scroll-div">
		<a href="{base}/DesignPage/cncptmoto">
			<img class="image" src="{base}/design2.jpg" alt="asdf" />
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
