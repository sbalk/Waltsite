<script>
	export let data;
	import { base } from '$app/paths';
</script>

<h1>Design page</h1>

<div class="scroll-container">
<!-- {#each data.summaries as { design_project, title, img_fname }}
	<div class="scroll-div">
		<a href="{base}/DesignPage/{design_project}">
			<img class="image" src={img_src} alt="asdf" />
		</a>
	</div>
{/each} -->
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
