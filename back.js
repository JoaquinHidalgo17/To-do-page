let findClaimIdIndex = lista.findIndex((idClaim => idClaim.id === id));

let maxId = 0 ;

function createClaim(title){
    maxId++ ;
 let newClaim = {id: maxId ,title: title , note: "" } ;
 lista.push(newClaim);
};

function deleteClaim(id){
    if (findClaimIdIndex > -1){
        lista.splice(findClaimIdIndex, 1);
    }
    return lista;
    };
    
function updateClaim(id, newTitle, newNote){
    lista[findClaimIdIndex].title = newTitle ;
    lista[findClaimIdIndex].note = newNote ;
    
    };
let lista = [
    {
        id: 0,
        title: "Tarea 1", 
        note: "notas de la tarea",
        
    }
];



let textValue = document.getElementById("newtext");
let divInput = document.getElementById("divinput");


function onTaskCreate() {
    createClaim(textValue.value);
    console.log(lista)
    if (textValue.value == false) {
        alert("Tarea Vacia");
    } else {
        let divfather = document.createElement("div");
        divfather.setAttribute("id", "divfather");
        divInput.appendChild(divfather);

        let newcheckbox = document.createElement("input");
        newcheckbox.type = "checkbox";
        divfather.appendChild(newcheckbox);

        let newp = document.createElement("p");
        newp.innerText = textValue.value;
        newp.setAttribute("class", "taskelement");
        divfather.appendChild(newp);
        textValue.value = "";

        let neweraser = document.createElement("button");
        neweraser.setAttribute("id", "eraser");
        divfather.appendChild(neweraser);
        neweraser.textContent = "X";
        neweraser.onclick = function eraser() {
            let div = this.parentElement;
            div.style.display = "none";

        };
    };

};

/* let eraserbotton = document.getElementById("eraser");
eraserbotton.addEventListener("click", eraser); */

/* function eraser() {
    let div = this.parentElement;
    div.remove();

}; */

function cleartext() {
    textValue.value = "";
}