const programList = [
    { label: '无人机', icon: 'icon-a-safetyofficer-line' },
    { label: '数据处理', icon: 'icon-a-safetyofficer-line' },
    { label: '电脑', icon: 'icon-a-safetyofficer-line' },
    { label: 'Al', icon: 'icon-a-safetyofficer-line' },
    { label: '数据库', icon: 'icon-a-safetyofficer-line' },
]
const renderProgramTemp = () => {
    let temp = ''
    programList.forEach(item => {
        const { label, icon } = item
        temp += `
            <program-card e-label=${label} e-icon=${icon}></program-card>
        `
    })
    return temp
}
const applicationList = [
    { 
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', 
        desc: '文字描述文字描述文字描述' 
    },
    { 
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', 
        desc: '文字描述文字描述文字描述' 
    },
]
const renderApplicationTemp = () => {
    let temp = ''
    applicationList.forEach(item => {
        const { src, desc }= item

        temp += `
            <div class="item">
                <application-card e-src=${src} e-desc=${desc}></application-card>
            </div>
            `
        
    })
    return temp
}
const senceList = [
    { src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: '文字描述' },
    { src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: '文字描述' },
    { src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: '文字描述' },
]
const renderSenceTemp = () => {
    let temp = ''
    senceList.forEach(item => {
        const { src, text } = item
        temp += `
            <sence-card e-src=${src} e-text=${text}></sence-card>
        `
    })
    return temp
}
export default config => {
    return `
        <div class="case-wrapper">
            <div class="part">
                <div class="container">
                    <span>文字描述解决方案名称</span>
                </div>
            </div>
            <section class="sence">
                <div class="container">
                    <h3>场景痛点</h3>
                    <div class="row">
                        ${renderSenceTemp()}
                    </div>
                </div>
            </section>
            <section class="resolution">
                <div class="container">
                    <h3>解决方案</h3>
                    <div class="img-wrapper">
                        <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt="">
                    </div>
                </div>
            </section>
            <section class="program">
                <div class="container">
                    <h3>方案优势</h3>
                    <div class="program-options">
                       ${renderProgramTemp()}
                    </div>
                </div>
            </section>
            <section class="application">
                <div class="container">
                    <h3>应用场景</h3>
                    <div class="content">
                        <div class="application-items">
                            ${renderApplicationTemp()}
                        </div>
                    </div>
                </div>
            </section>
    </div>

    `
}