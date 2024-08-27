

import styles from "./styles.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src="/user.png" alt="imagem user" className={styles.footerLogo}/>
            <div className={styles.footerContent}>
                <h3 className={styles.footerTitle}>Thank you!</h3>
                <p className={styles.footerText}>Follow me on my social networks and let's talk </p>
            </div>
            <ul className={styles.socialLinks}>
                <li className={styles.socialItem}>
                    <button  className={styles.socialButton} id={styles.facebookBottom}>
                        <img src="/icon-facebook.svg" alt="icon whatsapp"  className={styles.socialIcon}/>
                    </button>
                </li>
                <li className={styles.socialItem}>
                    <button  className={styles.socialButton} id={styles.instagramBottom}>
                        <img src="/icon-instagram.svg" alt="icon email" className={styles.socialIcon}/>
                    </button>
                </li>
                <li className={styles.socialItem} >
                    <button  className={styles.socialButton} id={styles.linkdinBottom}>
                        <img src="/icon.svg" alt="icon linkdin" className={styles.socialIcon}/>
                    </button>
                </li>
            </ul>


        </footer>
    )
}