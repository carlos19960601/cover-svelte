<script lang="ts">
	import pcBg from '$lib/assets/images/mobile.webp';
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

<div class={`overflow-hidden w-full h-full justify-center relative`} style={backgroundStyle}>
	<div
		class={`${config.font.value} h-full flex items-center relative z-10 ${config.size.value.indexOf('vertical') === 0 ? 'flex-col px-24 py-12' : ''} ${
			config.size.value.indexOf('vertical') === -1 ? 'px-24' : ''
		} ${config.theme.swapX ? 'justify-end' : ''}`}
	>
		<div
			class={`flex-1 ${config.theme.swapX ? 'order-1' : 'justify-end'} flex flex-col items-center gap-4 text-white text-center ${
				config.size.value.indexOf('square') === 0 ? (config.theme.swapX ? 'pr-8' : 'pl-8') : ''
			}`}
		>
			<div
				class={`text-2xl font-semibold text-shadow-sm text-shadow-black ${config.author.trim() === '' && 'hidden'}`}
			>
				{config.author}
			</div>
			<div
				class={`text-5xl ${config.font?.lineHeight || 'leading-14'} font-bold text-shadow-lg text-shadow-black`}
			>
				{config.title}
			</div>
		</div>

		<div
			class={`${config.size.value.indexOf('horizontal') >= 0 ? 'h-full' : 'w-full'} aspect-[0.5286] group flex flex-col relative`}
		>
			<img src={pcBg} class="absolute top-0 left-0 w-full z-10" alt="background" />

			{#if image}
				// 图片宽高比0.5286 显示区域宽高比0.4498 显示区域宽占总内容区域比0.7297, 高占比0.8575
				<div class="group relative w-full h-full flex">
					<div
						class="absolute inset-y-[7.125%] inset-x-[13.515%] w-[72.97%] aspect-[0.4498] overflow-hidden"
					>
						<img
							src={image}
							class={`w-full object-cover object-top`}
							alt="preview"
							style:height={config.theme.stretchY ? '100%' : ''}
						/>
					</div>
					<Button
						class="ignore hidden cursor-pointer absolute z-10 top-0 right-0 rounded-full text-center group-hover:flex"
						variant="outline"
						size="icon"
						onclick={() => (image = undefined)}
					>
						<XIcon />
					</Button>
				</div>
			{:else}
				<div
					class="ignore absolute z-10 inset-y-[7.125%] inset-x-[13.515%] w-[72.97%] aspect-[0.4498] px-4 py-12 flex flex-col items-center"
				>
					<div class="w-fit rounded-md overflow-hidden mb-4 relative">
						<Input type="file" accept="image/png, image/jpeg, image/webp" class="cursor-pointer" />
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
