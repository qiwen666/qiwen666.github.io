import BaseComponent from '../../components/base-component.js'
import HomeStyle from './home.css' assert { type: 'css' }
import renderTemplate from './template.js'
import wowStyle from '../../asserts/animate.min.css' assert { type: 'css' }
import swiperStyle from '../../asserts/swiper-bundle.min.css' assert { type: 'css' }
import '../../asserts/swiper-bundle.min.js'

const Selector = 'page-home'
const defaultConfig = {}

class PageHome extends BaseComponent {
    shadowRoot = null

    constructor() {
        super(defaultConfig, 'open')

        this.render()

    }

    render() {
        // let template = document.getElementById('home');
        // let templateContent = template.content;

        // this.shadowRoot = this.attachShadow({ mode: 'closed' })
        //     .appendChild(templateContent.cloneNode(true));


        this._shadowRoot.innerHTML = renderTemplate()
        this._mergeStylesSheets(HomeStyle, swiperStyle, wowStyle)

        const slides = this._shadowRoot.querySelector('.mySwiper').querySelectorAll('.swiper-slide')


        const swiper = new Swiper(this._shadowRoot.querySelector('.mySwiper'), {
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true
            },
            loop: true,
            on: {
                slideChangeTransitionEnd: function () {
                    for (const el of slides) {
                        el.classList.remove('slide-current')
                    }
                    slides[this.realIndex].classList.add('slide-current')
                },

            },
        });


        const technologyMoreEl = this._shadowRoot.querySelector('.technology .more')
        const navsElement = document.querySelector('exe-header').querySelector('.header-wrapper')
        technologyMoreEl.addEventListener('click', () => {
            window.location.hash = '#skill'

        })

        
    }

}
customElements.define(Selector, PageHome)