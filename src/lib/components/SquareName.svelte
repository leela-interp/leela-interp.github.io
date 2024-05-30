<script>
	export let square = 'a1';
	export let board_idx = 0;
	export let first_target = false;
	export let third_target = false;

	let color = null;
	if (first_target) color = '#00b894';
	if (third_target) color = '#0984e3';
</script>

<span style={color ? 'color: ' + color : ''} class="font-bold">{square}</span>
