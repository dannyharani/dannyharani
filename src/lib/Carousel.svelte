<script lang="ts">
    export let completedProjects:Project[] = [];

    let curProject = 0;
    let maxProjects = completedProjects.length
    let title = completedProjects[curProject].title
    let description = completedProjects[curProject].description
    let image_name = completedProjects[curProject].image_name
    let url = completedProjects[curProject].link

    function updateProject() {
        title = completedProjects[curProject].title
        description = completedProjects[curProject].description
        image_name = completedProjects[curProject].image_name
        url = completedProjects[curProject].link
    }

    function rightArrowClick() {
        curProject = (curProject + 1) % maxProjects
        updateProject();
    }

    function leftArrowClick() {
        curProject = Math.abs(curProject - 1) % maxProjects
        updateProject();
    }

    function navigateToProject() {
        window.location.href = url;
    }
</script>

<main>
    <button class="arrow-left arrow button" on:click={leftArrowClick}>
        <div>
            &lt;
        </div>
    </button>
    <button class="button main_button" on:click={navigateToProject}>
        <div class="wrapper">
            <div class="image_container">
                <img src="{image_name}" alt="" class="image">
            </div>
            <div class="content">
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </button>
    <button class="arrow-right arrow button" on:click={rightArrowClick}>
        <div>
            &gt;
        </div>
    </button>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 14fr 1fr;
        gap: 0.8rem;
        min-height: 300px;
        color: white;
    }

    .button {
        border-radius: 25px;
        border-style: solid;
        border-color: white;
        background-color: transparent;
        transition: .4s ease-in-out 0.1s;
    }

    .main_button {
        z-index: 5;
    }

    .button:hover {
        transform: scale(1.1);
        backdrop-filter: blur(6px);
        cursor: pointer;
    }

    .wrapper {
        padding: 15px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1.5rem;
    }

    .wrapper > .content {
        grid-column: span 2;
        display: flex;
        align-items: center;
    }

    .arrow {
        display: flex;
        width: 60px;
        align-items: center;
        border-radius: 100px;
        border-style: solid;
        border-width: 2px;
        border-color: white;
        margin-inline: auto;
        background-color: transparent;
    }

    .arrow > div {
        margin: auto;
    }

    .image_container {
        display: flex;
        align-items: center;
    }

    .image {
        margin-inline: auto;
        max-height: 65%;
    }

    img {
        max-width: 250px;
    }

</style>