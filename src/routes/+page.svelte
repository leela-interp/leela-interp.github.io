<script>
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Block from '$lib/components/Block.svelte';
	import SquareName from '$lib/components/SquareName.svelte';
	import Board1Caption from '$lib/components/captions/Board1.svelte';
	import Board2Caption from '$lib/components/captions/Board2.svelte';
	import Board3Caption from '$lib/components/captions/Board3.svelte';
	import Board4Caption from '$lib/components/captions/Board4.svelte';
	import Board5Caption from '$lib/components/captions/Board5.svelte';

	import PaperIcon from 'virtual:icons/mingcute/pdf-line';
	import GithubIcon from 'virtual:icons/mdi/github';
	import ArxivIcon from 'virtual:icons/simple-icons/arxiv';
	import Board from '../lib/components/Board.svelte';

	const boards = [
		{
			thumb: '/boards/board_0.png',
			puzzle: '/puzzles/puzzle_0.png',
			patching_result: '/patching_results/patching_results_0.png',
			patching: '/patching/patching_0.mp4',
			figOneCaption: Board1Caption
		},
		{
			thumb: '/boards/board_1.png',
			puzzle: '/puzzles/puzzle_1.png',
			patching_result: '/patching_results/patching_results_1.png',
			patching: '/patching/patching_1.mp4',
			figOneCaption: Board2Caption
		},
		{
			thumb: '/boards/board_2.png',
			puzzle: '/puzzles/puzzle_2.png',
			patching_result: '/patching_results/patching_results_2.png',
			patching: '/patching/patching_2.mp4',
			figOneCaption: Board3Caption
		},
		{
			thumb: '/boards/board_3.png',
			puzzle: '/puzzles/puzzle_3.png',
			patching_result: '/patching_results/patching_results_3.png',
			patching: '/patching/patching_3.mp4',
			figOneCaption: Board4Caption
		},
		{
			thumb: '/boards/board_4.png',
			puzzle: '/puzzles/puzzle_4.png',
			patching_result: '/patching_results/patching_results_4.png',
			patching: '/patching/patching_4.mp4',
			figOneCaption: Board5Caption
		}
	];

	const vasilLinks = [
		'https://ratings.fide.com/profile/2907666',
		'https://uk.linkedin.com/in/georgievvasil'
	];

	let figOneHighlights = {};

	const figOne = (e) => {
		const highlights = e.detail;
		figOneHighlights = highlights;
	};

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
		class="bg-gray-100 bg-opacity-70 sticky top-0 z-10 backdrop-blur-md flex w-full justify-center items-start"
	>
		<div class="mx-8 max-w-2xl w-full select-none">
			<div class="flex text-sm md:text-base my-6 flex-col">
				<div class="text-xs uppercase font-mono text-gray-400 mb-4">Choose A Chessboard State</div>
				<div>
					{#each boards as board, i}
						<button
							class="inline-block md:w-16 md:h-16 h-12 w-12 mr-2 border-2 px-0.5 py-0.5 border-solid rounded-md cursor-pointer"
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
	<!-- <div class="flex w-full justify-center font-serif items-end">
		<div class="mx-8 max-w-2xl w-full text-black pb-12 text-base">
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
	</div> -->
	<Block padding="pb-8">
		Do neural networks learn to implement algorithms such as look-ahead or search
		<q>in the wild</q>? We find evidence suggesting the answer is yes&mdash;at least for
		<a class="underline" href="https://lczero.org">Leela Chess Zero</a>, arguably the strongest
		existing chess-playing network. Leela seems to internally represent future moves, and those
		representations are crucial for its final output in certain board state.
	</Block>
	<Block>
		We'll showcase a few results here, see <a href="" class="underline">our paper</a> for much more.
	</Block>
	<Block>
		<h1 class="mb-4 text-2xl font-bold" id="setup">Setup</h1>
		We consider chess puzzles such as the following:
	</Block>
	<Block size="max-w-4xl" padding="pb-0">
		<Board src={boards[selectedBoard].puzzle} highlights={figOneHighlights} />
	</Block>
	<Block size="max-w-4xl" class="text-base text-gray-600">
		<svelte:component this={boards[selectedBoard].figOneCaption} figure={figOne} />
	</Block>
	<Block>
		Leela&mdash;the network we use&mdash;takes in a board state and outputs a distribution over
		moves. With only a single forward pass per board state, it can solve puzzles like the above.
		(You can play against the network on <a
			class="underline"
			href="https://lichess.org/@/LazyBot/all">Lichess</a
		> to get a sense for how strong it is.) Does it use look-ahead to play this well, i.e., does it represent
		future moves to decide on the move in the current state?
	</Block>
	<Block>
		<h1 class="mb-4 text-2xl font-bold" id="patching">
			Activations associated with future moves are crucial
		</h1>
		<span>
			One of the methods we use is <em>activation patching</em>. We patch a small part of Leela's
			activations from the forward pass of a <em>corrupted</em> version of a puzzle into the forward
			pass on the original puzzle board state. Measuring the effect on the final output tells us how
			important that part of Leela's activations was.
		</span>
	</Block>
	<Block size="max-w-4xl">
		<div>
			<!-- <video src={boards[selectedBoard].patching} autoplay loop></video> -->
			<!-- Load all videos, and only show the selected one. -->
			{#each boards as board, i}
				<video
					src={board.patching}
					autoplay
					loop
					muted
					preload="auto"
					class="w-full h-full"
					class:hidden={selectedBoard !== i}
				></video>
			{/each}
		</div>
	</Block>
	<Block>
		Surprisingly, the <em>target square</em> of the move <em>two turns in the future</em>
		(what we call the <q>3rd move target square</q>) often stores very important information. The
		only similarly important squares are the <q>1st move target square</q>
		and the <q>corrupted square(s)</q>, whose importance is unsurprising based on the architecture
		of Leela.
	</Block>
	<Block size="max-w-4xl" padding="pb-0">
		<img
			src={boards[selectedBoard].patching_result}
			alt="Activation patching results"
			class="w-full h-full transition-all opacity-100"
		/>
	</Block>
	<!-- <Block size="max-w-4xl" class="text-base text-gray-600">
		In the initial board state, white sacrifices the knight on <SquareName
			square="g6"
			first_target={true}
			board_idx="0"
		/>. Black has no choice but to capture it (second state) since the white queen prevents the king
		from going to <SquareName square="g8" board_idx="1" />. Then white can checkmate by moving the
		rook to <SquareName square="h4" board_idx="2" third_target={true} /> (third state).
	</Block> -->
	<Block padding="pb-0">
		<h1 class="mb-4 text-2xl font-bold" id="probes">Probes can predict future moves</h1>
		<span>
			We train simple, bilinear probes on parts of Leela's activations that can predict the move 2
			turns in the future with 92% accuracy.
		</span>
	</Block>
	<Block size="max-w-md" padding="pb-0">
		<img src="/probing.svg" alt="Probing results" class="w-full h-full" />
	</Block>
	<Block padding="pb-0">
		<h1 class="mb-4 text-2xl font-bold" id="more">More results</h1>
		<span>
			Our paper has many more details and results than the ones we present here. For example, we
			find attention heads that attend to valid piece movements and seem to play an important role
			for look-ahead. <a href="" class="underline">Go take a look!</a>
		</span>
	</Block>
	<Block size="max-w-md" padding="pb-0">
		<img src="/piece_movement_patterns.svg" alt="Piece movement patterns" class="w-full h-full" />
	</Block>
	<Block>
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
	</Block>
	<div class="flex w-full justify-center pt-4 mt-8 font-sans bg-gray-100">
		<div class="mx-8 max-w-3xl w-full">
			<div class="w-full flex justify-start items-center flex-col">
				<div class="text-gray-500 mt-4 text-2xl mb-8">
					<a href="#" target="_blank" rel="noreferrer" class="mr-2">
						<PaperIcon class="inline-block hover:text-black" />
					</a>
					<a
						href="https://github.com/HumanCompatibleAI/leela-interp"
						target="_blank"
						rel="noreferrer"
						class="mr-2"
					>
						<GithubIcon class="inline-block hover:text-black" />
					</a>
				</div>
			</div>
			<div class="text-sm text-gray-600 mb-24">
				This website is licensed under a <a
					class="underline"
					href="http://creativecommons.org/licenses/by-sa/4.0/"
					target="_blank"
					rel="noreferrer">Creative Commons Attribution-ShareAlike 4.0 International License</a
				>. This means you are free to borrow the source code of this website, we just ask that you
				link back to this page in the footer.
			</div>
		</div>
	</div>
</div>
