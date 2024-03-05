<script>
    import weather from '../assets/temp_weather.png'
    import roadblock from '../assets/temp_roadblock.png'
</script>

<main>
    <div class="banner">
        <div>
            <h2>Today</h2>
        </div>
        <div class="date">
            <h3>Tue</h3>
            <p>September 10, 2024</p>
        </div>
        <div class="weather">
            <img class="weather_image" src={weather} alt="">
            <div class="temperature">
                <h2>13</h2>
                <h2>&deg;C</h2>
            </div>
        </div>
        <div class="heartrate">
            <img class="roadblock" src={roadblock} alt="">
            <h3>Under Construction</h3>
            <p>
                brainstorming
            </p>
        </div>
    </div>
</main>

<style>
    .banner {
        padding: 0 20px 0;
    }
    main {
        min-height: 95vh;
        max-width: 400px;
        width: 100%;
        background-color: #FF55E4;
        display: block;
        color: #163200;
        border-radius: 20px;
        margin-inline: auto;
    }

    h2 {
        color:  #163200;
        margin-bottom: 20px;
        margin-top: 30px;
    }

    .temperature > h2 {
        color:  #163200;
        font-size: 40px;
        margin: 0;
        margin-inline: auto;
        line-height: 38px;
        text-align: center;
    }

    .weather {
        margin: 60px 0;
        margin-inline: auto;
        display: grid;
        grid-template-columns: 3fr 1fr;
        align-items: center;
    }

    .weather_image {
        width: 100%;
    }

    .date {
        margin-top: 70px;
    }

    .heartrate {
        margin: 50px 0;
    }

    .roadblock {
        display: block;
        margin-inline: auto;
        width: 90%;
        max-width: 200px;
        margin-bottom: 20px;
        margin-top: 80px
    }
</style>