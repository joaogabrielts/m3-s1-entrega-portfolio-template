import { TechaCard } from "../../Fragments/techaCard"
import { projects } from "../../data/projects"
import styles from "./styles.module.css"


export const TechSection = () => {




    return (
        <>

            <section className={styles.techSection}>

                <div className={styles.techSection__container}>
                    <h1 className={styles.techSection__title}>My projects</h1>
                    <p className={styles.techSection__description}>Projects created at <span className={styles.techSection__titlehighlight}>Kenzie Academy</span></p>

                </div>
                     
                     <div className={styles.div}>
                      <TechaCard projectsList={projects} />  
                     </div>
                
            </section>

        </>
    )
}