export default config => {
    return `
        <div class="footer-wrapper">
            <div class="container">
                <div class="footer">
                    <div class="widget">
                        <a href="javascript:;" class="logo">
                            <img src="./images/logo.jpg" alt="擎天云">
                        </a>
                        <div class="mobile">
                            <span class="icon">
                                <img src="./images/telephone.svg" alt="">
                            </span>
                            <span>020-1234567</span>
                        </div>
                        <div class="location">
                            <span class="icon">
                                <img src="./images/location.svg" alt="">
                            </span>
                            <span>广州市番禺区番山创业中心1号楼2区702室</span>
                        </div>
                    </div>
                    <div class="menu">
                        <div class="menu-options">
                            <ul class="column">
                                <li><a href="#">变化检测</a></li>
                                <li><a href="#">目标识别</a></li>
                            </ul>
                            <ul class="column">
                                <li><a href="#">软件平台</a></li>
                                <li><a href="#">应用案例</a></li>
                                <li><a href="#">下载中心</a></li>
                            </ul>
                            <ul class="column">
                                <li><a href="#">关于我们</a></li>
                                <li><a href="#">联系我们</a></li>
                                <li><a href="#">加入我们</a></li>
                                <li><a href="#">新闻中心</a></li>
                            </ul>
                        </div>
                        <div class="qrcode">
                            <div class="qrcode-item">
                                <img src="./images/qrcode.png" alt="">
                                <span>公众号</span>
                            </div>
                            <div class="qrcode-item">
                                <img src="./images/qrcode.png" alt="">
                                <span>视频号</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">Copyright @2020 Ezio. Designed</div>
            </div>
        </div>
    `
}