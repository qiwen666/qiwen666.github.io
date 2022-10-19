import BaseComponent from "../../components/base-component.js";
import renderTemplate from './template.js'
import skillStyle from './skill.css' assert { type: 'css' }

const Selector = 'page-skill'
class PageSkill extends BaseComponent {
    shadowRoot = null
    
    constructor() {
        super()

        
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate()
        this._mergeStylesSheets(skillStyle)

        // let template = document.getElementById('skill');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));

    }

    connectedCallback() {
        this.render()

        window.addEventListener('more', (e) => {
            const hash = e.detail
            const navs = document.querySelector('exe-header')._shadowRoot.querySelector('.nav').querySelectorAll('a')
            const index = Array.from(navs).findIndex(item => item.hash === hash)
            
            for(let i = 0; i < navs.length; i++) {
                navs[i].classList.remove('active')
            }
            navs[index].setAttribute('class', 'active')
            document.querySelector('exe-header').navIndex = index
        })
    }
}

customElements.define(Selector, PageSkill)