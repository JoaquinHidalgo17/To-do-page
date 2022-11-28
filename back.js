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

let Lista = {};


let textvalue = document.getElementById("newtext");
let divinput = document.getElementById("divinput");


function inputbutton() {
    if (textvalue.value == false) {
        alert("Tarea Vacia");
    } else {
        let divfather = document.createElement("div");
        divfather.setAttribute("id", "divfather");
        divinput.appendChild(divfather);

        let newcheckbox = document.createElement("input");
        newcheckbox.type = "checkbox";
        divfather.appendChild(newcheckbox);

        let newp = document.createElement("p");
        newp.innerText = textvalue.value;
        newp.setAttribute("class", "taskelement");
        divfather.appendChild(newp);
        textvalue.value = "";

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
    textvalue.value = "";
}