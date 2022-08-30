import Logo from '../images/logo.png'



const addComponent = (contentBody)=>{
    const header = document.createElement('div')
    header.classList.add(('header'))

    console.log(contentBody)
    addPageLogo(header)
    addMenuOptions(header)
    contentBody.appendChild(header)

}

const addPageLogo = (header) =>{
    const logoAndName = document.createElement('div')
    const name = document.createElement('span')
    name.innerText = "Third-Round Knockout"
    name.classList.add("lolll-name")
    // const myLogo = new Image()
    // myLogo.src = Logo
    // myLogo.id = "logo"
    // logoAndName.appendChild(myLogo)
    logoAndName.appendChild(name)


    header.appendChild(logoAndName)
}


const addMenuOptions = (header)=>{
    const options = document.createElement('div')
    options.classList.add('option-list')

    const menu = document.createElement('div')
    menu.classList.add('header-option')
    menu.innerText = "Menu"

    const about = document.createElement('div')
    about.classList.add('header-option')
    about.innerText = "About"

    const contact = document.createElement('div')
    contact.classList.add('header-option')
    about.innerText = "Contact"


    options.appendChild(menu)
    options.appendChild(about)
    options.appendChild(contact)
    header.appendChild(options)
}

export{
    addComponent
}