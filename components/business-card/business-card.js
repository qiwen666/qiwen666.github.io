import BaseComponent from '../base-component.js'
import renderTemplate from './template.js'
import businessCardStyle from './business-card.css' assert { type: 'css' }

const defaultConfig = {}

const Selector = 'business-card'

class BusinessCard extends BaseComponent {
    shadowRoot = null
    
    constructor() {
        super(defaultConfig, 'open')

        this.render()
        
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate(this._config)
        this._mergeStylesSheets(businessCardStyle)

        // let template = document.getElementById('business-card');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));

    }
}

customElements.define(Selector, BusinessCard)