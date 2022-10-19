export default config => {
    const { content: { title, desc, path } } = config
    return `
        <div class="content">
            <div class="tabs">
                <span class="active">智慧查违</span>
                <span>电力检测</span>
                <span>松材线虫</span>
                <span>耕地保护</span>
                <span>国情检测</span>
                <span>文字描述</span>
                <span>文字描述</span>
                <span>文字描述</span>
            </div>
            <div class="tabs-item">
                <h5>${title}</h5>
                <p>${desc}</p>
                <div class="img-wrapper">
                    <img src="${path}" alt="">
                </div>
            </div>    
        </div>

    `
}