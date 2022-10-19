import BaseComponent from '../base-component.js'
import renderTemplate from './template.js'
import newsCardStyle from './news-card.css' assert { type: 'css' }

const defaultConfig = {}

const Selector = 'news-card'

class AboutCard extends BaseComponent {
    shadowRoot = null
    
    constructor() {
        super(defaultConfig)

        this.render()
        
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate(this._config)
        this._mergeStylesSheets(newsCardStyle)
        // let template = document.getElementById('news-card');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));

    }
}

customElements.define(Selector, AboutCard)