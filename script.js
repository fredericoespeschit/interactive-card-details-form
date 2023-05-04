const buttonConfirm = document.querySelector('#button-confirm');
const inputCardholderName = document.querySelector('#cardholderName').value;
const inputCardNumber = document.querySelector('#cardNumber').value;
const inputMonth = document.querySelector('#month').value;
const inputYear = document.querySelector('#year').value;
const inputCVC = document.querySelector('#cvc').value;
const result = document.querySelector('#result');

buttonConfirm.addEventListener('click', function (event) {
  event.preventDefault();



  console.log(result)
  console.log('clicou no botão em')
})

document.addEventListener('keyup', function(e) {



  // result.textContent= inputCardholderName + ' - ' + inputCardNumber + ' - ' + inputMonth + ' - ' + inputYear + ' - ' + inputCVC;

  console.log(e.key)
})