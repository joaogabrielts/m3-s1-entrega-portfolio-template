import styles from './styles.module.css'

export const TechaCard = ({ projectsList }) => {




    return (
        <>
            {projectsList.map(empLoyee => {
                return (
                    < div key={empLoyee.name} className={styles.techCard}>


                        <h1>Quickstart </h1>
                        <div className={styles.linguagens}>
                            <p>linguagens</p>
                            <p>Javacript</p>
                        </div>
                        <p>{empLoyee.description}</p>
                        <div className={styles.icone__container}>
                            <div className={styles.icone__github}>
                                <img src="/src/assets/github-icon.png" alt=""  className={styles.iconImage}/>
                                <p>Github Code</p>
                            </div>

                            <div className={styles.icone__share}>
                                <img src="/src/assets/share.png" alt=""  className={styles.iconImage}/>
                                <p>Aplicação</p>
                            </div>


                        </div>
                    </div>



                )
            })}
        </>

    )
}
