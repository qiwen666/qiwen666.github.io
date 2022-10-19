import BaseComponent from '../../components/base-component.js'
import renderTemplate from './template.js'
import newsStyle from './news.css' assert { type: 'css' }

const Selector = 'exe-news'

class EXENews extends BaseComponent {
    // shadowRoot = null

    constructor() {
        super()
        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate()
        this._mergeStylesSheets(newsStyle)
        
        // let template = document.getElementById('news');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));

    }

    connectedCallback() {
        this.render()
    }

}

customElements.define(Selector, EXENews)