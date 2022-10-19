import BaseComponent from "../../../../components/base-component.js"
import renderTemplate from './template.js'
import tabsStyle from './tabs.css' assert { type: 'css' }

const options = [
    {
        label: '智慧查违',
        value: 1,
        content: {
            title: '智慧查违',
            desc: 'cccc',
            path: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
    },
    {
        label: '电力检测',
        value: 2,
        content: {
            title: '电力检测',
            desc: 'cccc',
            path: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
    },
    {
        label: '松材线虫',
        value: 3,
        content: {
            title: '松材线虫',
            desc: 'cccc',
            path: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
    },
    {
        label: '耕地保护',
        value: 4,
        content: {
            title: '耕地保护',
            desc: 'cccc',
            path: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
    },
]

const Selector = 'exe-tabs'

class EXETabs extends BaseComponent {
    shadowRoot = null
    element = null

    constructor() {
        super()

        this.render()
    }

    render() {
        // let template = document.getElementById('tabs');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'open' })
        //     .appendChild(templateContent.cloneNode(true));

        this._shadowRoot.innerHTML = renderTemplate(options[0])
        this._mergeStylesSheets(tabsStyle)

        this.element = [...this._shadowRoot.querySelector('.tabs').querySelectorAll('span')]

        this.element.forEach((element, index) => {
            element.addEventListener('click', this.switchTab.bind(this, index))
        })
        

    }
    // 切换tab
    switchTab(curIndex) {
        const tabContent = this._shadowRoot.querySelector('.tabs-item')

        this.element.forEach((el, i) => {
            this.element[i].classList.remove('active')
        })
        this.element[curIndex].classList.add('active')

        const { content: { title, desc, path } } = options[curIndex]
        tabContent.innerHTML = `
            <h5>${title}</h5>
            <p>${desc}</p>
            <div class="img-wrapper">
                <img src="${path}" alt="">
            </div>
        `
    }
}

customElements.define(Selector, EXETabs)