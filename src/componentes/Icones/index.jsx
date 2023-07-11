import styles from './Icones.module.sass'

export default function Icones({ ativo, path, alt, link }) {
    return (
        <li>
            {ativo ? (
                <a className={`${styles.icone} ${styles["icone--ativo"]}`} href="/">
                    <img
                        className={styles.icone__imagem}
                        src={path}
                        alt={alt}
                    />
                    <p>{link}</p>
                </a>
            ) : (
                <a className={styles.icone} href="/">
                    <img
                        className={styles.icone__imagem}
                        src={path}
                        alt={alt}
                    />
                    <p>{link}</p>
                </a>
            )}
        </li>
    )
}
