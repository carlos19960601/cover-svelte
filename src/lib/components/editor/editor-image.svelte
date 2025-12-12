<script lang="ts">
	import { coverState } from '$lib/states/cover.svelte';
	import BackgroundTheme from '$lib/themes/background-theme.svelte';
	import BasicTheme from '$lib/themes/basic-theme.svelte';
	import MobileMockupTheme from '$lib/themes/mobile-mockup-theme.svelte';
	import ModernTheme from '$lib/themes/modern-theme.svelte';
	import OutlineTheme from '$lib/themes/outline-theme.svelte';
	import PreviewTheme from '$lib/themes/preview-theme.svelte';
	import StylishTheme from '$lib/themes/stylish-theme.svelte';
	import type { ThemeProps } from '$lib/types/themes';
	import type { Component } from 'svelte';

	const themeMap: Record<string, Component<ThemeProps, {}, ''>> = {
		basic: BasicTheme,
		outline: OutlineTheme,
		modern: ModernTheme,
		preview: PreviewTheme,
		stylish: StylishTheme,
		mobile: MobileMockupTheme,
		background: BackgroundTheme
	};
</script>

<div>
	<!-- IMPORTANT: 使用 svelte:component 来动态渲染组件 -->
	<svelte:component
		this={themeMap[coverState.coverSetting.theme.value]}
		config={coverState.coverSetting}
	/>
</div>
