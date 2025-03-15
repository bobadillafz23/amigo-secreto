// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar el array para almacenar los nombres de los amigos
let amigos = [];

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
  // Obtener el elemento de la lista donde se mostrarán los amigos
  const listaAmigos = document.getElementById('listaAmigos');
  
  // Limpiar la lista existente para evitar duplicados
  listaAmigos.innerHTML = "";
  
  // Iterar sobre el arreglo de amigos y agregar cada nombre como un <li>
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Función para agregar un amigo
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const inputAmigo = document.getElementById('amigo');
  const nombre = inputAmigo.value.trim();
  
  // Validar la entrada: si está vacío, mostrar una alerta y detener la función
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  
  // Actualizar el array de amigos
  amigos.push(nombre);
  
  // Limpiar el campo de entrada y devolver el foco para facilitar el siguiente ingreso
  inputAmigo.value = "";
  inputAmigo.focus();
  
  // Actualizar la lista visual de amigos
  mostrarAmigos();
}

// Función para sortear y mostrar un amigo secreto de forma aleatoria
function sortearAmigo() {
  // Validar que haya amigos disponibles en el array
  if (amigos.length === 0) {
    alert("No hay amigos en la lista. Por favor, agrega al menos un nombre.");
    return;
  }

  // Generar un índice aleatorio usando Math.random() y Math.floor()
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado a partir del array
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el elemento con id "resultado"
  const elementoResultado = document.getElementById('resultado');
  elementoResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}
