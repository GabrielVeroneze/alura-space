import styles from './Tags.module.sass'

export default function Tags() {
    return (
        <div className={styles.tags}>
            <p className={styles.tags__texto}>Busque por tags:</p>
            <ul className={styles.tags__lista}>
                <li className={`${styles.tags__item} ${styles["tags__item--ativo"]}`}>Estrelas</li>
                <li className={styles.tags__item}>Galáxias</li>
                <li className={styles.tags__item}>Lua</li>
                <li className={styles.tags__item}>Planetas</li>
            </ul>
        </div>
    )
}
