import renderTemplate from './template.js'
import styles from '../../styles/reset.css' assert { type: 'css' };
import commonStyle from '../../styles/common.css' assert { type: 'css' }
import { getAttributes } from '../../utils/util.js';

const defaultConfig = {}
const Selector = 'exe-header'

// 定义组件
class EXEHeader extends HTMLElement {
    shadowRoot = null
    config = defaultConfig

    constructor() {
        super()
        this.render()
        this.shadowRoot.adoptedStyleSheets = [styles, commonStyle] //添加样式

    }

    render() {
        this.shadowRoot = this.attachShadow({ mode: 'closed' })
        this.shadowRoot.innerHTML = renderTemplate(this.config)        
    }

    updateStyle() {
        this.config = {...defaultConfig, ...getAttributes(this)}
        this.shadowRoot.innerHTML = renderTemplate(this.config)
    }

    connectedCallback() {
        this.updateStyle()
    }
}

// 注册组件
customElements.define(Selector, EXEHeader)