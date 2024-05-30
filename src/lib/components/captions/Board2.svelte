<script>
	import SquareName from '../SquareName.svelte';

	export let figure;
</script>

<span>
	White sacrifices its queen on <SquareName
		on:hover={figure}
		square="h7"
		color="#00b894"
		boardIdx="0">h7</SquareName
	>, which black has to capture. Then white can promote the <SquareName
		square="g7"
		boardIdx="2"
		on:hover={figure}
		mono={false}>g7 pawn</SquareName
	> to
	<SquareName square="g8" boardIdx="2" on:hover={figure} color="#0984e3">g8</SquareName> (third state),
	turning it into a new queen and delivering checkmate.
</span>
