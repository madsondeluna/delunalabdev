/* O modo antes da primeira pintura: sem isto a pagina abre clara e pisca
   para o escuro.

   O PADRAO e o escuro grafite. Quem ja escolheu tem a escolha
   respeitada; quem nunca escolheu cai no escuro em vez do claro.

   "dark" guardado antes de 1.6.0 significava o AZUL, e naquele tempo
   dark era o unico escuro. Ele e traduzido para deep-blue em vez de
   descartado: zerar a preferencia de quem volta e a saida preguicosa. */
try {
  var m = localStorage.getItem("theme");
  if (m === null) m = "dark";
  else if (m === "dark") m = "deep-blue";
  if (m && m !== "light") document.documentElement.classList.add(m);
} catch (e) {
  document.documentElement.classList.add("dark");
}
