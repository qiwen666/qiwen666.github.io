import BaseComponent from '../base-component.js'
import renderTemplate from './template.js'
import iconfontStyle from '../../asserts/iconfont/iconfont.css' assert { type: 'css' }
import ProgramCardStyle from './program-card.css' assert { type: 'css' }

const defaultConfig = {}

const Selector = 'program-card'

class ProgramCard extends BaseComponent {
    // shadowRoot = null
    
    constructor() {
        super(defaultConfig)

        this.render()

    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate(this._config)
        this._mergeStylesSheets(ProgramCardStyle, iconfontStyle)

        // let template = document.getElementById('program-card');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));

    }
}

customElements.define(Selector, ProgramCard)