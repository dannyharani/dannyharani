<script lang="ts">
    let { data } = $props();
    const { projects, futureProjects } = $derived(data);
    
    let showFuture = $state(false);
    
    const currentProjects = $derived(showFuture ? futureProjects : projects);
</script>

<div class="max-w-7xl mx-auto w-full">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 pb-4">
            {showFuture ? 'Future Projects' : 'Current Projects'}
        </h1>
        
        <div class="flex items-center gap-3">
            <span class="text-sm font-medium text-gray-400">View:</span>
            <button
                onclick={() => showFuture = !showFuture}
                class="relative inline-flex items-center h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 p-1 transition-all hover:border-purple-400/50"
                role="switch"
                aria-checked={showFuture}
            >
                <div 
                    class="absolute top-1 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-in-out shadow-lg"
                    style="width: calc(50% - 4px); left: {showFuture ? 'calc(50% + 2px)' : '4px'}"
                ></div>
                
                <span 
                    class="relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-300 whitespace-nowrap"
                    class:text-white={!showFuture}
                    class:text-gray-400={showFuture}
                >
                    Current
                </span>
                <span 
                    class="relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-300 whitespace-nowrap"
                    class:text-white={showFuture}
                    class:text-gray-400={!showFuture}
                >
                    Future
                </span>
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {#each currentProjects as project}
            <div class="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div class="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 class="text-xl font-bold text-white mb-3 relative z-10">{project.title}</h3>
                <p class="text-gray-400 mb-6 text-sm leading-relaxed relative z-10 flex-1">
                    {project.description}
                </p>

                    <div class="flex flex-wrap gap-2 mb-6 relative z-10">
                        {#each project.tags as tag}
                            <span class="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">
                                {tag}
                            </span>
                        {/each}
                    </div>
    
                <div class="flex items-center gap-4 relative z-10">
                    <a href={project.link} class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300">
                        View Code <span class="ml-1">→</span>
                    </a>
                    {#if project.deployment}
                        <a href={project.deployment} class="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300">
                            View Deployment <span class="ml-1">→</span>
                        </a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
