
<main>
	<header>
		<h1>Pokemon Cards <sup>V2</sup></h1>
		<section class="intro">

			<h1>Entrenador Iván</h1>
			<p>
				<a href="/ivan">
					<img class="album_card" src="/ivan_trainer_card.png" alt="" />				
				</a>
			</p>
			<br />
			<h1>Entrenador Koen</h1>
			<p>
				<a href="/koen">
					<img class="album_card" src="/koen_trainer_card.png" alt="" width="300" />
				</a>
			</p>
			<br />
			<p>
				<a href="/original">Pokemon Cards Original</a>
			</p>

		</section>

</main>

<style>
	main {
		color: white;
		padding: 50px;
		max-width: 1200px;
		margin: auto;
	}

	header {
		margin-bottom: 4rem;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 30px;
		max-width: 900px;
		margin: auto;
	}

	header h2 {
		margin-top: 0;
		font-weight: 100;
	}

@media screen and (min-width: 600px) {
	header {
		grid-template-columns: 50% 1fr;
	}
	.showcase {
		grid-column: 2;
		grid-row: 2/4;
	}
	.intro, .info {
		grid-column: 1;
	}
}

	@media screen and (min-width: 900px) {
		header {
			grid-template-columns: 60% 1fr;
		}
	}

	.showcase {
		z-index: 99;
		max-width: min(330px, 80vw);
		margin: auto;
	}

	h1 {
		margin-top: 0;
		margin-bottom: 0.25em;
	}

	p {
		margin: 0 0 0.25em;
		line-height: 1.5;
	}

	p.small {
		font-size: 0.875rem;
		opacity: 0.75;
	}

	h1,
	h2,
	h3 {
		font-family: 'Roboto Condensed';
	}

	h2 {
		margin-top: 4em;
		margin-bottom: 0.25em;
	}

	h2 + p,
	h2 + p + p {
		font-style: italic;
		margin-bottom: 1em;
	}

	hr {
		border: none;
		background: white;
		height: 1px;
		opacity: 0.25;
		margin: 1em -1em;
	}

	h1 sup {
		font-weight: 300;
		font-size: 0.5em;
	}

	h2 sup {
		font-weight: 300;
		font-size: 0.75em;
	}

	mark {
		background: #006065;
		color: white;
		font-style: italic;
		font-weight: bold;
		padding-inline: 0.25em;
		border-radius: 3px;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(body, html) {
		height: 100%;
		padding: 0;
		margin: 0;
		scroll-behavior: smooth;
	}

	:global(body) {
		font-family: 'Roboto';
		background-color: rgb(57, 60, 66);
	}
</style>
