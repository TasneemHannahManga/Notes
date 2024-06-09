const newNote = document.querySelector(".new-note");
const noteContainer = document.querySelector(".note-container");
let notes = document.querySelectorAll(".input-box");

function updateStorage () {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

function showNotes () {
    noteContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

newNote.addEventListener("click", function() {
    newNote.classList.add("clicked");

    setTimeout(() => {
        newNote.classList.remove("clicked");
    }, 100);

    addNote();
});

function addNote() {
    let div = document.createElement("div");
    div.classList.add("note");
    noteContainer.appendChild(div);

    let span = document.createElement("span");
    span.innerHTML = "x";
    div.appendChild(span);
    
    let content = document.createElement("p");
    content.classList.add("content");
    content.classList.add("input-box");
    content.setAttribute("contenteditable", "true")
    div.appendChild(content);

    updateStorage();
}

noteContainer.addEventListener("click", function(e) {

    if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }            
        });
    } 
}); 