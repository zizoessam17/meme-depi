const input = document.querySelector(".main input");
const btn = document.querySelector(".main button");
const view = document.querySelector(".message");
const viewImage = document.querySelector(".view img");

let memes = [];

async function loadData() {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    memes = await data.data.memes;
  } catch (error) {
    console.error(error);
  }
}
loadData();

btn.addEventListener("click", () => {
  const value = Number(input.value);
  const meme =
    input.value !== "" && value >= 0 && value <= 99 ? memes[value] : null;

  if (meme) {
    viewImage.src = meme.url;

    view.innerHTML = `<h1 class="text-light pt-1  text-center text-light">${meme.name}</h1>`;
  } else {
    viewImage.src = "";

    view.innerHTML = `<h1 class="text-light pt-2 fw-bold text-center text-danger">Enter a valid number</h1>`;
  }
});
