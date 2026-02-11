// Fecha cuando se hizo oficial
const fechaInicio = new Date("2024-05-01T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `${dias} días, ${horas} horas, ${minutos} min y ${segundos} seg`;
}

// Actualizar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

function mostrarMensaje() {
  const respuesta = document.getElementById("respuesta");
  const musicBtn = document.getElementById("musicBtn");

  respuesta.innerHTML = "💖 Te amo princesa hermosa, soy feliz estando a tu lado 💖";
  
  // Usamos 'block' para que se coloque debajo del texto de respuesta
  musicBtn.style.display = "block";
}

// Crear corazones flotando
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  
  // Variedad de corazones
  const tipos = ["💗", "💖", "💝", "💕", "❤️"];
  heart.innerHTML = tipos[Math.floor(Math.random() * tipos.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.duration = (Math.random() * 3 + 3) + "s"; // Velocidad aleatoria

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(crearCorazon, 400);