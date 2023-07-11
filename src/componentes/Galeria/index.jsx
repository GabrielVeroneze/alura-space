import Cards from "../Cards";
import Tags from "../Tags";
import fotos from './fotos.json'
import styles from './Galeria.module.sass'

export default function Galeria() {
    return (
        <section className={styles.galeria}>
            <h2 className={styles.galeria__titulo}>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.galeria__lista}>
                {fotos.map(dados => (
                    <Cards key={dados.id} {...dados} />
                ))}
            </ul>
        </section>
    )
}
