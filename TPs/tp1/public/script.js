console.log("Dale BOCA");

let titulo = document.getElementById("noticia-p");

const noticia = () => {
  window.location.href = "./noticia.html";
};

const cambiaColor = () => {
  titulo.style.color = "gray";
  document.documentElement.style.cursor = "pointer";
};

const cambiaColor2 = () => {
  titulo.style.color = "white";
  document.documentElement.style.cursor = "auto";
};

titulo.addEventListener("click", noticia);
titulo.addEventListener("mouseover", cambiaColor);
titulo.addEventListener("mouseout", cambiaColor2);
