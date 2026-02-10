const startDate = new Date(2024, 2, 16, 22, 30, 0);

function updateTime() {
  const now = new Date();
  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("time").innerText =
    `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

function sayYes() {
  alert("Sabía que dirías que sí 💖✨\nTe amo con todo mi corazón 🥹");
}

setInterval(updateTime, 1000);
updateTime();
