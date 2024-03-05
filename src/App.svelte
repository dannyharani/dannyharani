<script lang="ts">
  import Banner from './lib/Banner.svelte';
  import Carousel from './lib/Carousel.svelte';
  import ProgressContainer from './lib/ProgressContainer.svelte';
  import IdeaContainer from './lib/IdeaContainer.svelte';

  alert("This website is not complete yet, the content is simply placeholder. Press OK to view the website");
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
    <div class="rows">
      <div class="intro">
        <h1>Hey,<br>Here is my<br>Portfolio💡</h1>
        <div class="socials"><button>LinkedIn</button> <button>Github</button></div>
      </div>
      <div class="project_containers">
        <div class="update_containers">
          <div class="idea_container">
            <IdeaContainer />
          </div>
          <div class="progress_container">
            <ProgressContainer />
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  </div>
  <Banner/>
</main>


<style>
  main {
    padding: 1rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .main_content {
    grid-column: span 4;
  }

  .rows {
    display: grid;
    grid-template-rows: 1fr 2fr;
    height: 97.5%;
  }

  .project_containers {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .update_containers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    min-height: 210px;
    margin: 20px 0 20px 0;
  }

  .progress_container {
    grid-column: span 2;
  }

  .logo {
    text-align: center;
  }

  .intro {
    display: flex;
  }

  .socials {
    margin-left: auto;
  }
</style>
