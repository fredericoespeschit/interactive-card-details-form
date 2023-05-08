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
  const inputValue = event.target.value;
  const regex = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
  };

  if (!inputValue) {
    OutputinputCardNumber.innerHTML = "e.g 1234 5678 9123 0000";
  } else  {
    if (regex.visa.test(inputValue)) {
      console.log("Cartçao Visa válido.");
    } else if (regex.mastercard.test(inputValue)) {
      console.log("Cartão Mastercard válido");
    } else {
      console.log("Cartão inválido");
    }
    
    OutputinputCardNumber.innerHTML = inputValue;
  }
})

inputMonth.addEventListener("keyup", (ev) => {
  const inputValue = ev.target.value;
  const minMonth = 1;
  const maxMonth = 12;

  if (!inputValue) {
    OutputinputMonth.innerHTML = "MM";
  } else if (inputValue < minMonth || inputValue > maxMonth) {
    OutputinputMonth.innerHTML = "Mês inválido."
  } else {
    OutputinputMonth.innerHTML = inputValue;
  }
})

inputYear.addEventListener("keyup", (evento) => {
  const inputValue = evento.target.value;
  const year = new Date();
  const yearFull = year.getFullYear();
  const minYear = 2000;
  const maxYear = yearFull + 5;

  if (!inputValue) {
    OutputinputYear.innerHTML = "YYYY";
  } else if (inputValue < minYear || inputValue > maxYear) {
    OutputinputYear.innerHTML = "Ano inválido";
  } else {
    OutputinputYear.innerHTML = inputValue;
  }
})

inputCVC.addEventListener("keyup", (evn) => {
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
  //Após clicar no botão enviar, apresentar uma mensagem de envio com sucesso
  //é preciso criar um novo arquivo html com a mensagem?
  //Como não dar reloud na pagina inteira?

  console.log('clicou no botão em')
})