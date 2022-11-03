let buyButton = document.querySelector('#buy-me')

function buyMe(){
    alert('you bought it')
    rollbar.info('water bought')
}

buyButton.addEventListener('click', buyMe)