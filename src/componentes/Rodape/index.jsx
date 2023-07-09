import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import styles from './Rodape.module.sass'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__sociais}>
                <a href="/">
                    <img className={styles.rodape__icone} src={facebook} alt="Ícone do Facebook" />
                </a>
                <a href="/">
                    <img className={styles.rodape__icone} src={twitter} alt="Ícone do Twitter" />
                </a>
                <a href="/">
                    <img className={styles.rodape__icone} src={instagram} alt="Ícone do Instagram" />
                </a>
            </div>
            <p className={styles.rodape__creditos}>Desenvolvido por <a href="https://github.com/GabrielVeroneze" target="_blank" rel="noreferrer">Gabriel</a>.</p>
        </footer>
    )
}
