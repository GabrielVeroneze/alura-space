import Icones from '../Icones'
import iconesDados from './icones.json'
import styles from './Menu.module.sass'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {iconesDados.map(dados => <Icones key={dados.id} {...dados} />)}
            </ul>
        </nav>
    )
}