const apiKey = "857b7d8c00973920d0a9457ab2552a74"; 

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").textContent = `🌡️ Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `☁️ ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind-speed").textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;
        document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        document.getElementById("weather-info").style.display = "block";
    } catch (error) {
        document.getElementById("weather-info").style.display = "block";
        document.getElementById("location").textContent = "Error: City not found";
        document.getElementById("temperature").textContent = "";
        document.getElementById("description").textContent = "";
        document.getElementById("humidity").textContent = "";
        document.getElementById("wind-speed").textContent = "";
        document.getElementById("weather-icon").src = "";
    }
}
