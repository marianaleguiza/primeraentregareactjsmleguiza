import CartWidget from "../CartWidget/CartWidget"
import Logo from "../logo/logo"
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <div>
            <Logo />

            <h2 style={{fontSize: 30}}>Freestyle Clothes</h2>
            <button className={classes.btn}>Surf</button>
            <button className={classes.btn}>Sky</button>
            <button className={classes.btn}>Urban</button>
            <CartWidget />
        </div>
    )
}

export default NavBar