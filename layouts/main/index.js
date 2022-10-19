import BaseComponent from '../../components/base-component.js'

const defaultConfig = {}

const Selector = 'exe-main'

class EXEMain extends BaseComponent {
    constructor() {
        super(defaultConfig)
    }
}

customElements.define(Selector, EXEMain)