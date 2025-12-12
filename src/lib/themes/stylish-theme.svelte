<script lang="ts">
	import { PUBLIC_ICONIFY_URL } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import type { ThemeProps } from '$lib/types/themes';
	import { XIcon } from '@lucide/svelte';
	let { config }: ThemeProps = $props();

	// 获取右侧背景样式
	const getRightBackgroundStyle = () => {
		if (config.bg.type === 'unsplash' && config.bg.unsplashUrl) {
			return {
				backgroundImage: `url(${config.bg.unsplashUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			};
		} else if (config.bg.type === 'local' && config.bg.image) {
			return {
				backgroundImage: `url(${config.bg.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			};
		} else if (config.bg.type === 'gradient' && config.bg.gradient) {
			return {
				background: config.bg.gradient
			};
		} else {
			return {
				backgroundColor: config.bg.color
			};
		}
	};

	// 检查是否有图片内容
	const hasImageContent = () => {
		return (
			(config.bg.type === 'unsplash' && config.bg.unsplashUrl) ||
			(config.bg.type === 'local' && config.bg.image)
		);
	};

	const rightBackgroundStyle = getRightBackgroundStyle();
	const hasImage = hasImageContent();
</script>

<div class="w-full h-full overflow-y-hidden flex" style:background-color={config.bg.color}>
	<div
		class={`w-1/2 h-full p-12 ${config.font.value} ${config.theme.swapX ? 'order-1 pr-14' : 'pl-14'} flex flex-col justify-center gap-6 bg-white text-gray-800`}
	>
		<div class={`text-5xl ${config.font?.lineHeight || 'leading-14'} font-bold`}>
			{config.title}
		</div>
		<div class="flex items-center gap-4">
			<img
				class="w-8 h-8"
				src={config.customIcon || `${PUBLIC_ICONIFY_URL}/${config.icon.value}.svg`}
				alt={`${config.icon.label} icon`}
			/>
			<div class={`text-2xl font-semibold ${config.author.trim() === '' && 'hidden'}`}>
				{config.author}
			</div>
		</div>
	</div>
	<div class="w-1/2 h-full relative" style={rightBackgroundStyle}>
		{#if config.bg.type === 'color' || (config.bg.type === 'gradient' && config.bg.gradient)}
			<div
				class={`absolute top-0 left-0 w-full h-full z-1 ${config.pattern.value} ${pattern.isOpacity ? 'opacity-40' : ''}`}
			/>
		{/if}

		{#if hasImage}
			<div class="relative w-full h-full flex group">
				<Button
					class="ignore hidden cursor-pointer absolute top-4 right-4 rounded-full text-center group-hover:flex"
					variant="outline"
					size="icon"
				>
					<XIcon />
				</Button>
			</div>
		{/if}
	</div>
</div>
