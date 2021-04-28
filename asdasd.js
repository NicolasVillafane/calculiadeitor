const SUMAR = document.getElementById("sumar");
const RESTAR = document.getElementById("restar");
const MULTIPLICAR = document.getElementById("multiplicar");
const DIVIDIR = document.getElementById("dividir");
const DIV = document.getElementById("resultado");

const mostrarResultado = (a) => {
  let p = document.createElement("p");
  DIV.append(p);
  p.innerHTML = `EL RESULTADO ES: ${a}`;
};

const borrarResultado = () => {
  if (DIV.childElementCount == 1) {
    DIV.removeChild(document.querySelector("p"));
  }
};

const sumar = () => {
  borrarResultado();
  let NUM_1 = parseInt(document.getElementById("numero1").value);
  let NUM_2 = parseInt(document.getElementById("numero2").value);
  let resultado = NUM_1 + NUM_2;
  console.log(resultado);
  mostrarResultado(resultado);
};

const restar = () => {
  borrarResultado();
  let NUM_1 = parseInt(document.getElementById("numero1").value);
  let NUM_2 = parseInt(document.getElementById("numero2").value);
  let resultado = NUM_1 - NUM_2;
  console.log(resultado);
  mostrarResultado(resultado);
};

const multiplicar = () => {
  borrarResultado();
  let NUM_1 = parseInt(document.getElementById("numero1").value);
  let NUM_2 = parseInt(document.getElementById("numero2").value);
  let resultado = NUM_1 * NUM_2;
  console.log(resultado);
  mostrarResultado(resultado);
};

const dividir = () => {
  borrarResultado();
  let NUM_1 = parseInt(document.getElementById("numero1").value);
  let NUM_2 = parseInt(document.getElementById("numero2").value);
  let resultado = NUM_1 / NUM_2;
  console.log(resultado);
  mostrarResultado(resultado);
};

SUMAR.addEventListener("click", sumar);
RESTAR.addEventListener("click", restar);
MULTIPLICAR.addEventListener("click", multiplicar);
DIVIDIR.addEventListener("click", dividir);
