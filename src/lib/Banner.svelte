<script lang="ts">
    const params = {
        "latitude": 45.3001,
        "longitude": -75.9161,
        "hourly": "temperature_2m",
        "forecast_days": 1
    };
    
    let response = fetch("https://api.open-meteo.com/v1/forecast?latitude=45.3001&longitude=-75.9161&current=temperature_2m")
    let temp = "";
    fetch("https://api.open-meteo.com/v1/forecast?latitude=45.3001&longitude=-75.9161&current=temperature_2m").then(response => {
        if (!response.ok) {
            temp = "?"
        }
        console.log(response)
    })
    console.log(temp);

    const dateObj = new Date();
    let day = dateObj.toDateString().substring(0, 4);
    let date = dateObj.toDateString().substring(4,);


</script>

<main>
    <div class="banner">
        <div>
            <h2>Today</h2>
        </div>
        <div class="date">
            <h3>{day}</h3>
            <p>{date}</p>
        </div>
        <div class="weather">
            <img class="weather_image" src="../../public/temp_weather.png" alt="">
            <div class="temperature">
                <h2>13</h2>
                <h2>&deg;C</h2>
            </div>
        </div>
        <div class="heartrate">
            <img class="roadblock" src="../../public/temp_roadblock.png" alt="">
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
        max-width: 400px;
        width: 100%;
        background-color: var(--pink);
        display: block;
        color: white;
        border-radius: 20px;
        margin-inline: auto;
    }

    h2 {
        margin-bottom: 20px;
        margin-top: 30px;
    }

    .temperature > h2 {
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