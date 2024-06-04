<script>
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Block from '$lib/components/Block.svelte';
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
				<a href="https://uk.linkedin.com/in/georgievvasil" class="underline">Vasil Georgiev</a><sup
					>2</sup
				>,
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
			<div class="flex text-sm md:text-base my-4 flex-col">
				<div class="text-xs uppercase font-mono text-gray-400 mb-2">Choose A Chessboard State</div>
				<div>
					{#each boards as board, i}
						<button
							class="inline-block md:w-14 md:h-14 h-12 w-12 mr-2 border-2 px-0.5 py-0.5 border-solid rounded-md cursor-pointer"
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
				<a href="https://arxiv.org/pdf/2406.00877.pdf">
					<LinkButton class="mr-2">
						<div class="flex items-center">
							<PaperIcon class="inline-block mr-1" />
							Paper
						</div>
					</LinkButton>
				</a>
				<a href="https://arxiv.org/abs/2406.00877">
					<LinkButton class="mr-2">
						<div class="flex items-center">
							<ArxivIcon class="inline-block mr-1" />
							arXiv
						</div>
					</LinkButton>
				</a>
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
	<Block padding="pb-4">
		Do neural networks learn to implement algorithms involving look-ahead or search
		<q>in the wild</q>? Or do they only ever learn simple heuristics? We investigate this question
		for
		<a class="underline" href="https://lczero.org">Leela Chess Zero</a>, arguably the strongest
		existing chess-playing network.
	</Block>
	<Block>
		We find intriguing evidence of learned look-ahead in a single forward pass. This website
		showcases some of our results, see <a href="https://arxiv.org/abs/2406.00877" class="underline"
			>our paper</a
		> for much more.
	</Block>
	<Block>
		<h1 class="mb-4 text-2xl font-bold" id="setup">Setup</h1>
		We consider chess puzzles such as the following (you can look at other examples using the puzzle
		picker at the top):
	</Block>
	<Block size="max-w-4xl" padding="pb-0">
		<Board src={boards[selectedBoard].puzzle} highlights={figOneHighlights} />
	</Block>
	<Block size="max-w-4xl" class="text-base text-gray-600">
		<svelte:component this={boards[selectedBoard].figOneCaption} figure={figOne} />
	</Block>
	<Block>
		We focus on the <em>policy network</em> of Leela, which takes in a board state and outputs a
		distribution over moves. With only a single forward pass per board state, it can solve puzzles
		like the above. (You can play against the network on
		<a class="underline" href="https://lichess.org/@/LazyBot/all">Lichess</a> to get a sense of how strong
		it is&mdash;its rating there is over 2600.) Humans and manually written chess engines rely on look-ahead
		to play chess this well; they consider future moves when making a decision. But is the same thing
		true for Leela?
	</Block>
	<Block>
		<h1 class="mb-4 text-2xl font-bold" id="patching">
			Activations associated with future moves are crucial
		</h1>
		<p class="pb-4">
			One of our early experiments was to do <em>activation patching</em>. We patch a small part of
			Leela's activations from the forward pass of a <em>corrupted</em> version of a puzzle into the
			forward pass on the original puzzle board state. Measuring the effect on the final output tells
			us how important that part of Leela's activations was.
		</p>
		<p>
			Leela is a transformer that treats every square of the chess board like a token in a language
			model. One type of intervention we can thus do is to patch the activation on a single square
			in a single layer:
		</p>
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
					playsinline
					preload="auto"
					class="w-full h-full"
					class:hidden={selectedBoard !== i}
				></video>
			{/each}
		</div>
	</Block>
	<Block>
		Surprisingly, we found that the <em>target square</em> of the move
		<em>two turns in the future</em>
		(what we call the <q>3rd move target square</q>) often stores very important information. This
		does not happen in every puzzle, but it does in a striking fraction, and the average effect is
		much bigger than that of patching on most other squares:
	</Block>
	<Block size="max-w-4xl" padding="pb-0">
		<img
			src={boards[selectedBoard].patching_result}
			alt="Activation patching results"
			class="w-full h-full transition-all opacity-100"
		/>
	</Block>
	<Block size="max-w-4xl" class="text-base text-gray-600">
		<em><strong>Top row:</strong></em> The impact of activation patching on one square and in one
		layer at a time in an example puzzle. Darker squares mean that patching on that square had a
		higher impact on the output. The 3rd move target square (<span style="color: #0984e3"
			>blue dot</span
		>) is very important in layer 10 (middle board) in some puzzles.
		<em><strong>Bottom row:</strong></em> Average effects over 22k puzzles. Around layer 10, the
		effect of patching on the 3rd move target (<span style="color: #0984e3">blue line</span>) is big
		compared to most other squares (the gray line is the
		<em>maximum</em> effect over all other squares than the 1st/3rd move target and corrupted square(s).).
	</Block>
	<Block>
		<p class="pb-4">
			The <q>corrupted square(s)</q> and the <q>1st move target square</q>
			are also important (in early and late layers respectively), but we expected as much from Leela's
			architecture. In contrast, the 3rd move target square stands out in middle layers, and we were
			much more surprised by its importance.
		</p>
		<p>
			In the paper, we take early steps toward understanding how the information stored on the 3rd
			move target square is being used. For example, we find a single attention head that often
			moves information from this future target square <q>backward in time</q>
			to the 1st move target square.
		</p>
	</Block>
	<Block padding="pb-0">
		<h1 class="mb-4 text-2xl font-bold" id="probes">Probes can predict future moves</h1>
		<p class="pb-4">
			If Leela uses look-ahead, can we <em>explicitly</em> predict future moves from its activations?
			We train simple, bilinear probes on parts of Leela's activations to predict the move two turns
			into the future (on a set of puzzles where Leela finds a single clearly best continuation). Our
			probe architecture is motivated by our earlier results&mdash;it predicts whether a given square
			is the target square of the 3rd move since, as we've seen, this seems to be where Leela stores
			important information.
		</p>
		<p>
			We find that this probe can predict the move 2 turns in the future quite reliably (with 92%
			accuracy in layer 12):
		</p>
	</Block>
	<Block size="max-w-md" padding="pb-0">
		<img src="/probing.svg" alt="Probing results" class="w-full h-full" />
	</Block>
	<Block padding="pb-0">
		<h1 class="mb-4 text-2xl font-bold" id="more">More results</h1>
		<p class="pb-4">
			Our paper has many more details and results than the ones we present here. For example, we
			find attention heads that attend to valid piece movements and seem to play an important role
			for look-ahead. <a href="https://arxiv.org/abs/2406.00877" class="underline"
				>Go take a look!</a
			>
		</p>
		<p>
			In the grand scheme of things, we still understand very little about how Leela works.
			Look-ahead seems to play an important role, but we don't know much about exactly how that
			look-ahead is implemented. That might be an interesting direction for future research.
		</p>
	</Block>
	<Block size="max-w-md" padding="pb-0">
		<img src="/piece_movement_patterns.svg" alt="Piece movement patterns" class="w-full h-full" />
	</Block>
	<Block size="max-w-md" class="text-base text-gray-600">
		Attention patterns of random examples of <q>piece movement heads</q> we identified in Leela. One
		of the roles of these heads seems to be determining the consequences of future moves.
	</Block>
	<Block>
		<h1 class="mb-4 text-2xl font-bold" id="citation">Citation</h1>
		<div
			class="font-mono text-xs mt-4 bg-gray-100 px-4 py-4 border-2 border-solid border-gray-200 rounded-md w-full"
		>
			<pre class="whitespace-pre-wrap">
{`@misc{jenner2024evidence,
	title={Evidence of Learned Look-Ahead in a Chess-Playing Neural Network}, 
	author={Erik Jenner and Shreyas Kapur and Vasil Georgiev and Cameron Allen and Scott Emmons and Stuart Russell},
	year={2024},
	eprint={2406.00877},
	archivePrefix={arXiv},
	primaryClass={cs.LG}
}`}</pre>
		</div>
		<div class="text-base mt-8">
			We would like to thank Michael Cohen, Lawrence Chan, Erik Jones, Alex Mallen, Neel Nanda, and
			everyone else we talked to for feedback at various stages of this project! This work was
			supported by funding from Open Philanthropy and the Future of Life Institute.
		</div>
	</Block>
	<div class="flex w-full justify-center pt-4 mt-8 font-sans bg-gray-100">
		<div class="mx-8 max-w-3xl w-full">
			<div class="w-full flex justify-start items-center flex-col">
				<div class="text-gray-500 mt-4 text-2xl mb-8">
					<a href="https://arxiv.org/abs/2406.00877" target="_blank" rel="noreferrer" class="mr-2">
						<ArxivIcon class="inline-block hover:text-black" />
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
