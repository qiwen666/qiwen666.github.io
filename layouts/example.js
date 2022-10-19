import styles from '../../styles/reset.css' assert { type: 'css' };

const Selector = 'exe-header'

// 定义组件
class EXEHeader extends HTMLElement {
    shadowRoot = null

    constructor() {
        super()
        // shadowRoot附加到自定义元素上
        let shadow = this.attachShadow({ mode: 'closed' })

        const para = document.createElement('p')
        para.innerText = '我是自定义组件的内容'

        shadow.adoptedStyleSheets = [styles] //添加样式
        // shadowDOM附加到shadowRoot上
        shadow.appendChild(para)
    }

    render() {
        this.shadowRoot = this.attachShadow({ mode: 'closed' })
    }

    
}

// 注册组件
customElements.define(Selector, EXEHeader)