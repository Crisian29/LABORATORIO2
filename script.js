document.getElementById('mouseover-example').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'lightgreen';
});

document.getElementById('mouseover-example').addEventListener('mouseout', function() {
  this.style.backgroundColor = 'lightblue';
});

document.getElementById('click-example').addEventListener('click', function() {
  this.style.backgroundColor = 'lightcoral';
});

document.getElementById('focus-example').addEventListener('focus', function() {
  this.style.backgroundColor = 'lightyellow';
});

document.getElementById('focus-example').addEventListener('blur', function() {
  this.style.backgroundColor = '';
});
