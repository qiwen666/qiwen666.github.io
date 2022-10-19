export default config => {
    const { src, title, text } = config

    return `
        <div class="img-wrapper">
            <img src="${src}" alt="">
        </div>
        <h4 class="title">${title}</h4>
        <p class="text">${text}</p>
    `
}