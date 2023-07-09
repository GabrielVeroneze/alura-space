import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Rodape from "../../componentes/Rodape";
import styles from './PaginaInicial.module.sass'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main className={styles.principal}>
                <Menu />
                <Banner />
            </main>
            <Rodape />
        </>
    )
}