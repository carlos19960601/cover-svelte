<script lang="ts">
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from '$lib/components/ui/select';
	import { FONTS } from '$lib/constants/fonts';
	import { coverState } from '$lib/states/cover.svelte';
	import { groupWithTypeName } from '$lib/tools/group-utils';

	let fontData = $state(groupWithTypeName(FONTS));

	const triggerContent = $derived(
		FONTS.find((font) => font.value === coverState.coverSetting.font.value)?.label || '请选择字体'
	);

	const handleValueChange = (value: string) => {
		const font = FONTS.find((font) => font.value === value);
		if (font) {
			coverState.coverSetting.font = font;
		}
	};
</script>

<Select type="single" onValueChange={handleValueChange}>
	<SelectTrigger>{triggerContent}</SelectTrigger>
	<SelectContent>
		{#each fontData as fonts}
			<SelectGroup>
				<SelectLabel>
					{fonts.typeName}
				</SelectLabel>
				{#each fonts.list as font}
					<SelectItem value={font.value}>
						{font.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		{/each}
	</SelectContent>
</Select>
