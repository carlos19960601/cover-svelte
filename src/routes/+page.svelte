<script>
	import Head from '$lib/components/head.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="h-screen">
	<Head />

	<div class="pt-14 w-full flex flex-col items-center">
		<section class="pt-16">
			<div class="font-bold text-center">
				<h1 class="text-5xl md:text-6xl font-extrabold">ThisCover</h1>
				<h2 class="text-3xl md:text-4xl font-bold mt-4">
					一个 <span class="underline decoration-wavy decoration-red-400 underline-offset-6"
						>免费、漂亮</span
					>
					的
					<span class="text-primary">封面生成器</span>
				</h2>
			</div>
			<a href="/editor" class="flex justify-center mt-4">
				<Button class="cursor-pointer md:py-6 md:px-16 md:text-lg font-bold rounded-full"
					>现在开始</Button
				>
			</a>
		</section>
	</div>
</div>
