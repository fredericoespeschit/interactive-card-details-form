const buttonConfirm = document.querySelector('#button-confirm');
const inputCardholderName = document.querySelector('#cardholderName');
const inputCardNumber = document.querySelector('#cardNumber');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const inputCVC = document.querySelector('#cvc');
const result = document.querySelector('#result');

//Output
const OutputinputCardholderName = document.querySelector('#OutputinputCardholderName');
const OutputinputCardNumber = document.querySelector('#OutputinputCardNumber');
const OutputinputMonth = document.querySelector('#OutputinputMonth');
const OutputinputYear = document.querySelector('#OutputinputYear');
const OutputinputCVC = document.querySelector('#OutputinputCVC');


inputCardholderName.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    OutputinputCardholderName.innerHTML = "e.g. Jane Appleseed";
  } else {
    OutputinputCardholderName.innerHTML = e.target.value.toUpperCase();
  }
})

inputCardNumber.addEventListener("keyup", (event) => {
  if (!event.target.value) {
    OutputinputCardNumber.innerHTML = "e.g 1234 5678 9123 0000";
  } else {
    OutputinputCardNumber.innerHTML = event.target.value;
  }
})

inputMonth.addEventListener("keyup", (ev) => {
  if (!ev.target.value) {
    OutputinputMonth.innerHTML = "YY";
  } else {
    OutputinputMonth.innerHTML = ev.target.value;
  }
})

inputYear.addEventListener("keyup", (evento) => {
  if (!evento.target.value) {
    OutputinputYear.innerHTML = "YY";
  } else {
    OutputinputYear.innerHTML = evento.target.value;
  }
})

inputCVC.addEventListener("keyup", (evn)=> {
  const inputValue = evn.target.value;
  const cvc = inputValue.replace(/[^0-9]/g, "");
  const cvcLength = cvc.length;

  if (!inputValue) {
    OutputinputCVC.innerHTML = "e.g. 123";
  } else if (cvcLength < 3 || cvcLength > 4) {
    OutputinputCVC.innerHTML = "CVC inválido";
  } else {
    OutputinputCVC.innerHTML = cvc;
  }
})

buttonConfirm.addEventListener('click', function (event) {
  //event.preventDefault();

  console.log('clicou no botão em')
})