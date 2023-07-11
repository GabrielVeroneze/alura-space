import favorito from './favorito.svg'
import abrir from './abrir.svg'
import styles from './Cards.module.sass'

export default function Cards({ imagem, titulo, creditos }) {
    return (
        <li className={styles.card}>
            <img 
                className={styles.card__imagem}
                src={imagem}
                alt={titulo}
            />
            <div className={styles.card__conteudo}>
                <h3 className={styles.card__titulo}>{titulo}</h3>
                <p className={styles.card__creditos}>{creditos}</p>
                <span className={styles.card__icones}>
                    <img src={favorito} alt="Ícone de coração de curtir" />
                    <img src={abrir} alt="Ícone de abrir modal" />
                </span>
            </div>
        </li>
    )
}