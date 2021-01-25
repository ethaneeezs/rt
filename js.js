  document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  var button2 = document.createElement('button');
  var close = document.getElementById('close')
  button.type = 'button';
  button2.type = 'button';
  button.innerHTML = 'Credit Card';
  button2.innerHTML = '';
  button.className = 'btn-styled';
  button2.className = 'imgs'; 
  var container = document.getElementById('qwe');
  container.appendChild(button);
  container.appendChild(button2);
function div_show() {
document.getElementById('abc').style.display = "block";}
function div_hide(){document.getElementById('abc').style.display = "none";}
button.onclick = function() {div_show()};
close.onclick = function () {div_hide()};
}, false);