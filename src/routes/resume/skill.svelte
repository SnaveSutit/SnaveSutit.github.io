<script lang="ts">
	export let title: string;
</script>

<div>
	{title}
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0rem 1rem;
		color: var(--color-text);
		cursor: pointer;
		padding: 0.5rem 1rem;
		text-decoration: none;
		transition: transform cubic-bezier(1, 2, 0, 1) 0.2s, box-shadow cubic-bezier(1, 2, 0, 1) 0.2s,
			background-color ease 0.2s;
		border: 2px solid var(--color-button);
	}
	div:hover {
		background-color: var(--color-selected);
		transform: scale(1.1) translateY(-0.25rem);
		box-shadow: 0px 4px 0.25rem var(--color-dark);
	}
</style>
