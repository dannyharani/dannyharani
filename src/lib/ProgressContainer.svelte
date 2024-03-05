<main>
    <div class="main">
        <div class="progress_bar">
            <h1>1/5</h1>
        </div>
        <div class="center">
            <div class="progress_description">
                <h2>Chiptune Maker</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        background-color: #410093;
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