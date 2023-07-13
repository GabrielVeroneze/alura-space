import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";
import Populares from "../../componentes/Populares";
import Rodape from "../../componentes/Rodape";
import styles from './PaginaInicial.module.sass'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main className={styles.principal}>
                <Menu />
                <Banner />
                <Galeria />
                <Populares />
            </main>
            <Rodape />
        </>
    )
}