<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <title>Danny Harani | Developer</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white font-sans overflow-hidden relative">
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

    <nav class="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <div class="max-w-7xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg">
            <a href="/" class="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-80 transition-opacity">
                DH
            </a>
            <div class="flex gap-6 text-sm font-medium text-gray-300">
                <a href="/" class="hover:text-white transition-colors">Home</a>
                <a href="/projects" class="hover:text-white transition-colors">Projects</a>
                <a href="/about" class="hover:text-white transition-colors">About</a>
            </div>
        </div>
    </nav>

    <main class="pt-24 px-6 min-h-screen flex flex-col">
        {@render children()}
    </main>
</div>
