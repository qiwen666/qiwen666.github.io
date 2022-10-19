export default config => {
    console.log(config);
    const { src, desc } = config
    return `
        <div class="img-wrapper">
            <img src="${src}">
        </div>
        <div class="mask" part="mask">
            <span>${desc}</span>
        </div>
    `
}