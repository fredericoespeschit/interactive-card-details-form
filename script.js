const buttonConfirm = document.querySelector('#button-confirm');
const inputCardholderName = document.querySelector('#cardholderName');
const inputCardNumber = document.querySelector('#cardNumber');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const inputCVC = document.querySelector('#cvc');
const result = document.querySelector('#result');



inputCardholderName.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    result.innerHTML = "e.g. Jane Appleseed";
  } else {
    result.innerHTML = e.target.value.toUpperCase();
  }
})

inputCardNumber.addEventListener("keyup", (event) => {
  if (!event.target.value) {
    result.innerHTML = "e.g 1234 5678 9123 0000";
  } else {
    result.innerHTML = event.target.value;
  }
})

inputMonth.addEventListener("Keyup", (e) => {
  if (!e.target.value){
    result.innerHTML = "MM";
  } else {
    result.innerHTML = e.target.value;
  }
})

buttonConfirm.addEventListener('click', function (event) {
  event.preventDefault();

  console.log('clicou no botão em')
})