// Select buttons[ok]
const startPauseButton = document.querySelector('#start-pause-button');
const resetButton = document.querySelector('#reset-button');

// Variables para almacenar los segundos, minutos y horas.[ok]
let [seconds, minutes, hours] = [0, 0, 0];

/**
 * Variables para almacenar el intervalo de tiempo que debe
 * transcurrir para actualizar el cronometro y el estado del
 * cronometro.[ok]
 */
let timeInterval;
let stateChronometer = 'paused';

/**
 * Function update chronometer.[ok]
 * - Agregar un cero a la izquierda si es necesario.[ok]
 * - Actualizar el contenido del chronometer.[ok]
 * - Function agregar un cero a la izquierda si se necesita.[ok]
 *  
 */

function updateChronometer() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  const secondsWithFormat = assignFormat(seconds);
  const minutesWithFormat = assignFormat(minutes);
  const hoursWithFormat = assignFormat(hours);

  const chronometer = document.getElementById('chronometer');
  chronometer.innerText = `${hoursWithFormat}:${minutesWithFormat}:${secondsWithFormat}`;
}

function assignFormat(unitOfTime) {
  return unitOfTime < 10 ? '0' + unitOfTime : unitOfTime;
}

/**
 * BotonInicioPausa. addEventListener() dependiendo si es pausado o corriendo.
 * Si el cronometro está pausado:
 * - Llamar a la función cronometro cada 1000 milisegundos.[ok]
 * - Si el cronometro está pausado, se muestra la flecha >, y se
 *   debe cambiar a || porque va a iniciar.[ok]
 * Caso contrario:
 * - Detener el cronometro al eliminar el intervalo de tiempo para
 *  usado para llamar a la función actualizarCronometro().[ok]
 * - Actualizar los botones y el estado del cronometro.[ok]
 * 
 */

startPauseButton.addEventListener('click', function () {
  if (stateChronometer === 'paused') {
    timeInterval = window.setInterval(updateChronometer, 1000);

    document.getElementById('start-pause-button').innerHTML = `<i class="bi bi-pause-fill" id="start-pause-button"></i>`;

    startPauseButton.classList.remove('start');
    startPauseButton.classList.add('pause')
    stateChronometer = 'corriendo';
  } else {
    window.clearInterval(timeInterval);
    document.getElementById('start-pause-button').innerHTML = `<i class="bi bi-play-fill" id="start-pause-button"></i>`;
    startPauseButton.classList.remove('pause');
    startPauseButton.classList.add('start');
    stateChronometer = 'paused';
  }
});


/**
 * BotonReiniciar addEventListener()
 * [x] Reiniciar el cronometro elimando el intervalo de tiempo,
 *  reiniciando los segundos, minutos y horas, y actualizando
 *  el estado del cronometro y de los botones.[ok]
 * 
 *  - Eliminar el intervalo
 *  - Segundos, minutos y horas.
 *  - Actualizar botones
 *  - actualizar estado -> pausado
 */

resetButton.addEventListener('click', function () {
  window.clearInterval(timeInterval);

  seconds=0;
  minutes=0;
  hours=0;
  document.getElementById('chronometer').innerHTML=`00:00:00`;

  document.getElementById('start-pause-button').innerHTML=`<i class="bi bi-play-fill" id="start"></i>`;
  startPauseButton.classList.remove('pause');
  startPauseButton.classList.add('start');
  stateChronometer = 'paused';
});


