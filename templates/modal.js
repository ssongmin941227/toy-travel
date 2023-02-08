const body = document.querySelector('body')
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');
const btnClose = document.querySelector('#close');

btnOpenPopup.addEventListener('click', () => {
  modal.classList.toggle('show');

  if(modal.classList.contains('show')){
    body.style.overflow = 'hidden';
  }
});

modal.addEventListener('click',(Event) => {
    if(Event.target === modal){
        modal.classList.toggle('show');

        if(!modal.classList.contains('show')){
            body.style.overflow = 'auto';
        }
    }
} );

btnClose.addEventListener('click', function(){
    modal.classList.toggle('show');

})
