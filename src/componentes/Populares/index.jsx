import fotosPopulares from './fotos-populares.json'
import styles from './Populares.module.sass'

export default function Populares() {
    return (
        <aside className={styles.populares}>
            <h2 className={styles.populares__titulo}>Populares</h2>
            <ul className={styles.populares__lista}>
                {fotosPopulares.map(dados => (
                    <li className={styles.populares__item} key={dados.id}>
                        <img
                            className={styles.populares__imagem}
                            src={dados.path}
                            alt={dados.alt}
                        />
                    </li>
                ))}
            </ul>
            <button className={styles.populares__botao}>Ver mais</button>
        </aside>
    )
}
