export default config => {
    const { title } = config

    return `
        <div class="card">
            <h3>${title}</h3>
            <slot></slot>
        </div>
    `
}