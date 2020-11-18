
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
	const id = e.target.dataset.id;
	
	if(id){
		// remove active from other buttons
		btns.forEach(function(btn){
			btn.classList.remove("active");
			// add active to clicked element button
			e.target.classList.add("active");
		})
		
		// remove active from other articles
		articles.forEach(function(article){
			article.classList.remove("active");
		//	if(id === article.id){
		//		article.classList.add("active");
		//	}
		});

		const element = document.getElementById(id);
		element.classList.add("active");
	}
});