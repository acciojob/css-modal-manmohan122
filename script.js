//your JS code here. If required.
let openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");
let modal = document.querySelector(".modal");

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", ()=>{
	modal.style.display = "none";
})
window.addEventListener("click", (e)=>{
	if(e.target == modal){
	modal.style.display = "none";
	}
})
