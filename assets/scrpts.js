const buttonMostrar = document.getElementById("mostrar-carros");
const listaCarros = document.querySelector("ul");

buttonMostrar.addEventListener("click", mostrarCarro);

let carrosNaTela = false; // Variável para controlar se os carros estão visíveis
function mostrarCarro() {
    if (carrosNaTela) {
        // Se os carros estão visíveis, esvazia a lista

        listaCarros.innerHTML = "";
    } else {
        // Se os carros estão ocultos, monta a lista
        let mostraCarrosTela = "";

        carros.forEach((carro) => {
            mostraCarrosTela += `<li>
         <img src="${carro.src}"/>
         <p>${carro.nome}</p>
          <p>modelo<br> ${carro.modelo}</p>
         <p class="precoCarro"> $${carro.preco.toFixed(2)}</p>
        
         </li>`;
        });

        listaCarros.innerHTML = mostraCarrosTela;
    }
    // Inverte o estado (se estava true vira false e vice-versa)
    carrosNaTela = !carrosNaTela;
}
