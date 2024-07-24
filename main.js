document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);
  const message = document.getElementById("message");
  if(number2 > number1){
    message.textContent = "O campo B é maior que o campo A!"
    message.classList = "message success"
  }else{
    message.textContent = "O campo B deve ser maior que o campo A!"
        message.classList = "message error"
  }
});
