let FirstNum = +prompt("chose a number");
if (isNaN(FirstNum)) {
  alert("please enter a valid number");
} else {
  let SecondNum = +prompt("chose another number");
  if (isNaN(SecondNum)) {
    alert("please enter a valid number");
  } else {
    let operator = prompt("chose an operator:  +  ,  -  ,  *  ,  /  ");
    if (operator == "+") {
      alert("the result is " + (FirstNum + SecondNum));
    } else if (operator == "-") {
      alert("the result is " + (FirstNum - SecondNum));
    } else if (operator == "*") {
      alert("the result is " + FirstNum * SecondNum);
    } else if (operator == "/") {
      alert("the result is " + FirstNum / SecondNum);
    } else {
      alert("please enter a valid operator: +  ,  -  ,  *  ,  / ");
    }
  }
}
