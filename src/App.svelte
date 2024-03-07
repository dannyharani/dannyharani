<script lang="ts">
  import Banner from './lib/Banner.svelte';
  import Carousel from './lib/Carousel.svelte';
  import ProgressContainer from './lib/ProgressContainer.svelte';
  import IdeaContainer from './lib/IdeaContainer.svelte';
  import completedProjects from './assets/CompletedProjects.json';
  import progress from './assets/Progress.json';
  import ideas from './assets/Ideas.json'

  alert("This website is not complete yet, the content is simply placeholder. Press OK to view the website");

  function navigateLinkedin() {
    window.location.href = "https://www.linkedin.com/in/danny-harani"
  }

  function navigateGithub() {
    window.location.href = "https://www.github.com/dannyharani"
  }
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
  <div class="center">
    <div class="main_content">
      <div class="logo"><p>Harani Danny</p></div>
      <div class="rows">
        <div class="intro">
          <h1>Hey,<br>Here is my<br>Portfolio💡</h1>
          <div class="socials"><button class="linkedin_button" on:click={navigateLinkedin}> <img src="linkedin.png" alt="">LinkedIn</button> <button class="github_button" on:click = {navigateGithub}> <img alt="" src="github.png"> Github</button></div>
        </div>
        <div class="project_containers">
          <div class="update_containers">
            <div class="idea_container">
              <IdeaContainer idea={ideas.ideas}/>
            </div>
            <div class="progress_container">
              <ProgressContainer projects={progress.progress}/>
            </div>
          </div>
          <Carousel completedProjects={completedProjects.projects}/>
        </div>
      </div>
    </div>
    <Banner/>
  </div>
</main>


<style>
  main {
    height: 100%;
    max-width: 1500px;
    align-content: center;
    margin-inline: auto;
    margin-top: auto;
  }

  .center {
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
    min-height: 250px;
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

  button {
    display: inline-flex;
    align-items: center;
  }

  button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    margin-left: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: white;
    transition: .4s ease-in;
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.15);
  }

  button > img {
    width: 25px;
    margin-right: 10px;
  }

  .github_button {
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: 400;
  }

  .linkedin_button {
    background-color: transparent;
    color: white;
    padding: 10px;

  }
</style>
