
const businessList = [
    { title: '智慧查违', src: '/asserts/images/one.jpg' },
    { title: '电力缺陷识别', src: '/asserts/images/two.jpg' },
    { title: '松材线虫', src: '/asserts/images/three.jpg' },
    { title: '耕地保护', src: '/asserts/images/four.jpg' },
    { title: '国情监测', src: './images/fly.jpg' },
]
const renderBusinessTemp = () => {
    let temp = ''

    businessList.forEach(item => {
        const { src, title } = item
        temp += `
            <div class="swiper-slide column">
                <business-card 
                    e-src="${src}"
                    e-title=${title}
                >
                </business-card>
            </div>
        `
    })
    return temp
}
const coreList = [
    { 
        title: '目标识别', 
        text: '我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字。', 
        src: '/asserts/images/target.png' 
    },
    { 
        title: '变化检测', 
        text: '我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字。', 
        src: '/asserts/images/change.png' 
    },
    { 
        title: '地物分割', 
        text: '我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字。', 
        src: '/asserts/images/thing.png' 
    },

]
const renderCoreTemp = () => {
    let temp = ''
    coreList.forEach(item => {
        const { title, text, src } = item
        temp += `
            <home-card 
                e-src="${src}"
                e-title="${title}" 
                e-text="${text}"
            ></home-card>
        `
    })
    return temp
}

const newsList = [
    { 
        title: '我是标题我是标题我是标题',
        text: '我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文…',
        date: '2022-9-03',
        cover: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    },
    { 
        title: '我是标题我是标题我是标题',
        text: '我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文…',
        date: '2022-9-03',
        cover: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    },
    { 
        title: '我是标题我是标题我是标题',
        text: '我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文…',
        date: '2022-9-03',
        cover: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    },
]
const renderNewsTemp = () => {
    let temp = ''
    newsList.forEach(item => {
        const { title, text, date, cover }= item
        temp += `
            <news-card 
                e-cover="${cover}"
                e-title="${title}"
                e-text="${text}"
                e-date="${date}"
            ></news-card>
        `
    })
    return temp
}
export default config => {
    return `
        <div class="home-wrapper" >
            <section class="banner-area">
                <div class="video">
                    <video controls width="100%" autoplay muted loop>
                        <source
                            src="https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_CinematicTrailer.mp4"
                            type="video/mp4">
                    </video>
                </div>
            </section>
            <section class="technology" >
                <div class="container">
                    <h3>擎天云Al核心技术</h3>
                    <span class="more" >了解更多</span>
                    <div class="row">
                        ${renderCoreTemp()}
                    </div>
                </div>
            </section>
            <section class="business">
                <div class="container">
                    <h3 data-wow-delay="0.5s" class="wow bounceInDown center">业务范围</h3>
                    <span class="more">查看全部</span>
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                ${renderBusinessTemp()}
                            </div>
                    </div>
                </div>
            </section>
            <section class="latest-news">
                <div class="container">
                    <h3>最新动态</h3>
                    <span class="more">查看全部</span>
                    <div class="news-list">
                        ${renderNewsTemp()}
                    </div>
                </div>
            </section>
    </div>

    `
}