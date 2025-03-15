// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar el array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  // Obtener el valor del input y eliminar espacios al inicio y final
  const inputAmigo = document.getElementById('amigo');
  const nombre = inputAmigo.value.trim();

  // Validar que se haya ingresado un nombre
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Agregar el nombre a la lista visual en la página
  const listaAmigos = document.getElementById('listaAmigos');
  const li = document.createElement('li');
  li.textContent = nombre;
  listaAmigos.appendChild(li);

  // Limpiar el campo de entrada y volver a enfocarlo
  inputAmigo.value = "";
  inputAmigo.focus();
}

// Función para sortear y mostrar un amigo secreto de forma aleatoria
function sortearAmigo() {
  // Verificar que la lista tenga al menos un nombre
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  // Calcular un índice aleatorio dentro del rango del array
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indice];

  // Mostrar el resultado en el elemento con id "resultado"
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ""; // Limpiar resultados previos

  const liResultado = document.createElement('li');
  liResultado.textContent = "Tu amigo secreto es: " + amigoSecreto;
  resultado.appendChild(liResultado);
}
