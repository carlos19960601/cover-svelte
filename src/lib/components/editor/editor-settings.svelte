<script lang="ts">
	import { coverState } from '$lib/states/cover.svelte';
	import { HelpCircleIcon, RotateCcwIcon, SaveIcon } from '@lucide/svelte';
	import BackgroundSelect from '../background-select.svelte';
	import FontSelect from '../font-select.svelte';
	import IconSelect from '../icon-select.svelte';
	import PatternSelect from '../pattern-select.svelte';
	import { Button } from '../ui/button';
	import { Input } from '../ui/input';
	import { Label } from '../ui/label';
	import { Textarea } from '../ui/textarea';
	import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
</script>

<div class="size-full py-4">
	<h2 class="text-lg font-bold text-center mb-4">基础配置</h2>
	<form class="pr-10 pb-4">
		<div class="flex w-full items-center flex-wrap gap-y-4">
			<div class="flex w-full">
				<Label class="w-16 justify-end mr-2">标题</Label>
				<Textarea
					id="title"
					class="flex-1 focus-visible:ring-1"
					placeholder="请输入封面标题"
					bind:value={coverState.coverSetting.title}
				/>
			</div>
			<div class="flex w-full md:w-1/2 xl:w-full">
				<Label class="w-16 justify-end mr-2">作者</Label>
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
			<div class="flex w-full md:w-1/2 xl:w-full 2xl:w-1/2">
				<Label class="w-16 justify-end mr-2">字体</Label>
				<FontSelect />
			</div>
			<div class="flex w-full md:w-1/2 xl:w-full 2xl:w-1/2">
				<div class="w-16 flex items-center justify-end mr-2 gap-1">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<HelpCircleIcon className="size-3 text-gray-400 hover:text-gray-600 cursor-help" />
							</TooltipTrigger>
							<TooltipContent>
								<p>纹理仅在纯色/渐变背景下生效</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<Label>纹理</Label>
				</div>
				<PatternSelect />
			</div>
			<div class="flex w-full">
				<Label class="w-16 justify-end mr-2">背景</Label>
				<BackgroundSelect />
			</div>
		</div>
	</form>
	<div class="flex justify-center items-center py-4">
		<Button class="cursor-pointer mr-4">
			<SaveIcon className="size-4 hidden md:block" />
			保存
		</Button>
		<Button class="cursor-pointer" variant="outline">
			<RotateCcwIcon className="size-4 hidden md:block" />
			重置
		</Button>
	</div>
	<div class="flex justify-end items-center p-4 pr-12">
		<span class="text-sm underline cursor-pointer"> 清除已保存配置 </span>
	</div>
</div>
