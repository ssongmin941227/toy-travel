const form = document.querySelector('.open-form')
const modalChat = document.querySelector('.modal-chat')
const whiteBox = document.querySelector('.form-chat')
const btnClose = document.querySelector('.close')

form.addEventListener('click', function () {
    modalChat.style.display = "block"
})

//  이벤트버블링 컨트롤 
modalChat.addEventListener('click', function (e) {
    if (e.target != whiteBox && e.target == this) {
        modalChat.style.display = "none"
    }
})

btnClose.addEventListener('click', function () {
    modalChat.style.display = "none"
})