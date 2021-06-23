console.log('sanity check');

async function getWeatherData(e){
e.preventDefault();

const apiKey = 'f31e429a5567d1c28d46897699a0ab05';
const userInput = $('input[type="text"]').val();
const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=imperial`;


const response = await fetch(url);
const data = await response.json();
console.log(data);

let sunsetTime = data.sys.sunset;
let date = new Date(sunsetTime * 1000);
// Hours part from the timestamp
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + date.getSeconds();

let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

$('#sunset').html(formattedTime);
$('#temp').html(data.main.temp + " F");
$('#wind').html(data.wind.speed + "mph");

}

$('form').on('submit', getWeatherData);