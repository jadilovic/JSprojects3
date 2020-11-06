
let counter = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);

btns.forEach(function(btn){
	btn.addEventListener("click", function(e){
		const style = e.currentTarget.classList;
		if(style.contains("decrease")){
			counter--;
		} else if(style.contains("reset")){
			counter = 0;
		} else if(style.contains("increase")){
			counter++;
		}
		
		if(counter > 0){
			value.style.color = "green";
		}
		if(counter < 0){
			value.style.color = "red";
		}
		
		if(counter === 0){
			value.style.color = "#222"
		}
		value.textContent = counter;
	});
});
