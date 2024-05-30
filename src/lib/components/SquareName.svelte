<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let square = 'a1';
	export let boardIdx = 0;
	export let color = '#00b894';
	export let highlightColor = color;

	function emitEnter() {
		const squares = square.split(' ');
		// Replicate all squares with the same square: color in an object.
		const squareColors = squares.reduce((acc, square) => {
			acc[square] = highlightColor;
			return acc;
		}, {});

		const boardIdxParsed = parseInt(boardIdx);

		const obj = {};
		obj[boardIdxParsed] = squareColors;

		dispatch('hover', obj);
	}

	function emitLeave() {
		dispatch('hover', {});
	}
</script>

<span
	on:mouseenter={emitEnter}
	on:mouseleave={emitLeave}
	role="tooltip"
	style={color ? 'color: ' + color : ''}
	class="font-bold font-mono cursor-help underline decoration-dotted"><slot></slot></span
>
