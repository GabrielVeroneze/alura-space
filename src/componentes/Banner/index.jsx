import styles from './Banner.module.sass'

export default function Banner() {
    return (
        <section className={styles.banner}>
            <h1 className={styles.banner__titulo}>A galeria mais completa de fotos do espaço!</h1>
        </section>
    )
}
