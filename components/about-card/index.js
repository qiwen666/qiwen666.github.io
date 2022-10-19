import BaseComponent from '../base-component.js'
import aboutCardStyle from './about-card.css' assert { type: 'css' }
import renderTemplate from './template.js'

const defaultConfig = {}

const Selector = 'about-card'

class AboutCard extends BaseComponent {
    shadowRoot = null
    
    constructor() {
        super(defaultConfig)

        this.render()

    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate(this._config)
        this._mergeStylesSheets(aboutCardStyle)

        // let template = document.getElementById('about-card');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));

    }
}

customElements.define(Selector, AboutCard)