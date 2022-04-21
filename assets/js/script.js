let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let mapa = document.querySelector("#mapa");
/* let audio = document.querySelector("#audio"); */

// funções formulário

function validaNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txtNome.innerHTML = "O nome precisa ter mais do que 3 caracteres.";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido!";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "O email precisa ter @ e .";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = "Máximo 100 caracteres.";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha todos os campos corretamente!");
  }
}

// funções mapa (desabilitada)

/* function mapaZoom() {
  mapa.style.width = "800px";
  mapa.style.height = "600px";
}

function mapaNormal() {
  mapa.style.width = "600";
  mapa.style.height = "450px";
}
 */


// ZONA DE TESTES

function mudaQuack(){
  document.body.classList.toggle('quack')
}

// som pato
/* const playSound = new Audio("/assets/quack.mp4");

playSound.oncanplay = function(){
  playSound.play();
}

playSound.loop = false;

playSound.onended = function(){
  playSound.stop();
} */

let playSound = () => new Audio("/assets/quack.mp4").play()