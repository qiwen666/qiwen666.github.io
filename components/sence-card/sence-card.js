import BaseComponent from "../base-component.js"
import renderTemplate from './template.js'
import senceCardStyle from './sence-card.css' assert { type: 'css' }

const Selector = 'sence-card'
const defaultConfig = {}

class SenceCard extends BaseComponent {
    shadowRoot = null

    constructor() {
        super(defaultConfig)

        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate(this._config)
        this._mergeStylesSheets(senceCardStyle)
        

    }
}

customElements.define(Selector, SenceCard)