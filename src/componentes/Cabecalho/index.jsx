import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.sass'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__campo}>
                <input className={styles.cabecalho__pesquisa} type="text" placeholder="O você procura?" />
                <img className={styles.cabecalho__lupa} src={search} alt="Ícone de lupa" />
            </div>
        </header>
    )
}