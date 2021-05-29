import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StatePovider'
import {auth} from './firebase'

function Header(){
// eslint-disable-next-line
    const [{basket,loggedinuser}, dispatch] = useStateValue();

    //console.log('mon panier',basket)
    const logoutUser = () => {
        if(loggedinuser){
            auth.signOut();
        }
    }

    return(
        <nav className="header">
            <img className="header__logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /> 
            <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">

                <Link to={!user && "/login"} className="header__link">
                    <div onClick={logoutUser} className="header__option">
                        <span className="header__optionLine1">Bonjour, {user?.email}</span>
                        <span className="header__optionLine2">{user ? 'Déconnectez-vous' : 'Connectez-vous'}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Retours </span>
                        <span className="header__optionLine2">Commandes </span>
                    </div>
                </Link>

            </div>
            <Link to="/checkout" className ="header__link">
            <div className="header__optionBasket">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <span className="header__optionLine2 header__productCount">{basket?.length}</span>
            </div>
            </Link>

        </nav>
    )

}

export default Header