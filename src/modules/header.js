import Logo from '../images/logo.png'
import * as PubSub from './pubsub.js'
const addComponent = (contentBody)=>{
    //Parent Header
    const header = document.createElement('div')
    header.classList.add(('header'))
    //Contents
    addPageLogo(header)
    addMenuOptions(header)
    //Adding header to the wrapper
    contentBody.appendChild(header)


}

const addPageLogo = (header) =>{
    const logoAndName = document.createElement('div')
    logoAndName.classList.add('logo-name')
    const name = document.createElement('span')
    name.innerText = "Third-Round Knockout"
    name.classList.add("page-name")
    const myLogo = new Image()
    myLogo.src = Logo
    myLogo.id = "logo"
    logoAndName.appendChild(myLogo)
    logoAndName.appendChild(name)


    header.appendChild(logoAndName)
}


const addMenuOptions = (header)=>{
    const options = document.createElement('div')
    options.classList.add('option-list')

    const menu = document.createElement('div')
    menu.classList.add('header-option')
    menu.innerText = "Menu"
    menu.addEventListener('click',()=>{
        clearSelectedClass(options)
        addSelectedClass(menu)
        PubSub.emit('headerOptionClicked', "menu")
    })

    const about = document.createElement('div')
    about.classList.add('header-option')
    about.classList.add('selected')
    about.innerText = "About"
    about.addEventListener('click',()=>{
        clearSelectedClass(options)
        addSelectedClass(about)
        PubSub.emit('headerOptionClicked', "about")
    })

    const contact = document.createElement('div')
    contact.classList.add('header-option')
    contact.innerText = "Contact"
    contact.addEventListener('click',()=>{
        clearSelectedClass(options)
        addSelectedClass(contact)
    })
    
    options.appendChild(menu)
    options.appendChild(about)
    options.appendChild(contact)
    header.appendChild(options)
}


const addSelectedClass = (option) =>{
    option.classList.add('selected')
}
const clearSelectedClass = (options)=>{
    options.childNodes.forEach(element => {
        element.classList.remove('selected')
    });
}
export{
    addComponent
}