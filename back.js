/* let actividades = [
    { actividad: "lavar" },
    { actividad: "barrer" },
    { actividad: "comprar" }
];

let listatareas = document.getElementById("listatareas");

for (let i = 0; i <= 2; i++) {
    let tarea = document.createElement("li");
    tarea.innerText = actividades[i].actividad;
    listatareas.appendChild(tarea);
} */

let lista = {};


let textValue = document.getElementById("newtext");
let divInput = document.getElementById("divinput");


function onTaskCreate() {
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