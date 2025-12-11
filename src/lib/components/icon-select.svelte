<script lang="ts">
	import { PUBLIC_ICONIFY_URL } from '$env/static/public';
	import { coverState } from '$lib/states/cover.svelte';
	import type { IconOption } from '$lib/types/settings';
	import { CheckIcon, ChevronDownIcon } from '@lucide/svelte';
	import { Button } from './ui/button';
	import {
		Command,
		CommandEmpty,
		CommandGroup,
		CommandInput,
		CommandItem,
		CommandList
	} from './ui/command';
	import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

	let open = $state(false);
	let options = $state<IconOption[]>([]);
	let loading = $state(false);
	let query = $state(coverState.coverSetting.icon.label);

	// 发起远程搜索请求
	const fetchSearchResults = async (query: string) => {
		try {
			if (!PUBLIC_ICONIFY_URL) {
				throw new Error('Iconify API URL is not defined');
			}
			if (query.trim() === '') {
				return;
			}

			const response = await fetch(`${PUBLIC_ICONIFY_URL}/search?query=${query}&limit=100`);
			const result = await response.json();

			options = result.icons.map((item: string) => ({
				value: item,
				label: item.split(':')[1]
			}));
		} catch (error) {
			console.error('The Iconify API call failed :', error);
			options = [coverState.coverSetting.icon];
		} finally {
			loading = false;
		}
	};

	$effect(() => {
		fetchSearchResults(coverState.coverSetting.icon.label);
	});

	$effect(() => {});
</script>

{#snippet formatOptionLabel(icon: IconOption)}
	<div class="flex items-center">
		<img
			class="w-6 h-6 mr-2"
			loading="lazy"
			src={icon.label === '本地图标' ? icon.value : `${PUBLIC_ICONIFY_URL}/${icon.value}.svg`}
			alt={`${icon.label} icon`}
		/>
		<span class="overflow-hidden text-ellipsis">{icon.label}</span>
	</div>
{/snippet}

<div class="flex-1 flex items-center justify-between gap-2 overflow-hidden">
	<Popover bind:open>
		<PopoverTrigger>
			<Button variant="outline" role="combobox" aria-expanded={open} class="flex-1 justify-between">
				{@render formatOptionLabel(coverState.coverSetting.icon)}
				<ChevronDownIcon className="opacity-50" />
			</Button>
		</PopoverTrigger>
		<PopoverContent>
			<Command>
				<CommandInput placeholder="请搜索图标" class="h-9" bind:value={query} />
				<CommandList>
					<CommandEmpty>未找到相关图标</CommandEmpty>
					<CommandGroup>
						{#each options as option}
							<CommandItem
								key={option.value}
								value={option.value}
								class="w-full flex items-center justify-between"
							>
								{@render formatOptionLabel(option)}
								<CheckIcon
									class={coverState.coverSetting.icon.value === option.value
										? 'opacity-100'
										: 'opacity-0'}
								/>
							</CommandItem>
						{/each}
					</CommandGroup>
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</div>
