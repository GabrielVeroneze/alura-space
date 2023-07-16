import { useState } from 'react'
import styles from './Tags.module.sass'

export default function Tags({ tags, filtraFotos, todasFotos }) {
    const [tagAtiva, setTagAtiva] = useState('Todas')

    const handleClick = (tag) => {
        setTagAtiva(tag)
        if (tag === 'Todas') {
            todasFotos()
        } else {
            filtraFotos(tag)
        }
    }

    return (
        <div className={styles.tags}>
            <p className={styles.tags__texto}>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag, index) => (
                    <li
                        key={index}
                        className={
                            tag === tagAtiva
                                ? styles['tags__item--ativo']
                                : styles['tags__item']
                        }
                        onClick={() => handleClick(tag)}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}
