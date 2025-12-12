<script lang="ts">
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from '$lib/components/ui/select';
	import { PATTERNS } from '$lib/constants/patterns';
	import { coverState } from '$lib/states/cover.svelte';
	import { groupWithTypeName } from '$lib/tools/group-utils';

	const handleValueChange = (value: string) => {
		const pattern = PATTERNS.find((pattern) => pattern.value === value);
		if (pattern) {
			coverState.coverSetting.pattern = pattern;
		}
	};

	let patternData = $state(groupWithTypeName(PATTERNS));

	const triggerContent = $derived(
		PATTERNS.find((pattern) => pattern.value === coverState.coverSetting.pattern.value)?.label ||
			'请选择纹理'
	);
</script>

<Select type="single" onValueChange={handleValueChange}>
	<SelectTrigger>{triggerContent}</SelectTrigger>
	<SelectContent>
		{#each patternData as patterns}
			<SelectGroup>
				<SelectLabel>
					{patterns.typeName}
				</SelectLabel>
				{#each patterns.list as pattern}
					<SelectItem value={pattern.value}>
						{pattern.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		{/each}
	</SelectContent>
</Select>
