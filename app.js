function validate() {
  const cardNumberNot = "wrong format, numbers only";
  const form = document.querySelector(".form");
  const modal = document.querySelector(".modal");
  const name = document.form.name.value;
  const cardNumber = document.form.cardNumber.value;
  const dateMonth = document.form.dateMonth.value;
  const dateYear = document.form.dateYear.value;
  const cvc = document.form.cvc.value;

  if (name == "") {
    document.querySelector(".name-err").innerHTML = "Name field is required";
    document.querySelector(".name-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".name-err").style.display = "none";
    document.querySelector(".name-input").style.border = "1px solid ";
    document.querySelector(".second-p").innerHTML = name;
  }

  if (cardNumber == "") {
    document.querySelector(".cardNumber-err").innerHTML =
      "Number field is required";
    document.querySelector(".cardNumber-input").style.border = "1px solid red";
    return false;
  }

  if (isNaN(cardNumber)) {
    document.querySelector(".cardNumber-err").innerHTML = cardNumberNot;
    document.querySelector(".cardNumber-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".cardNumber-err").style.display = "none";
    document.querySelector(".cardNumber-input").style.border = "1px solid ";
    document.querySelector(".first-p").innerHTML = numberWithSpaces(cardNumber);
  }

  function numberWithSpaces(cardNumber) {
    return cardNumber.toString().replace(/\d{4}(?=.)/g, "$& ");
  }

  if (dateMonth == "") {
    document.querySelector(".month-err").innerHTML = "can't be blank";
    document.querySelector(".month-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".month-err").style.display = "none";
    document.querySelector(".month-input").style.border = "1px solid ";
    document.querySelector(".front-h2").innerHTML = `${dateMonth}/${dateYear}`;
  }

  if (cvc == "") {
    document.querySelector(".cvc-err").innerHTML = "can't be blank";
    document.querySelector(".cvc-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".cvc-err").style.display = "none";
    document.querySelector(".cvc-input").style.border = "1px solid ";
    document.querySelector(".back-h2").innerHTML = cvc;
  }

  if (modal.style.display == "flex") {
    modal.style.display = "none";
    form.style.display = "block";
  } else {
    modal.style.display = "flex";
    form.style.display = "none";
    return false;
  }
}
