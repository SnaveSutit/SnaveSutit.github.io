<div class="author">
	<h1>Titus Evans</h1>
	<div class="occupations">
		<h3>Web Developer</h3>
		<h3>Animator</h3>
		<h3>Gameplay Mechanic</h3>
		<h3>Indie Game Developer</h3>
	</div>
</div>

<nav>
	<a href="/">All</a>
	<a href="/animations">Animations</a>
</nav>

<slot />

<style>
	.author {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.occupations {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.occupations > h3 {
		margin: 0px 1rem;
	}

	nav {
		display: flex;
		justify-content: center;
		background-color: var(--color-ui);
		border-bottom: 2px solid var(--color-accent);
	}

	nav a {
		color: var(--color-light);
		text-decoration: none;
		padding: 1rem 1rem;
	}
	nav a:hover {
		color: var(--color-accent);
		background-color: var(--color-selected);
	}

	:global(body) {
		color: var(--color-text);
		font-family: var(--font-main);
		background-color: var(--color-back);
		margin: 0px;
		padding: 0px;
	}

	:global(a) {
		color: var(--color-accent);
	}

	:global(*) {
		--color-back: #21252b;
		--color-dark: #17191d;
		--color-border: #181a1f;
		--color-ui: #282c34;
		--color-accent: #3e90ff;
		--color-button: #3a3f4b;
		--color-selected: #474d5d;
		--color-text: #cacad4;
		--color-light: #f4f3ff;
		--color-accent_text: #000006;
		--color-bright_ui_text: #000006;
		--color-subtle_text: #848891;
		--color-bright_ui: #f4f3ff;
		--color-bright_border: var(--color-text);
		--color-grid: #495061;
		--color-checkerboard: #1c2026;

		--color-menu_separator: #b0afba;

		--color-close: #d62e3f;
		--color-confirm: #90ee90;
		--color-error: #ff2a51;
		--color-warning: #ffc400;
		--color-stream: #6442a4;

		--color-axis-x: #ff1242;
		--color-axis-y: #23d400;
		--color-axis-z: #0894ed;

		--font-custom-main: '';
		--font-custom-headline: '';
		--font-custom-code: '';

		--font-main: var(--font-custom-main), Assistant, segoe ui, sans-serif;
		--font-headline: var(--font-custom-headline), var(--font-custom-main), Assistant, segoe ui,
			sans-serif;
		--font-code: var(--font-custom-code), Consolas, Monospace;
	}
</style>
