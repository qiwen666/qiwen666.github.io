import BaseComponent from "../../components/base-component.js";
import renderTemplate from './template.js'
import aboutStyle from './about.css' assert { type: 'css' }

const defaultConfig = {}

const Selector = 'page-about'

class About extends BaseComponent {
    // shadowRoot = null

    constructor() {
        super(defaultConfig)

        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate()
        this._mergeStylesSheets(aboutStyle)

        // let template = document.getElementById('about');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));

    }

    connectedCallback() {
        this.render()
    }
}

customElements.define(Selector, About)