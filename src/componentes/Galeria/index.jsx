import Tags from "../Tags";
import styles from './Galeria.module.sass'

export default function Galeria() {
    return (
        <section className={styles.galeria}>
            <h2 className={styles.galeria__titulo}>Navegue pela galeria</h2>
            <Tags />
        </section>
    )
}
