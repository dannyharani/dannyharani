<script lang="ts">
    import { Canvas } from '@threlte/core';
    import Scene from '$lib/components/Scene.svelte';
</script>

<div class="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto w-full">
    <!-- Text Content -->
    <div class="flex-1 space-y-6 text-center lg:text-left z-10">
        <h1 class="text-5xl lg:text-7xl font-bold tracking-tight">
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-4">
                Danny Harani
            </span>
            <span class="block text-2xl lg:text-4xl mt-2 text-gray-400 font-light">
                Software Engineer
            </span>
        </h1>
        <p class="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Specializing in low-level programming with <span class="text-orange-400 font-mono">Rust</span>, <span class="text-blue-400 font-mono">Go</span>, and <span class="text-yellow-400 font-mono">C/C++</span>. Developing software I love.
        </p>
        <div class="flex gap-4 justify-center lg:justify-start pt-4">
            <a href="/projects" class="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full font-medium transition-all hover:scale-105">
                View Projects
            </a>
            <a href="/about" class="px-8 py-3 bg-blue-600/80 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 rounded-full font-medium transition-all hover:scale-105">
                Contact Me
            </a>
        </div>
    </div>

    <!-- 3D Scene Container -->
    <div class="flex-1 w-full h-[400px] lg:h-[600px] relative z-0">
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10"></div>
        <Canvas>
            <Scene />
        </Canvas>
    </div>
</div>
