<script>
	import SquareName from '../SquareName.svelte';

	export let figure;
</script>

<span>
	In the initial board state, white sacrifices the knight on <SquareName
		on:hover={figure}
		square="g6"
		color="#00b894"
		boardIdx="0">g6</SquareName
	>. Black has no choice but to capture it (second state) since <SquareName
		square="b3 c4 d5 e6 f7 g8"
		boardIdx="1"
		on:hover={figure}
		color="#000000"
		mono={false}>the white queen prevents the king from going to g8</SquareName
	>. Then white can move the rook to <SquareName
		square="h4"
		boardIdx="2"
		on:hover={figure}
		color="#0984e3">h4</SquareName
	> (third state), delivering <SquareName
		on:hover={figure}
		mono={false}
		boardIdx="2"
		square="b3 c4 d5 e6 f7 g8 h4 h5 h6 h7 h8">checkmate</SquareName
	>.
</span>
