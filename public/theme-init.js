/* Aplica o modo antes da primeira pintura: sem isto a pagina abre no
   claro e pisca para o escuro. O valor "dark" guardado por quem visitou
   antes de 1.6.0 significava o azul, entao ele e traduzido. */
try {
  var m = localStorage.getItem("theme");
  if (m === "dark") m = "deep-blue";
  if (m && m !== "light") document.documentElement.classList.add(m);
} catch (e) {}
