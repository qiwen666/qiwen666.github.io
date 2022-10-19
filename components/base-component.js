import { getAttributes } from "../utils/util.js";
import resetStyle from '../styles/reset.css' assert { type: 'css' }
import commonStyle from '../styles/common.css' assert { type: 'css' }

export default class BaseComponent extends HTMLElement {
    constructor(config, mode = 'closed') {

        super()

        this._shadowRoot = this._getShadowRoot(mode)
        this._config = this._mergeConfigObj(config)
    }

    /**shadowRoot附加到自定义元素上*/
    _getShadowRoot(mode) {
        return this.attachShadow({ mode })
    }

    /**合并属性*/
    _mergeConfigObj(config) {
        return {
            ...config,
            ...getAttributes(this)
        }
    }

    /**合并样式*/
    _mergeStylesSheets(...reset) {
        this._shadowRoot.adoptedStyleSheets = [...reset, resetStyle, commonStyle]
    }
}