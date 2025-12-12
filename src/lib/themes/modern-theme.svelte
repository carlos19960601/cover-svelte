<script lang="ts">
	import { PUBLIC_ICONIFY_URL } from '$env/static/public';
	import { coverState } from '$lib/states/cover.svelte';
	import { getBackgroundStyle } from '$lib/tools/background-utils';
	import type { ThemeProps } from '$lib/types/themes';
	let { config }: ThemeProps = $props();

	const backgroundStyle = getBackgroundStyle(coverState.coverSetting.bg);
</script>

<div class={`h-full w-full text-gray-800 relative`} style={backgroundStyle}>
	<div
		class={`w-full h-full flex ${config.size.value.indexOf('vertical') !== -1 ? 'flex-col' : ''} justify-center items-center gap-8 p-16 relative z-10`}
	>
		<div class="rounded-full w-32 h-32 bg-white flex items-center justify-center">
			<img
				class="w-18 h-18"
				src={config.customIcon || `${PUBLIC_ICONIFY_URL}/${config.icon.value}.svg`}
				alt={`${config.icon.label} icon`}
			/>
		</div>
		<div
			class={`h-full flex-1 max-h-[360px] max-w-[640px] ${config.font.value} bg-white p-12 flex flex-col justify-center rounded-2xl gap-8`}
		>
			<div class={`text-5xl ${config.font?.lineHeight || 'leading-14'} font-bold`}>
				{config.title}
			</div>
			<div class={`text-2xl font-semibold ${config.author.trim() === '' && 'hidden'}`}>
				{config.author}
			</div>
		</div>
	</div>
</div>
