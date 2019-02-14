var input = parseInt(prompt("Enter test year"));
if (input % 4 === 0 && input % 100 !== 0){
  alert(input + " is a leap year")
} else if (input % 100 === 0 && input % 400 === 0){
  alert(input + " is a leap year")
} else {
  alert(input + " is not a leap year")
}
