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
eraserbotton.addEventListener("click", getValueInput);


function inputbutton() {
    if (textvalue.value == false) {
        alert("Tarea Vacia");
    } else {
        let newcheckbox = document.createElement("input");
        newcheckbox.type = "checkbox";
        divinput.appendChild(newcheckbox);
        let newp = document.createElement("p");
        newp.innerText = textvalue.value;
        newcheckbox.after(newp);
        textvalue.value = "";
        let neweraser = document.createElement("button");
        neweraser.id = "eraser";
        newp.appendChild(neweraser);


    };

};

function erasetext() {
    textvalue.value = "";
}