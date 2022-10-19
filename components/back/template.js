export default config => {
    return `
        <style>
            .back.reveal {
                opacity: 1;
                visibility: visible;
            }
            .back {
                opacity: 0;
                visibility: hidden;
                position: fixed;
                right: 40px;
                bottom: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: var(--primary);
                cursor: pointer;
                transition: all 0.3s ease 0s;
            }
            .back a {
                width: 5px;
                height: 5px;
                line-height: 10px;
                border-top: 3px solid var(--white);
                border-right: 3px solid var(--white);
                transform: rotate(-45deg);
                color: var(--white);
            }
        </style>
        <div class="back">
            <a href="# "></a>
        </div>

    `
}