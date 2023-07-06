import home from '../../assets/icones/home.svg'
import curtidas from '../../assets/icones/mais-curtidas.svg'
import vistas from '../../assets/icones/mais-vistas.svg'
import novas from '../../assets/icones/novas.svg'
import surpreenda from '../../assets/icones/surpreenda-me.svg'
import styles from './Menu.module.sass'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li>
                    <a className={`${styles.menu__link} ${styles["menu__link--ativo"]}`} href="/">
                        <img className={styles.menu__icone} src={home} alt="Ícone de Início" />
                        <p>Início</p>
                    </a>
                </li>
                <li>
                    <a className={styles.menu__link} href="/">
                        <img className={styles.menu__icone} src={curtidas} alt="Ícone de Mais vistas" />
                        <p>Mais vistas</p>
                    </a>
                </li>
                <li>
                    <a className={styles.menu__link} href="/">
                        <img className={styles.menu__icone} src={vistas} alt="Ícone de Mais curtidas" />
                        <p>Mais curtidas</p>
                    </a>
                </li>
                <li>
                    <a className={styles.menu__link} href="/">
                        <img className={styles.menu__icone} src={novas} alt="Ícone de Novas" />
                        <p>Novas</p>
                    </a>
                </li>
                <li>
                    <a className={styles.menu__link} href="/">
                        <img className={styles.menu__icone} src={surpreenda} alt="Ícone de Surpreenda-me" />
                        <p>Surpreenda-me</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}