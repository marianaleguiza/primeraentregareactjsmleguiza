import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

const ItemDetailContainer= () => {
    const [product, setProduct] = useState(null)

    const {productId} = useParams();

    useEffect(()=> {
        getProductById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [productId])

    return(
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer