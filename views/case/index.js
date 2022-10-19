import BaseComponent from '../../components/base-component.js'
import renderTemplate from './template.js'
import caseStyle from './case.css' assert { type: 'css' }

const Selector = 'page-case'

class PageCase extends BaseComponent {
    shadowRoot = null

    constructor() {
        super()

        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate()
        this._mergeStylesSheets(caseStyle)
        
        // let template = document.getElementById('case');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));

    }
}

customElements.define(Selector, PageCase)