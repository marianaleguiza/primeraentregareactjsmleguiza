import CartWidget from "../CartWidget/CartWidget";
import Logo from "../logo/logo";
import classes from './NavBar.module.css';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.navBar}>
            <button onClick={() => navigate('/')}>
                <Logo />
                </button>
            <h1 style={{ fontSize: 50 }}>Freestyle Clothes</h1>
            <div className={classes.button}>
                <button onClick={() => navigate('/category/surf')}>Surf</button>
                <button onClick={() => navigate('/category/snow')}>Snow</button>
                <button onClick={() => navigate('/category/urban')}>Urban</button>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;

