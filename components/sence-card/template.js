export default config => {
    const { src, text } = config

    return `
        <div class="img-wrapper">
            <img src="${src}" alt="">
        </div>
        <span class="text">${text}</span>
    `
}