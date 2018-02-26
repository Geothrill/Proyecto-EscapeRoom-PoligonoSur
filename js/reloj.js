window.onload = function () {
  //reloj
    var reloj = document.querySelector('#cuentaAtras'),
       /* Tiempo
        contador = new CountDownTimer(300),
        contadorObj = CountDownTimer.parse(300); */
        contador = new CountDownTimer(2),
        contadorObj = CountDownTimer.parse(2);

    darForma(contadorObj.minutes, contadorObj.seconds);

    contador.onTick(darForma);

    document.querySelector('button#iniciarJuego').addEventListener('click', function () {
        contador.start();
    });

    function darForma(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        reloj.textContent = minutes + ':' + seconds;
    }

  }
