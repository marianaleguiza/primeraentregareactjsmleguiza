import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, category, description, price, stock, img }) => {
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
        <ItemCount
            initial={1}
            stock={stock}
            onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
        </footer>
        </article>
    </>
    );
};

export default ItemDetail;
