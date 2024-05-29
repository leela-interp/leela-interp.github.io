<script>
	import LinkButton from '$lib/components/LinkButton.svelte';

	import PaperIcon from 'virtual:icons/mingcute/pdf-line';
	import GithubIcon from 'virtual:icons/mdi/github';
	import ArxivIcon from 'virtual:icons/simple-icons/arxiv';

	const boards = [
		{ thumb: '/boards/board_0.png' },
		{ thumb: '/boards/board_1.png' },
		{ thumb: '/boards/board_2.png' },
		{ thumb: '/boards/board_3.png' },
		{ thumb: '/boards/board_4.png' }
	];

	const vasilLinks = [
		'https://ratings.fide.com/profile/2907666',
		'https://uk.linkedin.com/in/georgievvasil'
	];

	let vasilLink = null;

	setInterval(() => {
		vasilLink = vasilLinks[Math.floor(Math.random() * vasilLinks.length)];
	}, 1000);

	let selectedBoard = 0;
</script>

<svelte:head>
	<title>Leela Interpretability</title>
</svelte:head>

<div class="text-lg">
	<div class="flex w-full justify-center font-serif items-end">
		<div class="mx-8 max-w-2xl w-full text-black pb-12 md:pt-28 pt-8">
			<div class="inline-block text-4xl">
				Evidence of Learned Look-Ahead in a Chess-Playing Neural Network
			</div>
			<div class="mt-6 text-base">
				<a href="https://ejenner.com/" class="underline">Erik Jenner</a><sup>1</sup>,
				<a href="https://shreyaskapur.com/" class="underline">Shreyas Kapur</a><sup>1</sup>,
				<a href={vasilLink} class="underline">Vasil Georgiev</a><sup>2</sup>,
				<a href="https://camallen.net/" class="underline">Cameron Allen</a><sup>1</sup>,
				<a href="https://www.scottemmons.com/" class="underline">Scott Emmons</a><sup>1</sup>,
				<a href="https://people.eecs.berkeley.edu/~russell/" class="underline">Stuart Russell</a
				><sup>1</sup>
			</div>
			<div class="mt-6 text-sm text-gray-600">
				<sup>1</sup>UC Berkeley, <sup>2</sup>Independent
			</div>
		</div>
	</div>
	<!-- <div class="w-full border-b border-gray-300"></div> -->
	<div
		class="bg-gray-100 bg-opacity-70 sticky top-0 backdrop-blur-md flex w-full justify-center items-start"
	>
		<div class="mx-8 max-w-2xl w-full select-none">
			<div class="flex text-sm md:text-base my-6 flex-col">
				<div class="text-xs uppercase font-mono text-gray-400 mb-4">Choose A Chess Position</div>
				<div>
					{#each boards as board, i}
						<button
							class="inline-block md:w-16 md:h-16 h-12 w-12 mr-2 border-2 border-gray-300 px-0.5 py-0.5 border-solid rounded-md cursor-pointer"
							class:border-blue-500={selectedBoard === i}
							class:hover:border-gray-400={selectedBoard !== i}
							class:hover:border-blue-500={selectedBoard === i}
							on:click={() => {
								selectedBoard = i;
							}}
						>
							<img src={board.thumb} alt="Board" class="w-full h-full" />
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="flex w-full justify-center font-serif items-end">
		<div class="mx-8 max-w-2xl w-full text-black">
			<div class="flex text-sm md:text-base mb-8 mt-8">
				<LinkButton class="mr-2">
					<div class="flex items-center">
						<PaperIcon class="inline-block mr-1" />
						Paper
					</div>
				</LinkButton>
				<LinkButton class="mr-2">
					<div class="flex items-center">
						<ArxivIcon class="inline-block mr-1" />
						arXiv
					</div>
				</LinkButton>
				<a href="https://github.com/HumanCompatibleAI/leela-interp">
					<LinkButton>
						<div class="flex items-center">
							<GithubIcon class="inline-block mr-1" />
							Code
						</div>
					</LinkButton>
				</a>
			</div>
		</div>
	</div>
	<div class="flex w-full justify-center font-serif items-end">
		<div class="mx-8 max-w-2xl w-full text-black pb-12 text-base text-justify">
			Do neural networks learn to implement algorithms such as look-ahead or search <q
				>in the wild</q
			>? We present evidence of <i>learned look-ahead</i> in the policy network of Leela Chess Zero,
			the currently strongest neural chess engine. We find that Leela internally represents future
			optimal moves and that these representations are crucial for its final output in certain board
			states. Concretely, we exploit the fact that Leela is a transformer that treats every
			chessboard square like a token in language models, and give three lines of evidence: (1)
			activations on certain squares of future moves are unusually important causally; (2) we find
			attention heads that move important information <q>forward and backward in time,</q> e.g., from
			squares of future moves to squares of earlier ones; and (3) we train a simple probe that can predict
			the optimal move 2 turns ahead with 92% accuracy (in board states where Leela finds a single best
			line). These findings are an existence proof of learned look-ahead in neural networks and might
			be a step towards a better understanding of their capabilities.
		</div>
	</div>
	<div class="flex w-full justify-center font-serif">
		<div class="mx-8 max-w-2xl w-full">
			<h1 class="mb-4 text-2xl font-bold" id="citation">Citation</h1>
			<div
				class="font-mono text-xs mt-4 bg-gray-100 px-4 py-4 border-2 border-solid border-gray-200 rounded-md w-full"
			>
				<pre class="whitespace-pre-wrap">
{`@inproceedings{jenner2024evidence,
	title = {Evidence of Learned Look-Ahead in a Chess-Playing Neural Network},
	author = {Jenner, Erik and Kapur, Shreyas and Georgiev, Vasil and Allen, Cameron and Emmons, Scott and Russell, Stuart},
	booktitle = {arXiv},
	year = {2024},
}`}</pre>
			</div>
			<div class="text-base mt-8">
				We would like to thank some people for discussions, feedback, and technical support.
			</div>
			<!-- <div class="w-full flex justify-center items-center flex-col h-32"></div> -->
		</div>
	</div>
	<div class="h-96"></div>
	<div class="h-96"></div>
	<div class="h-96"></div>
</div>
