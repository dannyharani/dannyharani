<script>
    import horse from '../assets/temp horse.png'
</script>

<main>
    <div class="arrow-left arrow">
        <div>
            &lt;
        </div>
    </div>
    <div class="wrapper">
        <div class="image_container">
            <img src="{horse}" alt="" class="image">
        </div>
        <div class="content">
            <div>
                <h2>Chess Bot</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
        </div>
    </div>
    <div class="arrow-right arrow">
        <div>
            &gt;
        </div>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 14fr 1fr;
        gap: 0.8rem;
        min-height: 300px;
    }

    .wrapper {
        padding: 15px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1.5rem;
        border-radius: 25px;
        border-style: solid;
        border-width: 2px;
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
        border-radius: 25px;
        border-style: solid;
        border-width: 2px;
        margin-inline: auto;
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

</style>