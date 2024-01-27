<script>
	let items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

	let containerWidth;
	let scrolledLeft = 0;

	$: if (containerWidth == scrolledLeft) {
		console.log('hit scroll snap');
	}
</script>

<p>Try to scroll horizontally.</p>

<div
	class="tab-panels-container"
	bind:clientWidth={containerWidth}
	on:scroll={({ target }) => (scrolledLeft = target.scrollLeft)}
>
	{#each items as item}
		<div class="tab-panel">
			<div class="tab-panel-content">
				{item}
			</div>
		</div>
	{/each}
</div>

<style>
	/* .global(body) {
          margin: 0;
          padding: 0;
          } */

	.tab-panels-container {
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
		height: 30rem;
		width: 100vw;
		display: flex;
		background: red;
	}

	.tab-panel-content {
		margin: auto;
		padding: 3rem;
		color: #fff;
		background: blue;
	}

	.tab-panel {
		scroll-snap-align: start;
		/* only supported in Chrome */
		scroll-snap-stop: always;
		background: yellow;
		width: 100%;
		flex: 1 0 auto;
		height: 100%;
		display: flex;
	}
</style>
