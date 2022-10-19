import BaseComponent from '../../components/base-component.js'
import renderTemplate from './template.js'
import footerStyle from './footer.css' assert { type: 'css' }

const defaultConfig = {}

const Selector = 'exe-footer'

class EXEfFooter extends BaseComponent {

    constructor() {
        super(defaultConfig)

        this.render()
        
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate(this._config)
        this._mergeStylesSheets(footerStyle)

    }
    connectedCallback() {
        this.render()
    }
}

customElements.define(Selector, EXEfFooter)