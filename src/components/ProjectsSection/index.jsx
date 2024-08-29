

import styles from "./style.module.css"

export const ProjectCard = () => {
    return (
        <section className={styles.projectCard} >
            <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>Let's set up a conversation and <span className={styles.projectHighlight}>develop our creativity</span> together?</h2>
                <p className={styles.projectDescription}>Advertise your brand organically within Dribbble's design inspiration Feed</p>
            </div>
            <aside className={styles.projectContact}>

                <div className={styles.contactItem} >
                    <img src="/whatsapp.svg" alt="imagem de whatsapp" id={styles.whatsappBottom} className={styles.contactIcon} />

                    <div className={styles.contactDetails}>
                        <h3 className={styles.contactTitle}>My phone</h3>
                        <p className={styles.contactText}>I'm available for a voice chat, let's about creativity together?</p>
                        <p className={styles.contactAction}>call Now</p>
                    </div>

                </div>
                <div className={styles.contactItem}>


                    <img src="/email.svg" alt="imagem do email" id={styles.emailBottom}   className={styles.contactIcon} />

                    <div className={styles.contactDetails}>
                        <h3 className={styles.contactTitle}>My email</h3>
                        <p className={styles.contactText}>Send me an email reporting feedbacks,suggestions and ideas </p>
                        <p className={styles.contactAction}>Send email now</p>
                    </div>
 

                </div>
                <div className={styles.contactItem}>
                    <img src="/linkedin.svg" alt="imagem linkedin" id={styles.linkedinBottom} className={styles.contactIcon}/>
                    <div className={styles.contactDetails}>
                        <h3 className={styles.contactTitle}>My LinkdIn</h3>
                        <p className={styles.contactText}>We can create more constant interactions as well as a sharing network</p>
                        <p className={styles.contactAction}>Go to telegram Now</p>
                    </div>


                </div>
            </aside>
        </section>
    )
}