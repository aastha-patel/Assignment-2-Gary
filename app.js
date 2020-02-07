const body = document.querySelector('.menu-close')
const showMenu = document.querySelector('.menu-logo')
const closeMenu = document.querySelector('.menu-open-logo')

showMenu.addEventListener('click', function(){
    
    body.className='menu-close menu-open transition'
    document.querySelector('.list').innerHTML= `<ul>
    
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contacts</a></li>
                </ul>`

})

closeMenu.addEventListener('click', function(){
    
    body.className='menu-close transition'

})

