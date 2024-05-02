let digit1 = prompt("Birinci eded");
let digit2 = prompt("Ikinci eded");

let answer = Number(digit1) + Number(digit2);

if (isNaN(answer)) {
  alert("Reqemlerin dogrulugunu birde yoxlayin");
} else {
  alert(answer);
}