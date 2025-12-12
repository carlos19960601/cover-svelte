<script lang="ts">
	import pcBg from '$lib/assets/images/pc.webp';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { coverState } from '$lib/states/cover.svelte';
	import { getBackgroundStyle } from '$lib/tools/background-utils';
	import type { ThemeProps } from '$lib/types/themes';
	import { CirclePlusIcon, XIcon } from '@lucide/svelte';
	let { config }: ThemeProps = $props();
	const backgroundStyle = getBackgroundStyle(coverState.coverSetting.bg);
	let image = $state<string | undefined>(undefined);
</script>

<div class={`w-full h-full flex flex-col overflow-hidden relative`} style={backgroundStyle}>
	<div
		class={`${config.font.value} h-full flex flex-col items-center ${
			config.size.value.indexOf('vertical') >= 0 ? 'justify-center' : ''
		} relative z-10 p-16 text-center`}
	>
		<div
			class={`text-2xl mb-2 font-semibold text-white text-shadow-sm text-shadow-black ${config.author.trim() === '' && 'hidden'}`}
		>
			{config.author}
		</div>
		<div
			class={`text-5xl ${config.font?.lineHeight || 'leading-14'} font-bold text-white text-shadow-lg text-shadow-black`}
		>
			{config.title}
		</div>

		<div class="w-full aspect-[1.5382] group flex flex-col relative">
			<img src={pcBg} class="absolute top-0 left-0 w-full z-10" alt="background" />

			{#if image}
				// 图片宽高比1.5382 显示区域宽高比1.5397 显示区域宽占总内容区域比0.7667
				<div class="relative w-full h-full flex">
					<div
						class="absolute inset-y-[11.64%] inset-x-[11.62%] w-[76.76%] aspect-[1.5397] overflow-hidden"
					>
						<img
							src={image}
							class={`w-full object-cover object-top`}
							alt="preview"
							style:height={config.theme.stretchY ? '100%' : ''}
						/>
					</div>
					<Button
						class="ignore hidden cursor-pointer absolute z-10 top-4 right-4 rounded-full text-center group-hover:flex"
						variant="outline"
						size="icon"
						onclick={() => (image = undefined)}
					>
						<XIcon />
					</Button>
				</div>
			{:else}
				<div
					class="ignore absolute z-10 inset-y-[11.58%] inset-x-[11.66%] w-[76.68%] aspect-[1.5397] px-4 py-12 flex flex-col items-center"
				>
					<div class="w-fit rounded-md overflow-hidden mb-4 relative">
						<Input
							type="file"
							accept="image/png, image/jpeg, image/webp"
							class="cursor-pointer bg-white/80"
						/>
						<div
							class="absolute top-0 right-0 w-full h-full px-4 flex items-center justify-between bg-white pointer-events-none"
						>
							<p class="text-gray-800 whitespace-nowrap">请选择文件</p>
							<CirclePlusIcon class="w-5 h-5" />
						</div>
					</div>
					<div class="p-4 text-gray-800 text-sm bg-white/80 rounded-lg shadow-md">
						<p class="text-left">友情提示：</p>
						<p class="text-gray-600">截图宽高比 &gt;=3:2 效果最佳</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
