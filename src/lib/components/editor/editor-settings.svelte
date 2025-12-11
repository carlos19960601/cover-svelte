<script>
	import { coverState } from '$lib/states/cover.svelte';
	import IconSelect from '../icon-select.svelte';
	import { Input } from '../ui/input';
	import { Label } from '../ui/label';
	import { Textarea } from '../ui/textarea';
</script>

<div class="size-full py-4">
	<h2 class="text-lg font-bold text-center mb-4">基础配置</h2>
	<form class="pr-10 pb-4">
		<div class="flex w-full items-center flex-wrap gap-y-4">
			<div class="flex w-full">
				<Label htmlFor="title" className="w-16 justify-end mr-2">标题</Label>
				<Textarea
					id="title"
					class="flex-1 focus-visible:ring-1"
					placeholder="请输入封面标题"
					bind:value={coverState.coverSetting.title}
				/>
			</div>
			<div class="flex w-full md:w-1/2 xl:w-full">
				<Label htmlFor="author" className="w-16 justify-end mr-2">作者</Label>
				<Input
					id="author"
					class="flex-1 focus-visible:ring-1"
					placeholder="请输入作者"
					bind:value={coverState.coverSetting.author}
				/>
			</div>
			<div class="flex w-full md:w-1/2 xl:w-full">
				<Label class="w-16 justify-end mr-2">图标</Label>
				<IconSelect />
			</div>
		</div>
	</form>
</div>
