import {addComponent as renderHeader} from './modules/header.js';
import {addComponent as  renderMainContent} from './modules/main-content.js';
const content = document.querySelector('#content')

renderHeader(content)
renderMainContent(content)
