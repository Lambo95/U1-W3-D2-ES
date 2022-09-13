function myName() {
  let messaggio;
  let nome = prompt("Inserisci il tuo nome:");
  let cognome = prompt("Inserisci il cognome");
  if (nome == null || nome == "") {
    messaggio = "Non hai inserito il nome";
  } else {
    messaggio = "Ciao " + nome + " " + cognome;
  }
  document.getElementById("visualizza-nome").innerHTML = messaggio;
}

function myAge() {
  let messaggio;
  let anno = prompt("In quale anno sei nato?");
  if (anno !== null) {
    let datac = new Date();
    let annoc = datac.getFullYear();
    let eta = annoc - anno;
    if (eta < 18) {
      alert("Sei minorenne, hai " + eta + "anni");
      messaggio = "Hai " + eta + " anni";
    } else {
      alert("Sei maggiorenne, hai " + eta + "anni");
      messaggio = "Hai " + eta + " anni";
    }
    document.getElementById("visualizza-eta").innerHTML = messaggio;
  }
}

function ball() {
  let randomNumber = Math.floor(Math.random() * 7);
  console.log(randomNumber);
  const frseDefault = "Premi la palla";
  let zero = 0;
  let uno = 1;
  let due = 2;
  let tre = 3;
  let quattro = 4;
  let cinque = 5;
  let sei = 6;
  let sette = 7;
  let otto = 8;

  switch (randomNumber) {
    case 0:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + zero + frseDefault;
      break;
    case 1:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + uno + "È certo";
      break;
    case 2:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + due + "È decisamente così";
      break;
    case 3:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + tre + "Domanda confusa! Riprova";
      break;
    case 4:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + quattro + "Non posso predire ora";
      break;
    case 5:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + cinque + "Non ci contare";
      break;
    case 6:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + sei + "Le mie fonti dicono di no";
      break;
    case 7:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + sette + "Prospettive non così buone";
      break;
    case 8:
      document.getElementById("visualizza-frase").innerHTML = "Numero estratto: " + otto + "I segnali indicano sì";
      break;
  }
}
