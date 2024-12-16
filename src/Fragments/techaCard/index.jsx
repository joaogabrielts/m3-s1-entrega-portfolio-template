import styles from "./styles.module.css"

export const TechaCard = ({ projectsList }) => {

    return (
        <>
            {projectsList.map(empLoyee => {
                return (
                    < div key={empLoyee.name} className={styles.techCard}>


                        <h1 className={styles.techCardTitle}>Quickstart </h1>
                        <div className={styles.linguagens}>
                            <p>linguagens</p>
                            <p className={styles.buttonLinguagens}>Javacript</p>
                        </div>
                        <p>{empLoyee.description}</p>
                        <div className={styles.icone__container}>
                            <div className={styles.icone__github}>
                                <img src="/github.svg" alt="icon github"  className={styles.iconImage}/>
                                <p>Github Code</p>
                            </div>

                            <div className={styles.icone__share}>
                                <img src="/share.png" alt="icon share"  className={styles.iconImage}/>
                                <p>Aplicação</p>
                            </div>


                        </div>
                    </div>



                )
            })}
        </>

    )
}
