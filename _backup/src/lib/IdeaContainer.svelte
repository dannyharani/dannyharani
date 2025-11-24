<script lang="ts">
    export let idea:Idea[] = []

    let currentIdea = 0;
    let description = idea[currentIdea].description

    function nextIdea() {
        currentIdea = (currentIdea + 1) % idea.length
        description = idea[currentIdea].description
    }

    setInterval(nextIdea, 6000)

</script>

<main>
    <div>
        <h2>Idea</h2>
        <p>
            {description}
        </p>
    </div>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        min-height: 100%;
        background-color: var(--green);
        color: white;
        border-radius: 25px;
    }

    main > div 
    {
        padding: 1rem 1.2rem;
    }
</style>