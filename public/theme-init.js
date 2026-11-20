/* O modo antes da primeira pintura: sem isto a pagina pisca.

   O PADRAO e o escuro grafite. A escolha feita no seletor fica em "mode", com o
   valor literal do modo. A chave antiga "theme" guardava "dark" tanto
   para o azul de antes de 1.6.0 quanto para o grafite de depois, e quem
   escolhia o grafite voltava no azul. Ela so e lida quando "mode" nao
   existe, com a traducao antiga, para quem escolheu antes da troca. */
try {
  var m = localStorage.getItem("mode");
  if (m === null) {
    m = localStorage.getItem("theme");
    if (m === "dark") m = "deep-blue";
  }
  if (m === null) m = "dark";
  if (m && m !== "light") document.documentElement.classList.add(m);
} catch (e) {
  document.documentElement.classList.add("dark");
}
