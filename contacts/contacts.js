
let modal  = document.getElementById('modal')
let form = document.getElementById('modalWindows')
modal.onclick = function(){
      form.style.display ='flex'
  }
let closeModal = document.getElementById('close')
closeModal.onclick = function(){
    form.style.display ='none'
}
let send = document.getElementById('send')
send.onclick = function(){
  alert("Отправлено")
  form.style.display ='none'
}