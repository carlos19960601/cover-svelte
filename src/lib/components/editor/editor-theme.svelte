<script lang="ts">
	import { THEMES } from '$lib/constants/themes';
	import { coverState } from '$lib/states/cover.svelte';
	import { cn } from '$lib/utils';
</script>

<div class="h-full w-full overflow-y-auto p-4">
	<h2 class="text-lg font-bold text-center mb-4">主题选择</h2>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-1 2xl:grid-cols-2 gap-4">
		{#each THEMES as theme}
			<button
				class={cn(
					'flex flex-col items-center justify-center border border-gray-200 p-1 overflow-hidden rounded-lg cursor-pointer border-hover duration-100',
					theme.value === coverState.coverSetting.theme.value &&
						'border-gray-400 shadow-sm shadow-indigo-600/50'
				)}
				onclick={() => (coverState.coverSetting.theme = theme)}
			>
				<div class="relative">
					<img src={theme.preview} width={100} height={60} alt={theme.label} />
				</div>
				<div class="text-sm text-center text-gray-600 font-bold whitespace-nowrap">
					{theme.label}
				</div>
			</button>
		{/each}
	</div>
</div>
