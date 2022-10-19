export default config => {
    const { label, icon  } = config
    return `
        <div class="iconfont ${icon}" part="icon"></div>
        <span part="label">${label}</span>
    `
}