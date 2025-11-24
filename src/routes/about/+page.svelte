<div class="max-w-4xl mx-auto w-full">
    <h1 class="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        About Me
    </h1>

    <div class="grid gap-8">
        <!-- Bio Section -->
        <section class="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
            <h2 class="text-2xl font-bold text-white mb-4">Engineer</h2>
            <p class="text-gray-300 leading-relaxed mb-6">
                I'm a Software Engineer with a passion for low-level software optimization and hardware interfacing. 
                I began by opening up electronics to see how they worked, which eventually led me to the world of C and embedded systems.
            </p>
            <p class="text-gray-300 leading-relaxed">
                Today, I have opened up my interest to all aspects of software development, from embedded systems to full-stack web applications. 
                From writing Rust code for the uO-Rocketry club, writing a competitive chess bot, to building a search engine from scratch, I love solving complex and diverse problems.
                My next big project is to create a crowdsourced learning platform for the Amazigh (Berber) language.
            </p>
        </section>

        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 gap-8">
            <section class="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                <h2 class="text-xl font-bold text-white mb-6">Technical Stack</h2>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-sm font-medium text-gray-400 mb-2">Languages</h3>
                        <div class="flex flex-wrap gap-2">
                            {#each ['C/C++', 'Rust', 'Go', 'Python', 'TypeScript'] as skill}
                                <span class="px-3 py-1 text-sm rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">{skill}</span>
                            {/each}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium text-gray-400 mb-2">Embedded & Hardware</h3>
                        <div class="flex flex-wrap gap-2">
                            {#each ['ARM Cortex-M', 'Quartus', 'RTOS', 'I2C/SPI/UART'] as skill}
                                <span class="px-3 py-1 text-sm rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">{skill}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            </section>

            <section class="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                <h2 class="text-xl font-bold text-white mb-6">Connect</h2>
                <div class="space-y-4">
                    <a href="mailto:me@dannyharani.com" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                        <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                            @
                        </div>
                        <div>
                            <div class="text-sm text-gray-400">Email</div>
                            <div class="text-white font-medium">me@dannyharani.com</div>
                        </div>
                    </a>
                    <a href="https://github.com/dannyharani" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                        <div class="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                            GH
                        </div>
                        <div>
                            <div class="text-sm text-gray-400">GitHub</div>
                            <div class="text-white font-medium">github.com/dannyharani</div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    </div>
</div>
