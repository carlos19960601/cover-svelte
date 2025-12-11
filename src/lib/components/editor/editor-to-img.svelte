<script>
	import { DownloadIcon, LoaderCircleIcon } from '@lucide/svelte';
	import { Button } from '../ui/button';
	import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

	let loading = $state(false);
	let { children } = $props();
</script>

<div class="relative">
	<div class="2xl:absolute 2xl:top-0 2xl:left-full px-4 pb-4 flex 2xl:flex-col gap-2">
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button>
						{#if loading}
							<LoaderCircleIcon className="animate-spin" />
						{:else}
							<DownloadIcon />
						{/if}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>下载图片</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	</div>
	<div>{@render children()}</div>
</div>
