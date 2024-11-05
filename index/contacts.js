
let modal = document.getElementById('modalWindows')
const close = document.querySelector('body')
function modalShow (e){
    modal.style.display = 'flex'
    close.style.overflow = 'hidden'
}

document.getElementById('burger-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  });
  
  document.getElementById('close-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
  });
  
