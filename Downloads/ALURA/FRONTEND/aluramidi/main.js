function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`; //  template string

  //console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  contador += 1;
  //console.log(contador);
}
