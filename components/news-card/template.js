export default config => {
    const { cover, title, text, date } = config
    const [ year, month, day ] = date.split('-')

    return `
        <div class="cover">
            <img src="${cover}" alt="">
        <div class="date">
            <span class="one">${day}</span>
            <div class="two">
                <span>${year}</span>
                <span>${month}月</span>
            </div>
        </div>
        </div>
        <div class="content">
            <span>${title}</span>
            <p>${text}</p>
            <a href="javascript:;" class="more">更多</a>
        </div>
    `
}