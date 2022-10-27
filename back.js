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
let eraserbotton = document.getElementById("eraser");
eraserbotton.addEventListener("click", eraser());

function eraser() {
    var div = this.parentElement;
    div.style.display = "none";

}

function inputbutton() {
    if (textvalue.value == false) {
        alert("Tarea Vacia");
    } else {
        let divfather = document.createelement("div");
        divfather.id = "divfather";
        divinput.appendChild(divfather);
        let newcheckbox = document.createElement("input");
        newcheckbox.type = "checkbox";
        divfather.appendChild(newcheckbox);
        let newp = document.createElement("p");
        newp.innerText = textvalue.value;
        newcheckbox.appendChild(newp);
        textvalue.value = "";
        let neweraser = document.createElement("button");
        neweraser.id = "eraser";
        divfather.appendChild(neweraser);


    };

};

function erasetext() {
    textvalue.value = "";
}