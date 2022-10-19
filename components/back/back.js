import BaseComponent from '../base-component.js'
import renderTemplate from './template.js'

const defaultConfig = {}
const Selector = 'exe-back'

export default class EXEBack extends BaseComponent {

    constructor() {
        super(defaultConfig)
        this.render()
    }
    render() {
        this._shadowRoot.innerHTML = renderTemplate()
    }
    connectedCallback() {
        this.addEventListener('back', this.addClass)
        this._shadowRoot.querySelector('.back').addEventListener('click', this.scrollToTop)
    }
    
    addClass(e) {
        const scrollTop = e.detail
        if(scrollTop > 50) {
            this._shadowRoot.querySelector('.back').classList.add('reveal')
        }else {
            this._shadowRoot.querySelector('.back').classList.remove('reveal')
        }
    }
    scrollToTop(e) {
        e.preventDefault()
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}

customElements.define(Selector, EXEBack)