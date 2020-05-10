var texto_usuario = document.getElementById("txtCapital");
var texto_plazo = document.getElementById("txtPlazo");
var boton_calcular = document.getElementById("button_calc");
var boton_borrar = document.getElementById("button_del");
button_calc.addEventListener("click", calcular);

function calcular()
{
  if (texto_usuario.value <= 5000000 && texto_usuario.value >= 1000 && texto_plazo.value <= 365 && texto_plazo.value >= 30) 
  {
    var cap = parseInt(texto_usuario.value);
    var plaz = parseInt(texto_plazo.value);
    var resultado_int = parseFloat(plaz * (21 / 365) * cap / 100).toFixed(2);
    console.log(resultado_int);
    var resultado_tot =  parseFloat(cap + resultado_int / 1).toFixed(2);
    console.log(resultado_tot);
    document.getElementById("result").innerHTML = "Tu ganancia es $" + resultado_int + "<br />" +
                                                 "Total de Capital es de $" + resultado_tot;
  }

  else if (texto_usuario.value !== 5000000 && texto_plazo.value !== 365)
   {
    alert("Porfavor, introduce un número valido");
    location.reload(true);
  }
   
}
