import { useState } from "react";
import Cards from "../Cards";
import Tags from "../Tags";
import fotos from './fotos.json'
import styles from './Galeria.module.sass'

export default function Galeria() {

    const [itens, setItens] = useState(fotos)
    // Remove elementos duplicados do array
    const tags = [...new Set(fotos.map(valor => valor.tag)), 'Todas']

    const filtraFotos = (tag) => {
        setItens(
            fotos.filter(foto => foto.tag === tag)         
        )
    }

    const todasFotos = () => {
        setItens(fotos)
    }

    return (
        <section className={styles.galeria}>
            <h2 className={styles.galeria__titulo}>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} todasFotos={todasFotos} />
            <ul className={styles.galeria__lista}>
                {itens.map(dados => (
                    <Cards key={dados.id} {...dados} />
                ))}
            </ul>
        </section>
    )
}
