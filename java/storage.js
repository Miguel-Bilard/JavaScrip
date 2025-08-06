document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('mcolor');
  const savedColor = localStorage.getItem('bgColor');
  const savedTextColor = localStorage.getItem('textColor');
  if (savedColor && savedTextColor) {
    document.body.style.backgroundColor = savedColor;
    document.body.style.color = savedTextColor;
  }
  btn.addEventListener('click', function () {
    if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      localStorage.setItem('bgColor', 'white');
      localStorage.setItem('textColor', 'black');
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      localStorage.setItem('bgColor', 'black');
      localStorage.setItem('textColor', 'white');
    }
  });
});