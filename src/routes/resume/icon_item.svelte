<script lang="ts">
	export let iconUrl: string;
	export let title: string;
	export let url: string;
</script>

<a href={url}>
	<img src={iconUrl} alt="{title} icon" />
	<h4>{title}</h4>
</a>

<style>
	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0rem 1rem;
		color: var(--color-text);
		cursor: pointer;
		text-decoration: none;
		transition: transform cubic-bezier(1, 2, 0, 1) 0.2s, box-shadow cubic-bezier(1, 2, 0, 1) 0.2s,
			background-color ease 0.2s;
		border: 2px solid var(--color-button);
	}
	a:hover {
		background-color: var(--color-selected);
		transform: scale(1.1) translateY(-0.25rem);
		box-shadow: 0px 4px 0.25rem var(--color-dark);
	}
	img {
		width: 32px;
		height: 32px;
	}
	h4 {
		margin-left: 0.5rem;
	}
</style>
