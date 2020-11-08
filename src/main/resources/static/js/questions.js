//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function(orange){
	// console.log(orange);
	
	const btn = orange.querySelector(".question-button");
	
	//console.log(btn);
	
	btn.addEventListener("click", function(){
		
		questions.forEach(function(item){
			if(item != orange){
				item.classList.remove("show-text");
			}
		});
		
		orange.classList.toggle("show-text");
	});
	
});



// traversing the dom
/*
const btns = document.querySelectorAll(".question-button");

btns.forEach(function(btn){
	btn.addEventListener("click", function(e){
		console.log(e.currentTarget.parentElement.parentElement);
		const question = e.currentTarget.parentElement.parentElement;
		
		question.classList.toggle("show-text");
	});
});
*/