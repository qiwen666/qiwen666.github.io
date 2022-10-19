import BaseComponent from '../base-component.js'
import renderTemplate from './template.js'
import homeCardStyle from './home-card.css' assert { type: 'css' }

const defaultConfig = {}
const Selector = 'home-card'


class HomeCard extends BaseComponent {

    constructor() {
        super(defaultConfig)

        this.render()
        this._mergeStylesSheets(homeCardStyle)
    }

    render() {
       this._shadowRoot.innerHTML = renderTemplate(this._config)
    }
}

customElements.define(Selector, HomeCard)