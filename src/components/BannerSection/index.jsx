import styles from "./styles.module.css"

export const BannerSection = () => {
    return (
        <>
            <section className={styles.banner}>
                <div>

                    <div className={styles.banner__intro}>
                        <img src="/user.png" alt="imagem de user" className={styles.banner__introImage} />
                        <p className={styles.banner__introText}>hello, my name is Anna</p>
                    </div>

                    <h1 className={styles.banner__title}>I <span className={styles.banner__titlehighlight}>love</span>  creating and <span className={styles.banner__titlehighlight}>developing</span>  projects</h1>
                    <p className={styles.banner__description}>Discover here in this environment, created especially for you, all my projects and technologies</p>

                    <div className={styles.banner__actions}>
                        <button className={styles.banner__button}>See Projects</button>
                        <img src="/git-icon.png" alt="icon git " className={styles.banner__icon} />
                    </div>

                    <div className={styles.banner__icons}>

                        <img src="/html-icon.png" alt="icon html" className={styles.banner__icon} />
                        <img src="/css-icon.png" alt="icon css " className={styles.banner__icon} />
                        <img src="/js-icon.png" alt="icon js" className={styles.banner__icon} />
                        <img src="/node.png" alt="icon node" className={styles.banner__icon} />
                        <img src="/react-icon.png" alt="icon react " className={styles.banner__icon} />

                    </div>
                </div>
                <aside>
                    <img src="/banner-img.png" alt="imagem banner" />
                </aside>


            </section>


        </>
    )


}