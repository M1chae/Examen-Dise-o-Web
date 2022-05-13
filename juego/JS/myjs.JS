var aleatorio1 = Math.floor(Math.random() * 10);
var aleatorio2 = Math.floor(Math.random() * 10);
var intentos = 0;
var correcto = false;

document.getElementById("Button").onclick = function () {
  location.href = "nivelfacil.html";
}

function nivelfacil(){
  alert("Dificultad Fácil");
  
 while(correcto == false){
    var entrada = prompt("¿Cúal es la suma de los numeros " +aleatorio1+"+"+aleatorio2);
    var sum = aleatorio1 + parseInt(aleatorio2)
    if (entrada == null){
      return;
    }
    intentos ++;
    if(entrada == sum){
      alert("Correcto!");
      correcto = true;
      document.getElementById('num1').innerHTML = entrada;
      document.getElementById('resp').innerHTML = "Felicitaciones! acertaste el resultado  :)";
      
    }else
    
      {
        alert("Incorrecto!" );
      }
      
  }
  
}



function nivelmedio(){
  alert("Dificultad Media");

  while(correcto == false && intentos < 5){
    var entrada = prompt("Introduzca el resultado de la resta " +aleatorio2+"-"+aleatorio1);
    var resta = parseInt(aleatorio2) - parseInt(aleatorio1)
    if (entrada == null){
      return;
    }
    intentos++;
    if (entrada == resta) {
      alert("Correcto!");
      correcto = true;
      document.getElementById('num1').innerHTML = entrada;
      document.getElementById('resp').innerHTML = "Felicitaciones! acertaste el resultado :)";
    } else
    {
      alert("Incorrecto. Intentos usados " +intentos);
    }
  }
  
  
}

function niveldificil(){
  alert("Dificultad Difícil. 3 intentos");

  while (correcto == false && intentos < 3) {
    var entrada = prompt("Introduzca el resultado de la multiplicación " +aleatorio1+"*"+aleatorio2);
    var multiplicación =aleatorio1 * parseInt(aleatorio2)
    if (entrada == null){
      return;
    }
    intentos++;
    if (entrada == multiplicación) {
      alert("Correcto! ");
      correcto = true;
      document.getElementById('num1').innerHTML = entrada;
      document.getElementById('resp').innerHTML = "Felicitaciones! acertaste el resultado  :)";
      
    } else
    {
      alert("Incorrecto. Intentos usados "+intentos);
    }
      
    }
    
    
  }