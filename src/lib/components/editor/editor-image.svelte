<script lang="ts">
	import { coverState } from '$lib/states/cover.svelte';
	import BasicTheme from '$lib/themes/basic-theme.svelte';
	import OutlineTheme from '$lib/themes/outline-theme.svelte';
	import type { ThemeProps } from '$lib/types/themes';
	import type { Component } from 'svelte';

	const themeMap: Record<string, Component<ThemeProps, {}, ''>> = {
		basic: BasicTheme,
		outline: OutlineTheme
	};
</script>

<div>
	<!-- IMPORTANT: 使用 svelte:component 来动态渲染组件 -->
	<svelte:component
		this={themeMap[coverState.coverSetting.theme.value]}
		config={coverState.coverSetting}
	/>
</div>
