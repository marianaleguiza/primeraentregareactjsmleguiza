import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, category, description, price, stock, img }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            name,
            price,
            img,
        };

        addItem(item, quantity);
    };

    return (
        <>
            <article className='CardItem'>
                <header className='Header'>
                    <h2 className='ItemHeader'>{name}</h2>
                </header>
                <picture>
                    <img src={img} alt={name} className='ItemImg' />
                </picture>
                <section>
                    <p className='Info'>Precio: ${price}</p>
                    <p className='Info'>Detalles: {description}</p>
                </section>
                <footer className='ItemFooter'>
                    {quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>
                            Terminar Compra
                        </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                </footer>
            </article>
        </>
    );
};

export default ItemDetail;
