<script>
	const rowColToSquare = (row, col) => {
		return String.fromCharCode(97 + col) + (8 - row);
	};

	export let squareColors = {};

	$: squareStyle = (row, col) => {
		const rv = squareColors[rowColToSquare(row, col)];
		return rv ? `border-2 md:border-4 border-solid` : 'transparent';
	};

	$: squareColor = (row, col) => {
		const rv = squareColors[rowColToSquare(row, col)];
		return rv ? rv : 'transparent';
	};

	export let squareWidth = '3.73%';
	export let squareHeight = '6.66%';

	export let x = '1.2%';
	export let y = '6.85%';

	let widthParsed = parseFloat(squareWidth);
	let heightParsed = parseFloat(squareHeight);
	let xParsed = parseFloat(x);
	let yParsed = parseFloat(y);
</script>

{#each Array.from({ length: 8 }, (_, i) => i) as row}
	{#each Array.from({ length: 8 }, (_, j) => j) as col}
		<div
			style="width: {squareWidth}; height: {squareHeight}; left: {xParsed +
				col * widthParsed}%; top: {yParsed + row * heightParsed}%; border-color: {squareColor(
				row,
				col
			)}; transition: border-color 0.2s;"
			class="absolute {squareStyle(row, col)}"
		></div>
	{/each}
{/each}
