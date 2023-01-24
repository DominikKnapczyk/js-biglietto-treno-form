function generaPrezzo() {
  var distanza = document.getElementById("distanza").value;
  var eta = document.getElementById("eta").value;
  var nome = document.getElementById("nome").value;
  
  if (eta == 'maggiorenne') {
   var prezzo = distanza * 0.21;
  } else if (eta == 'minorenne') {
    var prezzo = (distanza * 0.21) * (0.8);
  } else {
    var prezzo = (distanza * 0.21) * (0.6);
  }

  document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) + " &euro;";
  document.getElementById("nome-biglietto").innerHTML = nome;
  document.getElementById('biglietto-generato').style.display = "block";
}

function annullaBiglietto() {
  location.reload();
}