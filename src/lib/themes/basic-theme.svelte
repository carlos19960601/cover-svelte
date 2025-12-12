<script lang="ts">
	import { PUBLIC_ICONIFY_URL } from '$env/static/public';
	import type { ThemeProps } from '$lib/types/themes';
	let { config }: ThemeProps = $props();
</script>

<div>
	<div>
		<div class={`text-5xl ${config.font?.lineHeight || 'leading-14'} font-bold text-center`}>
			{config.title}
		</div>
		<div class="w-full flex justify-center items-center gap-4">
			<img
				class="size-10"
				src={config.customIcon || `${PUBLIC_ICONIFY_URL}/${config.icon.value}.svg`}
				alt={`${config.icon.label} icon`}
			/>
			<div class={`text-2xl font-semibold ${config.author.trim() === '' && 'hidden'}`}>
				{config.author}
			</div>
		</div>
	</div>
</div>
