<script lang="ts">
	import type { ThemeProps } from '$lib/types/themes';
	let { config }: ThemeProps = $props();
</script>

<div>
	<div>
		<div class={`text-5xl ${config.font?.lineHeight || 'leading-14'} font-bold text-center`}>
			{config.title}
		</div>
	</div>
</div>
