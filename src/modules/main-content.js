import restaurantImagePath from '../images/third-round-knockout.png'
import {getImagesPath} from './image-path-loader.js'

const mainContent = document.createElement('div')
mainContent.classList.add('main-content')
const addComponent = (contentBody, contentToLoad) =>{
    removeContent()
    if(contentToLoad == "about"){
        loadAbout(mainContent)
    }else if(contentToLoad = "menu"){
        loadMenu(mainContent)
    }
    contentBody.appendChild(mainContent)
}

const removeContent = ()=>{
    while(mainContent.firstChild){
        mainContent.firstChild.remove()
    }
}
 
const loadAbout = (mainContent) =>{
    const aboutContent = document.createElement('div')
    aboutContent.classList.add('about-content')

    const restaurantImage = new Image()
    restaurantImage.src = restaurantImagePath
    restaurantImage.id = 'restaurant-image'

    const restaurantDescription = document.createElement('div')
    restaurantDescription.classList.add('restaurant-description')
    restaurantDescription.appendChild(createParagraph('Offering the heaviest and tastiest food in Liyue!'))
    restaurantDescription.appendChild(createParagraph('Traveler, Paimon, Zhongli ate here! YES THE LEGENDARY CHARACTERS'))
    restaurantDescription.appendChild(createParagraph("Won't guarantee anyone to survive after three rounds"))
    aboutContent.appendChild(restaurantImage)
    aboutContent.appendChild(restaurantDescription)

    mainContent.appendChild(aboutContent)
}
 
const createParagraph = (text) =>{
    let paragraph = document.createElement('p')
    paragraph.innerText = text
    return paragraph
}
const loadMenu = (mainContent) => {
    const menuContent = document.createElement('div')
    menuContent.classList.add('menu-content')


    const menuItems = generateMenuItems()
    console.log(menuItems)
    menuItems.forEach((menuItem)=>{
        createMenuItem(menuItem, menuContent)
    })
    mainContent.appendChild(menuContent)
    
}

const generateMenuItems =()=>{

    const menuItems =[]
    const imagePaths = getImagesPath()
    let newId = 0
    for(const imageName in imagePaths){
        menuItems.push({
            id: newId,
            itemName: fixItemName(imageName),
            itemPrice: randomPrice(),
            imagePath: imagePaths[imageName]
        })
        newId += 1
    }
    return menuItems
}

const randomPrice = () =>{
    return Math.floor((Math.random() * (9999 - 1000) + 1000));
}

const fixItemName= (itemName) =>{
    let newItemName = itemName.replaceAll('Item_', '')
    newItemName = newItemName.replaceAll('_', ' ')
    return newItemName
}


const createMenuItem = (itemObj, content) =>{
    let menuItemElement = document.createElement('div')
    menuItemElement.classList.add('menu-item')
    let image = new Image()
    image.src = itemObj.imagePath
    image.classList.add('menu-item-image')
    
    let itemInformation = document.createElement('div')
    itemInformation.classList.add('item-information')
    let itemNameElement = document.createElement('p')
    itemNameElement.innerText = itemObj.itemName
    itemInformation.appendChild(itemNameElement)
    let itemPriceElement = document.createElement('p')
    itemPriceElement.innerText= itemObj.itemPrice
    itemInformation.appendChild(itemPriceElement)

    menuItemElement.appendChild(image)
    menuItemElement.appendChild(itemInformation)

    content.appendChild(menuItemElement)
}
export{
    addComponent
}