/**
 * Выводит значения от введенного до 40
 */
function calk2() {
  let element = document.getElementById('inp1').value;
  for(i = ++element; i <= 40; i++) {
  console.log(i);
  }
  console.log(element);
}

function isEmpty(value) {
  if (value == "")  { 
    alert('Поле пустое, сорри');
    return true;
  }
  else {
    return false;
  }
}

function consoleA(){
  let element = document.getElementById('inp1').value;
  if(isEmpty(element)){
    return;
  }
  let array = [];
  for(let i = element; i >= 1; i--){
    let count = 0
    for(let c = i; c >= 1; c--) if(i%c == 0) count++;
    if(count == 2) array.push(i);
    count = 0;
  }
  alert ('Простые числа от введенного до 2 ' + array);
}

function consoleB(){
  let element = document.getElementById('number').value;
  if(isEmpty(element)){
    return;
  }
  let array = [];
  for(let c = element; c >= 1; c--) {
    if(element%c == 0) {
      array.push(c);
    }
  }
  if(array.length == 2)  { 
    alert ("Число " + element + " , что вы ввели - простое!") 
  }
  else {
    alert("Число " + element + " , что вы ввели не простое и оно делится нацело на такие числа, как: " + array);
  }    
}