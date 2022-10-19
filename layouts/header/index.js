import BaseComponent from '../../components/base-component.js'
import renderTemplate from './template.js'
import headerStyle from './header.css' assert { type: 'css' }
import { isStr, runFun } from '../../utils/util.js'
import { CUSTOM_NAVITEM_NAME } from '../../config/config.js'

const defaultConfig = {
    title: '新闻中心'
}
const Selector = 'exe-header'

class EXEHeader extends BaseComponent {
    shadowRoot = null
    navIndex = 0

    constructor() {
        super(defaultConfig, 'open')

        this.render()
        this._mergeStylesSheets(headerStyle)
    }

    render() {
        this._shadowRoot.innerHTML = renderTemplate(this._config)
    }

    connectedCallback() {
        this.render()
        this.initEvenListener()
        this.addEventListener('scroll', this.scrollFixed)
        this.refresh()
    }

    initEvenListener() {
        const linkList = this._shadowRoot.querySelector('.nav').querySelectorAll('a')
        linkList.forEach((el, index) => {
            el.setAttribute('data-index', index)
            el.addEventListener('click', (e) => navItemClick(e, el))
        })

        const navItemClick = ($event, element) => {
            
            $event.preventDefault()

            const curIndex = element.getAttribute('data-index')
            if (curIndex == this.navIndex) return

            linkList.forEach((item, index) => {
                linkList[index].classList.remove('active')
            })
            element.setAttribute('class', 'active')
            this.navIndex = curIndex

            this.dispatchEvent(new CustomEvent(CUSTOM_NAVITEM_NAME, {
                detail: element
            }))
        }
    }

    scrollFixed(e) {
        const { scrollTop } = e.detail
        if (scrollTop < 110) {
            this._shadowRoot.querySelector('.header-wrapper').classList.remove('menu-sticky')
        } else {
            this._shadowRoot.querySelector('.header-wrapper').classList.add('menu-sticky')
        }

    }

    refresh() {
        // window.location.hash
        const navs = this._shadowRoot.querySelector('.nav').querySelectorAll('a')
        const index = Array.from(navs).findIndex(item => item.hash === window.location.hash)
        for (let i = 0; i < navs.length; i++) {
            navs[i].classList.remove('active')
        }
        navs[index].setAttribute('class', 'active')
    }
}

customElements.define(Selector, EXEHeader)