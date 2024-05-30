<script>
	import SquareName from '../SquareName.svelte';

	export let figure;
</script>

<span>
	White sacrifices its rook on <SquareName
		on:hover={figure}
		square="d7"
		color="#00b894"
		boardIdx="0">d7</SquareName
	>. After the black king captures, the black queen is undefended, and white can capture it on
	<SquareName square="c5" boardIdx="2" on:hover={figure} color="#0984e3">c5</SquareName>.
</span>
