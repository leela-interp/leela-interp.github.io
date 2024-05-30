<script>
	import SquareName from '../SquareName.svelte';

	export let figure;
</script>

<span>
	White captures the bishop on <SquareName
		on:hover={figure}
		square="g7"
		color="#00b894"
		boardIdx="0">g7</SquareName
	>. Black can recapture, but then white can <SquareName
		square="d8 e6 g7"
		boardIdx="2"
		on:hover={figure}
		mono={false}>fork the black rook and king</SquareName
	> by moving the knight to
	<SquareName square="e6" boardIdx="2" on:hover={figure} color="#0984e3">e6</SquareName>, winning
	the rook.
</span>
