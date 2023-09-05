import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { getProducts, getProductByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    
        const [products, setProducts] = useState ([])
        const {categoryId} = useParams()
        useEffect(()=>{
            const asyncFunction = categoryId ? getProductByCategory : getProducts
            
            asyncFunction(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
        }, [categoryId])
    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/> 
            <ItemCount initial={1} stock={30} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)} />  
        </div>
    )
}

export default ItemListContainer