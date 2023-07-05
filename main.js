let GivenNumber = document.getElementById("field");
let Button = document.getElementById("btn");
let Result = document.getElementById("result");

function handleClick(e) {
  e.preventDefault();
  let number = +GivenNumber.value;

  if (number % 2 == 0) {
    Result.innerText = "The number is Even";
  } else if (number % 2 == 1) {
    Result.innerText = "The number is Odd";
  } else {
    Result.innerText = "The number is Fraction";
  }
}

// Button.addEventListener("click", handleClick);

Button.onclick = handleClick;
