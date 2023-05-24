const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", getJoke);

const paraEl = document.getElementById("joke");

const apiKey = "wufERLmR53edyKwZdfyQNg==tubupFEFWZ5M7FXI";
const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function getJoke() {
  try {
    paraEl.innerText = "Actualizando...";
    btnEl.disabled = true;
    btnEl.innerText = "Cargando...";

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    paraEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "Cuentame un chiste";
  } catch (error) {
    paraEl.innerText = "Ocurrio un error: intentalo más tarde";

    btnEl.disabled = false;
    btnEl.innerText = "Cuentame un chiste";
  }
}
