const toggleButton = document.querySelector(".item-two");
const ul = document.getElementById("listParent")
toggleButton.addEventListener("click", function () {
				ul.classList.toggle("changeVisibility");		
})
        //End of header. 
let figureArray = document.querySelectorAll("figure")
const buttons = document.querySelectorAll("input");
buttons.forEach(function (button) {
				button.addEventListener("click",function () {
								if(button.classList.contains("allBtn")) {
												figureArray.forEach(function (figure) {
																figure.style.display = "flex"
												})
												//
								}
								//ifstat
								if(button.classList.contains("cakeBtn")) {
												figureArray.forEach(function (figure) {
																figure.style.display = "flex"
												})
												figureArray.forEach(function (figure) {
																if(!(figure.classList.contains("cakes"))) {
																				figure.style.display = "none";
																}
												})
												//
								}
								//ifstate
								if(button.classList.contains("doughnutBtn")) {
												figureArray.forEach(function (figure) {
																figure.style.display = "flex"
												})
												figureArray.forEach(function (figure) {
																if(!(figure.classList.contains("doughnut"))) {
																				figure.style.display = "none";
																}
												})
												//
								}
								//ifstate
								if(button.classList.contains("iceCreamBtn")) {
												figureArray.forEach(function (figure) {
																figure.style.display = "flex"
												})
												figureArray.forEach(function (figure) {
																if(!(figure.classList.contains("iceCream"))) {
																				figure.style.display = "none";
																}
												})
												//
								}
								//ifstate
								if(button.classList.contains("sweetBtn")) {
												figureArray.forEach(function (figure) {
																figure.style.display = "flex"
												})
												figureArray.forEach(function (figure) {
																if(!(figure.classList.contains("sweet"))) {
																				figure.style.display = "none";
																}
												})
												//
								}
								//ifstate
				})
				//eventlistener
})
/// filter feature
const searchFilter = document.getElementById("searchFilter");
searchFilter.addEventListener("input", function () {
				for(var i = 0; i < figureArray.length; i++){
								if(figureArray[i].innerText.toUpperCase().includes(searchFilter.value.toUpperCase())) {
												figureArray[i].classList.remove("is-hidden")
								}else {
												figureArray[i].classList.add("is-hidden")
								}
				}
})
/// Modal pop-up
const imageArray = document.querySelectorAll(".open-modal");
const hideModalBtn = document.getElementById("hideModal");
const overlay = document.getElementById("Overlay")
const modal = document.getElementById("Modal");
						//AddEventListenerToBtn
hideModalBtn.addEventListener("click", function () {
		 	modal.classList.add("hidden")
		 	overlay.classList.add("hidden")
})
imageArray.forEach(function (image) {
				image.addEventListener("click", function () {
								modal.classList.remove("hidden")
								overlay.classList.remove("hidden")
								Url= image.src;
								modal.style.backgroundImage= `url(${Url})`
				}) //eventList
})
