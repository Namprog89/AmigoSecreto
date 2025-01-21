// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let idAmigo = 0; // Contador de amigos
let amigoSecreto;
let idAmigoSecreto;
let listaDeAmigos = []; // lista de amigos

console.log();

function agregarAmigo() // este metodos e
{
    var auxif = document.getElementById("amigo").value; // valida no este vacio

    if(auxif === "") // evaluamos si se ingreso algun nombre 
        {
            alert("Ingrese un nombre por favor");
        }
        else // captura el nombre y lo almacena en una lista 
        { 
            listaDeAmigos.push(document.getElementById("amigo").value);
            idAmigo++;
            document.getElementById("amigo").value = ""; 
        }
actualizaListaDeAmigos(listaDeAmigos); // este metodo actuliza la lista y la muesta en pantalla
}
function actualizaListaDeAmigos(listaDeAmigos) // este metodo actuliza la lista y los mueta en el label y lo vizualliza en patalla
{
   
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    listaDeAmigos.forEach(elemento => {
        const li = document.createElement("li");
        li.textContent = elemento;
        listaHTML.appendChild(li);
    });
}
function sortearAmigo() // este metodos realiza un sorteo y evalua cual sera el amigo secreto y lo mostrara en pantalla 
{
    idAmigoSecreto = Math.floor (Math.random()*idAmigo);
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = `Tu amigo secreto es: ${listaDeAmigos[idAmigoSecreto]}`;
}
