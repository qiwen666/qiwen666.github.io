export default config => {
    return `
        <div class="about-wrapper">
            <section class="banner">
                <div class="banner-desc">
                    <h3>因城市发展而生 为数字政府而来</h3>
                    <p>AI+地理信息 构筑新城市</p>
                </div>
            </section>
            <section class="about">
                <div class="container">
                    <about-card e-title="公司简介">
                        <div class="paragraph">
                            <p>广东擎天云信息技术有限公司（QTY）成立于2022年1月13日，是领先的无人机+AI遥感影像自动分析解决方案提供商。
                            <p>擎天云专注于通过大数据手段，搭建城市大脑平台和“空天地”一体化治理体系。致力于构建围绕违建识别、城市治理、数字孪生、智慧农业、智慧林业、智慧环保、智慧水利等多行业一站式解决方案。</p>
                            <p>擎天云未来的目标是通过AI+地理信息，构筑新一代智慧城市。</p>        
                        </div>
                    </about-card>
                    <about-card e-title="公司团队">
                        <div class="team">
                            <p>由研究测绘领域多年的中山大学教授带领的团队与擎天云联合研发AI违建平台，团队有一名博士和多名硕士组成的擎天云遥感算法和深度学习团队，团队里多名成员都是从事深度学习和图像处理领域相关工作多年，并取得一定的成果。
                        </div>
                    </about-card>
                    <about-card e-title="联系我们">
                        <div class="contact">
                            <div class="column">
                                <span class="mixin">商务合作</span>
                                <span>13556786043</span>
                            </div>
                            <div class="column">
                                <span class="mixin">简历投递</span>
                                <span>1234@163.com</span>
                            </div>
                            <div class="column">
                                <span class="mixin">合作伙伴</span>
                                <span>点此进入了解更多</span>
                            </div>
                        </div>
                    </about-card>
                    <about-card e-title="公司地址">
                        <p>广州市番禺区番山创业中心1号楼2区702室</p>
                    </about-card>
                </div>
            </section>
    </div>
    `
}