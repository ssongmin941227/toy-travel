const btn = document.querySelectorAll('.btn-slide')

btn.forEach((element, index) => {
    element.addEventListener('click', function (e) {
        $('.btn-slide').removeClass('current')
        e.target.classList.add('current')
        moveBackground(index)
    })
})

function moveBackground(index) {
    var temp = (index * (-100)).toString()
    document.querySelector('.slide-container').style.transform = "translateX(" + temp + "vw)"
}