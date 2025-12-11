<script lang="ts">
	import EditorPreview from '$lib/components/editor/editor-preview.svelte';
	import EditorSettings from '$lib/components/editor/editor-settings.svelte';
	import EditorTheme from '$lib/components/editor/editor-theme.svelte';
	import Head from '$lib/components/head.svelte';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="h-screen">
	<Head />

	<div class="pt-14 h-full">
		<div class="size-full flex overflow-hidden">
			<div class="h-full w-1/5 xl:w-1/4">
				<EditorSettings />
			</div>
			<Separator orientation="vertical" />
			<div class="h-full flex-1 overflow-auto bg-gray-50">
				<EditorPreview />
			</div>
			<Separator orientation="vertical" />
			<div class="h-full w-[120px] xl:w-[140px] 2xl:w-[300px]">
				<EditorTheme />
			</div>
		</div>
	</div>
</div>
