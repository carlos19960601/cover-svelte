<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { Button } from './ui/button';
</script>

<header class="w-full h-14 fixed border-b top-0 shadow-xs">
	<div class="container mx-auto h-full px-8 flex justify-between items-center">
		<a href="/" class="h-full flex items-center cursor-pointer">
			<img src={logo} width="28" height="28" alt="logo" />
			<div class="text-xl ml-2 font-bold font-mono text-primary">ThisCover</div>
		</a>
		<Button class="rounded-3xl">
			<a href="https://github.com/weizwz/cover" target="_blank"> ⭐ Star on Github </a>
		</Button>
	</div>
</header>
