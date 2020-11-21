// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener("submit", addItem);

// clear item
clearBtn.addEventListener("click", clearItems);

// ****** FUNCTIONS **********

// add item
function addItem(e){
	e.preventDefault();
	//console.log(grocery.value);
	const value = grocery.value;
	const id = new Date().getTime().toString();
	
	if(value && !editFlag){
		const element = document.createElement("article");
		// add class
		element.classList.add("grocery-item");
		// add id
		const attr = document.createAttribute("data-id");
		attr.value = id;
		element.setAttributeNode(attr);
		element.innerHTML = `<p class="title">${value}</p>
								<div class="btn-container">
									<button type="button" class="edit-btn">
										<i class="fas fa-edit"></i>
									</button>
									<button type="button" class="delete-btn">
										<i class="fas fa-trash"></i>
									</button>    						
								</div>`;
		
		const deleteBtn = element.querySelector(".delete-btn");
		const editBtn = element.querySelector(".edit-btn");
		deleteBtn.addEventListener("click", deleteItem);
		editBtn.addEventListener("click", editItem);
		// append the child
		list.appendChild(element);
		// display alert
		displayAlert("added item to the list", "success");
		// show container
		container.classList.add("show-container");
		// add to local storage
		addToLocalStorage(id, value);
		// set back to default
		setBackToDefault();
		
	} else if(value && editFlag){
		editElement.innerHTML = value;
		displayAlert("changed element", "success");
		// edit local storage
		editLocalStorage(editId, value);
		setBackToDefault();
	} else {
		displayAlert("Please Enter Value", "danger");
	}
}

//clear items
function clearItems(){
	const items = document.querySelectorAll(".grocery-item");
	
	if(items.length > 0){
		items.forEach(function(item){
			list.removeChild(item);
		});
		
		container.classList.remove("show-container");
		displayAlert("empty list", "danger");
	}
}

// delete item
function deleteItem(e){
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;
	list.removeChild(element);
	if(list.children.length === 0){
		container.classList.remove("show-container");
	}
	
	displayAlert("removed item", "danger");
	setBackToDefault();
	// remove from local storage
	// removeFromLocalStorage(id);
}

// edit item
function editItem(e){
	const element = e.currentTarget.parentElement.parentElement;
	// set edit item
	editElement = e.currentTarget.parentElement.previousElementSibling;
	// set form value
	grocery.value = editElement.innerHTML;
	editFlag = true;
	editId = element.dataset.id;
	submitBtn.textContent = "edit";
}

// display alert
function displayAlert(text, action){
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);
	
	//remove alert
	setTimeout(function(){
		alert.textContent = "";
		alert.classList.remove(`alert-${action}`);
	}, 2000);
}

// set back to default
function setBackToDefault(){
	grocery.value = "";
	editFlag = false;
	editID = "";
	submitBtn.textContent = "submit";
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
	localStorage.setItem(id, JSON.stringify(value));
	console.log("adding to local storage");
}

function removeFromLocalStorage(id){
	console.log("removing from local storage");
}

function editLocalStorage(editId, value){
	console.log("editing to local storage");

}
// localStorage API
// setItem
// getItem
// removeItem
// save as string
localStorage.setItem("orange", JSON.stringify("bigorange"));
const oranges = JSON.parse(localStorage.getItem("orange"));
localStorage.removeItem("orange")
console.log(oranges);

// ****** SETUP ITEMS **********







