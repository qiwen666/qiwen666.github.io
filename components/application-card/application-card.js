import BaseComponent from "../base-component.js"
import renderTemplate from './template.js'
import applicationCardStyle from './application-card.css' assert { type: 'css' }

const Selector = 'application-card'
const defaultConfig = {}

class ApplicationCard extends BaseComponent {
    shadowRoot = null

    constructor() {
        super(defaultConfig)

        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate(this._config)
        this._mergeStylesSheets(applicationCardStyle)
        
        // let template = document.getElementById('application-card');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'open' })
        //     .appendChild(templateContent.cloneNode(true));

    }
}

customElements.define(Selector, ApplicationCard)