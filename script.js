let weather;

async function fetchData(place) {
	try {
		const info = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=35723c3740e440d0bce113200241311&q=${place}&aqi=no`
		);

		weather = await info.json();
		return weather;
	} catch (err) {
		console.log(err);
	}
}

function display() {
	document.querySelector(".name").innerHTML = `${weather.location.name}`;
	document.querySelector(".region").innerHTML = `${weather.location.region}`;
	document.querySelector(".wind").innerHTML = `🌬️${weather.current.wind_kph}Kph`;
	document.querySelector(".temp").innerHTML = `🌞${weather.current.temp_c}°`;
}

document.querySelector(".btn").addEventListener("click", () => {
	let info = document.querySelector(".input").value;
	fetchData(info).then(() => display());
});
