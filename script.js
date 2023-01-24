function generaPrezzo() {
  var distanza = document.getElementById("distanza").value;
  var eta = document.getElementById("eta").value;
  
  if (eta == 'maggiorenne') {
   var prezzo = distanza * 0.21;
  } else if (eta == 'minorenne') {
    var prezzo = (distanza * 0.21) * (0.8);
  } else {
    var prezzo = (distanza * 0.21) * (0.6);
  }

  document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto &egrave; " + prezzo.toFixed(2) + " &euro;";
}