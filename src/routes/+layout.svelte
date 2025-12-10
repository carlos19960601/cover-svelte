<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ThisCover 封面生成器</title>
	<meta name="description" content="免费、漂亮的封面生成器" />
</svelte:head>

{@render children()}
