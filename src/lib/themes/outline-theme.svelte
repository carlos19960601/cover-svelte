<script lang="ts">
	import { PUBLIC_ICONIFY_URL } from '$env/static/public';
	import { coverState } from '$lib/states/cover.svelte';
	import { getBackgroundStyle, shouldShowPattern } from '$lib/tools/background-utils';
	import type { ThemeProps } from '$lib/types/themes';
	import { cn } from '$lib/utils';
	let { config }: ThemeProps = $props();

	const backgroundStyle = getBackgroundStyle(coverState.coverSetting.bg);
	const showPattern = shouldShowPattern(coverState.coverSetting.bg);
</script>

<div class="size-full text-white relative" style={backgroundStyle}>
	{#if showPattern}
		<div
			class={cn(
				'absolute size-full',
				config.pattern.value,
				config.pattern.isOpacity && 'opacity-40'
			)}
		></div>
	{/if}
	<div class="size-full p-24">
		<div class="flex items-center">
			<img
				class="size-18"
				src={config.customIcon || `${PUBLIC_ICONIFY_URL}/${config.icon.value}.svg?color=%23fff`}
				alt={`${config.icon.label} icon`}
			/>
		</div>

		<div class={cn('flex flex-col gap-6', config.font?.value)}>
			<div
				class={cn(
					'text-5xl font-bold text-shadow-lg text-shadow-black',
					config.font?.lineHeight || 'leading-14'
				)}
			>
				{config.title}
			</div>
			<div
				class={cn(
					'text-2xl font-semibold text-shadow-sm text-shadow-black',
					config.author.trim() === '' && 'hidden'
				)}
			>
				{config.author}
			</div>
		</div>
	</div>
</div>
