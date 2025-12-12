<script lang="ts">
	import { coverState } from '$lib/states/cover.svelte';
	import { Button } from './ui/button';
	import { Input } from './ui/input';
</script>

<div class="flex flex-1 items-center justify-between gap-2 overflow-hidden">
	<div class="flex flex-1 items-center gap-2">
		<Input
			type="color"
			class="w-full focus-visible:ring-1"
			placeholder="请选择背景色"
			bind:value={coverState.coverSetting.bg.color}
		/>
	</div>
	<div class="flex gap-1 items-center">
		<!-- 本地上传按钮 -->
		<div class="h-full relative overflow-hidden">
			<Input
				type="file"
				accept="image/png, image/jpeg, image/webp, image/jpg"
				class="absolute h-full w-fit right-0 top-0 opacity-0 cursor-pointer"
			/>
			<Button class="cursor-pointer">上传</Button>
		</div>
	</div>
</div>
