import React from 'react'
import favorito from './favorito.png'
import open from './open.png'

export default function Cards({items, styles}) {
    return (
        <ul className={styles.galeria__cards}>
            {items.map((item) => {
                return (
                    <li key={item.id} className={styles.galeria__card}>
                        <img
                            className={styles.galeria__imagem}
                            src={item.imagem}
                            alt={item.titulo}
                        />
                        <p className={styles.galeria__descricao}></p>
                        <div>
                            <p>{item.creditos}</p>
                            <span>
                                <img src={favorito} alt="icone do coração de curtir" />
                                <img src={open} alt="icone de abrir modal" />

                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
