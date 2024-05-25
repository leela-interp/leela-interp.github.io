<script>
	import { loadPylib } from '../lib/pylib.js';
	import { onMount } from 'svelte';

	let npArray = null;

	onMount(async () => {
		const pylib = await loadPylib();
		npArray = pylib.get_random();
	});
</script>

<h1 class="text-5xl">Leela Interp</h1>
<div class="mt-8">
	{npArray}
</div>
