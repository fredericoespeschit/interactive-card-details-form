const buttonConfirm = document.querySelector('#button-confirm');

const result = document.querySelector('#result');

buttonConfirm.addEventListener('click', function (event) {
  event.preventDefault();

  const inputCardholderName = document.querySelector('#cardholderName').value;
  const inputCardNumber = document.querySelector('#cardNumber').value;
  const inputMonth = document.querySelector('#month').value;
  const inputYear = document.querySelector('#year').value;
  const inputCVC = document.querySelector('#cvc').value;


  result.textContent= inputCardholderName + ' - ' + inputCardNumber + ' - ' + inputMonth + ' - ' + inputYear + ' - ' + inputCVC;



  console.log(result)
  console.log('clicou no botão em')
})