<script>
	import { base } from '$app/paths';
</script>

<div class="scroll-container">
    <!-- <div class="scroll-div">
        <div class="scroll-div"> -->
            <img class="image" src="{base}/sub_project1.jpg" alt="asdf" />
        <!-- </div>
    </div> -->
</div>

<style>
	.scroll-container {
		/* height: 100vh; */
		/* scroll-snap-type: y mandatory; */
        overflow-x: scroll;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.scroll-div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70vh;
		scroll-snap-align: center;
	}
	.text-div {
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
		/* display: flex;
		justify-content: center;
		align-items: center; */
		height: 60vh;
        /* overflow-x: scroll; */
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
