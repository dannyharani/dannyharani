<script lang="ts">
    export let projects:Progress[] = [];

    let curProject = 0;
    let title = projects[curProject].title;
    let description = projects[curProject].description;
    let ratio = projects[curProject].ratio;

    function updateProgress() {
        curProject = (curProject + 1) % projects.length
        title = projects[curProject].title
        description = projects[curProject].description
        ratio = projects[curProject].ratio
    }

    setInterval(updateProgress, 6000);

</script>

<main>
    <div class="main">
        <div class="progress_bar">
            <h1>{ratio}</h1>
        </div>
        <div class="center">
            <div class="progress_description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        background-color: var(--light-purple);
        border-radius: 25px;
        min-height: 100%;
        display: flex;
        align-items: center;
    }

    main .main {
        margin-inline: auto;
    }

    .main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.5rem;
        padding: 1rem 1.2rem;
    }

    .main > .progress_bar {
        height: 100%;
        grid-column: span 1;
        text-align: center;
    }

    .center {
        height: 100%;
        grid-column: span 2;
        display: flex;
        align-items: center;
    }

</style>