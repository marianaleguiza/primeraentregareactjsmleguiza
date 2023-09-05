import './Item.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    const navigate = useNavigate()
    return (
        <>
            <article className='CardItem'>
                <header className='Header'>
                <h2 className='ItemHeader'>

                </h2>
                </header>
        
                <picture>
                <img src={img} alt={name} className='ItemImg'/>
                </picture>
                <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock Disponible: {stock}
                </p>
                </section>
                <footer className='ItemFooter'>
                    <button onClick={() => navigate(`/detail/${id}`)}>Detalle</button>
                </footer>
            </article>
        </>
    )
}

export default Item