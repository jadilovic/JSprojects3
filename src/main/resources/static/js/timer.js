const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4");

//const futureDate = new Date(2020, 10, 19, 23, 7, 0);
//console.log(futureDate);

const tempYear = new Date().getFullYear();
const tempMonth = new Date().getMonth();
const tempDay = new Date().getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 50, 23, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

// future time in ms

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
	const today = new Date().getTime();
	const t = futureTime - today;
	console.log(t);
	
	const oneDay = 24*60*60*1000;
	const oneHour = 60*60*1000;
	const oneMinute = 60*1000;
	
	let days = t / oneDay;
	days = Math.floor(days);
	
	let hours = (t % oneDay) / oneHour;
	hours = Math.floor(hours);
	
	let minutes = (t % oneHour) / oneMinute;
	minutes = Math.floor(minutes);
	
	let seconds = (t % oneMinute) / 1000;
	seconds = Math.floor(seconds);
	console.log(seconds);
	
	const values = [days, hours, minutes, seconds];
	
	function format(item){
		if(item < 10){
			return `0${item}`;
		} else {
			return item;
		}
	}
	
	items.forEach(function(item, index){
		item.innerHTML = format(values[index]);
	});
	
	console.log(countdown);
	if(t < 0){
		clearInterval(countdown);
		deadline.innerHTML = "<h4 class='expired'>sorry, deadline has expired</h4>";
	}
}

const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();



