import './Cart.css'
import {useContext} from "react";
import {CartContext} from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { useCart } from "../../context/CartContext"

const Cart = () => {
    const { cart, clearCart, totalquantity, total} = useContext(CartContext)

    if(totalquantity === 0) {
        return(
            <div>
                <h1> No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

        return(
            <div>
                { cart.map(p=><cartItem key={p.id} {...p}/>)}
                <h3>Total: ${total}</h3>
                <button onClick={()=> clearCart()} className='Button'>Limpiar Carrito</button>
                <Link to='/checkout' className='Option'>Checkout</Link>
            </div>
        )
}

export default Cart