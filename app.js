// https://calculator.swiftutors.com/time-dilation-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const timeDilationRadio = document.getElementById('timeDilationRadio');
const elapsedTimeatBodyRadio = document.getElementById('elapsedTimeatBodyRadio');
const relativeVelocityRadio = document.getElementById('relativeVelocityRadio');

let timeDilation;
const c = 299792458;
let elapsedTimeatBody = v1;
let relativeVelocity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

timeDilationRadio.addEventListener('click', function() {
  variable1.textContent = '(T) Elapsed Time at Body (sec)';
  variable2.textContent = '(v) Relative Velocity (km/s)';
  elapsedTimeatBody = v1;
  relativeVelocity = v2;
  result.textContent = '';
});

elapsedTimeatBodyRadio.addEventListener('click', function() {
  variable1.textContent = 'Time Dilation (sec)';
  variable2.textContent = '(v) Relative Velocity (km/s)';
  timeDilation = v1;
  relativeVelocity = v2;
  result.textContent = '';
});

relativeVelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Time Dilation (sec)';
  variable2.textContent = '(T) Elapsed Time at Body (sec)';
  timeDilation = v1;
  elapsedTimeatBody = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(timeDilationRadio.checked)
    result.textContent = `Time Dilation = ${computeTimeDilation().toFixed(2)} sec`;

  else if(elapsedTimeatBodyRadio.checked)
    result.textContent = `Elapsed Time at Body = ${computeElapsedTimeatBody().toFixed(2)} sec`;

  else if(relativeVelocityRadio.checked)
    result.textContent = `Relative Velocity = ${computeRelativeVelocity().toFixed(2)} km/s`;
})

// calculation

function computeTimeDilation() {
  return Number(elapsedTimeatBody.value) / Math.sqrt( 1 - Math.pow((Number(relativeVelocity.value) * 1000) / c, 2));
}

function computeElapsedTimeatBody() {
  return Number(timeDilation.value) * Math.sqrt( 1 - Math.pow((Number(relativeVelocity.value) * 1000) / c, 2));
}

function computeRelativeVelocity() {
  return (Math.sqrt((1 - Math.pow(Number(elapsedTimeatBody.value) / Number(timeDilation.value), 2)) * Math.pow(c, 2))) / 1000;
}