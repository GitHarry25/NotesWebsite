const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() { // checks if data has been stored in browser. if so, display it
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML); // whatever is written within the notes box will be saved
}

createBtn.addEventListener("click", ()=>{ // once the button is clicked, it will create the below code
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", true);
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img); 

})

notesContainer.addEventListener("click", function(e){ // delete fucntion
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage(); // calling for above function. update browser that something has been deleted
    }
    else if(e.target.tagName === "P") // calls function when something has been updated
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage() 
            }
        })
})