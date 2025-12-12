<script lang="ts">
	import { PUBLIC_ICONIFY_URL } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import { getBackgroundStyle, hasBackgroundImage } from '$lib/tools/background-utils';
	import type { ThemeProps } from '$lib/types/themes';
	import { XIcon } from '@lucide/svelte';
	let { config }: ThemeProps = $props();

	const backgroundStyle = getBackgroundStyle(config.bg);
	const hasImage = hasBackgroundImage(config.bg);
</script>

<div class="overflow-hidden flex w-full h-full" style={backgroundStyle}>
	{#if hasImage}
		<div class="w-full h-full relative flex group">
			<div class="h-full absolute top-0 right-0 left-0 p-12">
				{#if config.bg.type === 'unsplash'}
					<Button
						class="ignore hidden cursor-pointer absolute top-4 right-4 rounded-full text-center group-hover:flex"
						variant="outline"
						size="icon"
					>
						<XIcon />
					</Button>
				{/if}

				<div
					class={`${config.font.value} h-full flex flex-col justify-center gap-6 pb-10 text-center text-white`}
				>
					<div class="flex items-center justify-center">
						<img
							class="w-18 h-18"
							src={config.customIcon ||
								`${PUBLIC_ICONIFY_URL}/${config.icon.value}.svg?color=%23fff`}
							alt={`${config.icon.label} icon`}
						/>
					</div>
					<div
						class={`text-5xl ${config.font?.lineHeight || 'leading-14'} font-bold text-shadow-lg text-shadow-black`}
					>
						{config.title}
					</div>
					<div
						class={`text-2xl font-semibold text-shadow-sm text-shadow-black ${config.author.trim() === '' && 'hidden'}`}
					>
						{config.author}
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div
			class={`${config.font.value} realtive w-full h-full flex flex-col justify-center gap-6 pb-12 text-center text-white p-12`}
		>
			<div class="flex items-center justify-center">
				<img
					class="w-18 h-18"
					src={config.customIcon || `${PUBLIC_ICONIFY_URL}/${config.icon.value}.svg?color=%23fff`}
					alt={`${config.icon.label} icon`}
				/>
			</div>
			<div
				class={`text-5xl ${config.font?.lineHeight || 'leading-14'} font-bold text-shadow-lg text-shadow-black`}
			>
				{config.title}
			</div>
			<div
				class={`text-2xl font-semibold text-shadow-sm text-shadow-black ${config.author.trim() === '' && 'hidden'}`}
			>
				{config.author}
			</div>
		</div>
	{/if}
</div>
