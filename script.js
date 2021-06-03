function elChange(){
  let innerEl = document.getElementById('target');
  if(innerEl.innerText == 'Hi'){
    innerEl.innerText = 'Bye';
  } else {
    innerEl.innerText = 'Hi';
  }
}

let el = document.getElementById('clickBtn');
el.addEventListener('click', elChange);