const menu = [
  {
    id: 1,
    title: "Ulja / masti / automobilske kemikalije",
    categories: [
    		{
    			id: 1,
    			title: "Ulja",
    			categories: [],
    		},
    		{
    			id: 2,
    			title: "Masti",
    			categories: [],
    		},
    		{
    			id: 3,
    			title: "Rashladna tekucina protiv smrzavanja",
    			categories: [],
    		},    		
    			],
 },
  {
    id: 2,
    title: "Pogon",
    categories: [
		{
			id: 1,
			title: "Elektricno kretanje",
			categories: [],
		},
		{
			id: 2,
			title: "Kvacilo",
			categories: [],
		},
		{
			id: 3,
			title: "Upravljanje kvacilom",
			categories: [],
		},    		
			],
  },
];

const sectionCenter = document.querySelector(".section-center");

const btnsContainer = document.querySelector(".btn-container");

// load page
window.addEventListener("DOMContentLoaded", function(){
	displayMenuItems(menu);
	
//	const categories = menu.map(function(item){
//		return item.category;
//	})
	displayMenuButtons();
});

// display
function displayMenuItems(menuItems){
	// console.log("sake and bake");
	/*
	let displayMenu = menuItems.map(function(item){
		// console.log(menuItem);

		return `<article class="menu-item">
				<img alt=${item.title} src=${item.img} class="photo">
    			<div class="item-info">
    				<header>
    				   	<h4>${item.title}</h4>
    					<h4 class="price">$${item.price}</h4>
    				</header>
					<p class="item-text">
					${item.desc}
					</p>
    			</div>
    		</article>`;
	});
	
	displayMenu = displayMenu.join("");
	
	// console.log(displayMenu);
	
	sectionCenter.innerHTML = displayMenu;
	
//	console.log(menu);
*/
}

function displayMenuButtons(){
	
	const categories = menu.reduce(function(values, item){
		console.log(item.title);
		if(!values.includes(item.title)){
			values.push(item.title);
			}
		return values;
		}, 
		["all"]
	);
	
	const categoryBtns = categories.map(function(category){
		return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
	}).join("");
	console.log(categoryBtns);
	
	btnsContainer.innerHTML = categoryBtns;
	
	const filterBtns = btnsContainer.querySelectorAll(".filter-btn");


	// buttons
	filterBtns.forEach(function(btn){
		btn.addEventListener("click", function(e){
		const category = e.currentTarget.dataset.id;
		const menuCategory = menu.filter(function(menuItem){
			if(menuItem.category === category){
				return menuItem;
			}
		});
		//console.log(menuCategory); 
		if(category === "all"){
			displayMenuItems(menu);
		} else {
			displayMenuItems(menuCategory);
			}
		});
	});
}