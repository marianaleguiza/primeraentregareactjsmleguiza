import { useState, useEffect, memo } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig.js'

import { getDocs, collection, query, where, limit } from 'firebase/firestore'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = !categoryId 
            ? collection(db, 'productos')
            : query(collection(db, 'productos'), where('categoryId', '==', categoryId))

        getDocs(productsRef)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <main onClick={() => console.log('itemlistcontainer')}>
            <h1>{greeting}</h1>
            {products.length > 0 ? <ItemListMemo products={products}/> : <h1>No hay productos disponibles</h1> }
        </main>
    )
}

export default ItemListContainer