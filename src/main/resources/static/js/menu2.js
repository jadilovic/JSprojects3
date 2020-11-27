const menu = [
  {
    id: 1,
    title: "Ulja / masti / automobilske kemikalije",
    categories: [{
        id: 1,
        title: "Ulja",
        categories: ["Motorno ulje", "Tehnicka maziva", "Ulje za prijenos"],
     },
      {
        id: 2,
        title: "Masti",
        categories: ["Masti za lezajeve", "Masti za podmazivanje centralnog sustava", "Biorazgradiva mast"],
      },
      {
    	id: 3,
    	title: "Rashladna tekucina protiv smrzavanja",
    	categories: ["Tekucina za hladjenje", "Uredjaj za hladjenje"],
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
    	categories: ["Elektricno kretanje", "Elementi elektricnog kretanja"],
    	},
    	{
    	id: 2,
    	title: "Kvacilo",
    	categories: ["Otpusna piksna kvacila", "Lezaj spojnicke osovine", "Nosiva ploca lamele kvacila"],
    	},  
    	{
    	id: 3,
    	title: "Upravljanje kvacilom",
    	categories: ["Sajla kvacila", "Crijeva / cijevi kvacila", "Vilica kvacila"],
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
	displayMenuButtons(menu);
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

function displayMenuButtons(menuItems){
	
	const categories = menuItems.reduce(function(values, item){
		console.log(item.title);
		if(!values.includes(item.title)){
			values.push(item.title);
			}
		return values;
		}, 
		["Pocetno"],
	);
	
	const categoryBtns = categories.map(function(category){
		return `<button class="filter-btn" type="button" data-id='${category}'>${category}</button>`
	}).join("");
	console.log(categoryBtns);
	
	btnsContainer.innerHTML = categoryBtns;
	
	const filterBtns = btnsContainer.querySelectorAll(".filter-btn");


	// buttons
	filterBtns.forEach(function(btn){
		btn.addEventListener("click", function(e){
		const titleName = e.currentTarget.dataset.id;
		console.log(titleName);
		let menuCategories = [];
		menu.forEach(function(menuObject){
			console.log(menuObject.title + " and " + menuObject.categories);
			if(menuObject.title === titleName){
				menuCategories = menuObject.categories;
			}
		});

		if(titleName === "Pocetno"){
			displayMenuButtons(menu);
		} else {
			displayMenuButtons(menuCategories);
		}

		});
	});
}