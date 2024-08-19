import styles from './styles.module.css'

export const BannerSection = () => {
    return (
        <>
            <section className={styles.banner}>

                <div className={styles.banner__intro}>
                    <img src="/src/assets/user.png" alt="" className={styles.banner__introImage} />
                    <p className={styles.banner__introText }>hello, my name is Anna</p>
                </div>

                <img src="" alt="" />
                <h1 className={styles.banner__title}>I <span className={styles.banner__titlehighlight}>love</span>  creating and <span className={styles.banner__titlehighlight}>developing</span>  projects</h1>
                <p className={styles.banner__description}>Discover here in this environment, created especially for you, all my projects and technologies</p>

                <div className={styles.banner__actions}>
                    <button className={styles.banner__button}>See Projects</button>
                    <img src="/src/assets/git-icon.png" alt="" className={styles.banner__icon} />
                </div>


                <div className={styles.banner__icons}>

                    <img src="/src/assets/html-icon.png" alt="" className={styles.banner__icon} />
                    <img src="/src/assets/css-icon.png" alt="" className={styles.banner__icon} />
                    <img src="/src/assets/js-icon.png" alt="" className={styles.banner__icon} />
                    <img src="/src/assets/node.png" alt="" className={styles.banner__icon} />
                    <img src="/src/assets/react-icon.png" alt="" className={styles.banner__icon} />

                </div>

            </section>


        </>
    )


}