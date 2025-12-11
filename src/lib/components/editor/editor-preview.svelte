<script>
	import EditorImage from './editor-image.svelte';
	import EditorToImg from './editor-to-img.svelte';
</script>

<div class="size-full bg-gray-50">
	<h2 class="text-lg font-bold text-center py-4">封面预览</h2>
	<div class="w-full overflow-auto flex sm:justify-center items-center pb-12">
		<EditorToImg>
			<EditorImage />
		</EditorToImg>
	</div>
</div>
