<script>
	import SquareName from '../SquareName.svelte';

	export let figure;
</script>

<span>
	White captures the bishop on <SquareName
		on:hover={figure}
		square="b2"
		color="#00b894"
		boardIdx="0">b2</SquareName
	>. Black can recapture, but then white can move the bishop to
	<SquareName square="d4" boardIdx="2" on:hover={figure} color="#0984e3">d4</SquareName>,
	<SquareName square="b2 c3 d4 e5 f6 g7" boardIdx="2" on:hover={figure} mono={false}
		>forking the black rook and king</SquareName
	>, winning the rook.
</span>
