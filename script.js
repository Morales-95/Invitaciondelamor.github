// Fecha cuando se hizo oficial (CAMBIA ESTA FECHA)
const fechaInicio = new Date("2024-05-01T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

function mostrarMensaje() {
  document.getElementById("respuesta").innerHTML =
    "💖 Te amo princesa hermosa, soy feliz estando a tu lado 💖";

  document.getElementById("musicBtn").style.display = "inline-block";
}

// Crear corazones flotando
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(crearCorazon, 500);
