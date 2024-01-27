<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
</script>

<!-- <div class="scroll-container">
	<section class="scroll-section" on:click={() => goto('/DesignPage/DesignProject1')}>
		<h1 class="centered-content">Design Page - Section 1</h1>
	</section>

	<section class="scroll-section" on:click={() => goto('/DesignPage/DesignProject2')}>
		<h1 class = "centered-content">Design Page - Section 2</h1>
	</section>

</div> -->

<style>
	.scroll-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	.scroll-section {
		height: 100vh;
		scroll-snap-align: start;
		cursor: pointer; /* Change the cursor to a hand when hovering over a section */
	}

	.centered-content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}


	/* Your existing styles here */
</style>
