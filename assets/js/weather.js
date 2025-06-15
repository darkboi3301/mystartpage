// ┬ ┬┌─┐┌─┐┌┬┐┬ ┬┌─┐┬─┐
// │││├┤ ├─┤ │ ├─┤├┤ ├┬┘
// └┴┘└─┘┴ ┴ ┴ ┴ ┴└─┘┴└─
// Functions to setup Weather widget.

const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');

const weather = {};
weather.temperature = {
	unit: 'celsius',
};

var tempUnit = CONFIG.weatherUnit;

const KELVIN = 273.15;
setPosition();

function setPosition(position) {
	if (!CONFIG.trackLocation || !navigator.geolocation) {
		if (CONFIG.trackLocation) {
			console.error('Geolocation not available');
		}
		getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
		return;
	}
	navigator.geolocation.getCurrentPosition(
		pos => {
			getWeather(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3));
		},
		err => {
			console.error(err);
			getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
		}
	);
}

// Replace OpenWeatherMap with wttr.in (no API key required) and add caching

function getWeather(latitude, longitude) {
	const cacheKey = `weather_${latitude}_${longitude}`;
	const cache = localStorage.getItem(cacheKey);
	const now = Date.now();
	if (cache) {
		const cachedData = JSON.parse(cache);
		if (now - cachedData.timestamp < 10 * 60 * 1000) { // 10 minutes
			setWeatherFromData(cachedData.data);
			return;
		}
	}
	// wttr.in returns weather info as JSON, no API key needed
	const url = `https://wttr.in/${latitude},${longitude}?format=j1`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: now }));
			setWeatherFromData(data);
		});
}

function setWeatherFromData(data) {
	if (!data || !data.current_condition || !data.current_condition[0]) return;
	const current = data.current_condition[0];
	const celsius = parseInt(current.temp_C, 10);
	const fahrenheit = parseInt(current.temp_F, 10);
	weather.temperature.value = tempUnit == 'C' ? celsius : fahrenheit;
	weather.description = current.weatherDesc[0].value;
	weather.city = data.nearest_area && data.nearest_area[0] && data.nearest_area[0].areaName[0].value ? data.nearest_area[0].areaName[0].value : '';
	weather.region = data.nearest_area && data.nearest_area[0] && data.nearest_area[0].region[0].value ? data.nearest_area[0].region[0].value : '';
	weather.country = data.nearest_area && data.nearest_area[0] && data.nearest_area[0].country[0].value ? data.nearest_area[0].country[0].value : '';
	weather.feelsLike = tempUnit == 'C' ? current.FeelsLikeC : current.FeelsLikeF;
	weather.humidity = current.humidity;
	weather.iconId = 'unknown';
	displayWeather();
}

function displayWeather() {
	iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${weather.iconId}.png"/>`;
	tempElement.innerHTML = `${weather.temperature.value.toFixed(0)}°<span class="darkfg">${tempUnit}</span>`;
	descElement.innerHTML = `${weather.city}<br><span style='font-size:0.95em;'>Feels like: ${weather.feelsLike}°${tempUnit}, Humidity: ${weather.humidity}%</span>`;
}
