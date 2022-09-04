import {addComponent as renderHeader} from './modules/header.js';
import {addComponent as  renderMainContent} from './modules/main-content.js';
import * as PubSub from './modules/pubsub.js'
const content = document.querySelector('#content')

renderHeader(content)
renderMainContent(content, 'about')
PubSub.on("headerOptionClicked", (data)=>{
    console.log('clicked')
    renderMainContent(content, data)
})




