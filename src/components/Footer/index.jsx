

import styles from './styles.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src="./src/assets/user.png" alt="" className={styles.footerLogo}/>
            <div className={styles.footerContent}>
                <h3 className={styles.footerTitle}>Thank you!</h3>
                <p className={styles.footerText}>Follow me on my social networks and let's talk </p>
            </div>
            <ul className={styles.socialLinks}>
                <li className={styles.socialItem}>
                    <button  className={styles.socialButton}>
                        <img src="/src/assets/whatsapp-icon.png" alt="" className={styles.socialIcon}/>
                    </button>
                </li>
                <li className={styles.socialItem}>
                    <button  className={styles.socialButton}>
                        <img src="/src/assets/linkedin-icon.png" alt="" className={styles.socialIcon}/>
                    </button>
                </li>
                <li className={styles.socialItem}>
                    <button  className={styles.socialButton}>
                        <img src="/src/assets/whatsapp-icon.png" alt="" className={styles.socialIcon}/>
                    </button>
                </li>
            </ul>


        </footer>
    )
}