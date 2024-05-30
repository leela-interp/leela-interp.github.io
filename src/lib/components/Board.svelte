<script>
	import BoardOverlay from './BoardOverlay.svelte';

	export let src;

	export let highlights = {};

	$: boardHighlights = (boardIndex, highlights) => {
		return highlights[boardIndex] || {};
	};

	let boards = [
		{ x: '1.2%', y: '7%' },
		{ x: '35.1%', y: '7%' },
		{ x: '69%', y: '7%' }
	];
</script>

<div class="relative">
	<img {src} alt="Puzzle" class="w-full h-full transition-all opacity-100" />
	<div class="absolute left-0 top-0 w-full h-full">
		{#each boards as { x, y }, i}
			<BoardOverlay {x} {y} squareColors={boardHighlights(i, highlights)} />
		{/each}
	</div>
</div>
