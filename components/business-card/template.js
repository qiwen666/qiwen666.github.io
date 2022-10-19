export default config => {
    const { src, title  }= config
    return `
        <div class="img-wrapper">
            <img src="${src}" alt="">
        </div>
        <div class="text" part="active">
            <span>${title}</span>
        </div>
    `
}