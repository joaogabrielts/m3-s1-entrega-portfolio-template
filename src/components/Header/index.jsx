
import styles from "./styles.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Anna</h1>
      <ul className={styles.header__nav}>
        <li className={styles.header__navitem}>
          <button className={styles.header__navbuttonhome}>Home</button>
        </li>
        <li>
          <button className={styles.header__navbutton}>Projects</button>
        </li>
        <li>
          <button className={styles.header__navbutton}>Contatos</button>
        </li>
        <li>
          <button className={styles.header__navbutton}>Midias Digitais</button>
        </li>
      </ul>
    </header>
  )
}