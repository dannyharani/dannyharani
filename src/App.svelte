<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Banner from './lib/Banner.svelte';
  import Carousel from './lib/Carousel.svelte';
</script>

<!-- <main>
  <div class="main_content">
    <div>
      <p class="logo">Harani Danny</p>
      <div class="navbar">
        <h1>Hey,<br>Here is my<br>Portfolio 💡</h1>
        <div class="socials"><button>LinkedIn</button> <button>Github</button></div> 
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} class="logo" alt="Vite Logo" />
        </a>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
        </a>
      </div>
      <h1>Vite + Svelte</h1>

      <div class="card">
        <Counter />
      </div>

      <p>
        Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
      </p>

      <p class="read-the-docs">
        Click on the Vite and Svelte logos to learn more
      </p>
    </div>
    <div class="banner">
      <Banner />
    </div>
  </div>
</main> -->

<main>
  <div class="main_content">
    <div class="logo"><p>Harani Danny</p></div>
    <div class="intro">
      <h1>Hey,<br>Here is my<br>Portfolio💡</h1>
      <div class="socials"><button>LinkedIn</button> <button>Github</button></div>
    </div>
    <Carousel />
  </div>
  <Banner/>
</main>


<style>
  main {
    width: 77vw;
    margin-left: 1.5vw;
  }

  .logo {
    text-align: center;
  }

  .intro {
    display: flex;
  }

  .navbar {
    padding: 40px;
    display: flex;
  }

  .socials {
    margin-left: auto;
  }
</style>
