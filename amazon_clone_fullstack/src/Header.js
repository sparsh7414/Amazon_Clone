import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import {useStateValue } from "./StateProvider";
import {auth } from "./firebase";

function Header() {
    const [{basket,user},dispatch]=useStateValue();
    const handleAuhtentication = () => {
        if(user)
        {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
            <img className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>
            <div class="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className="header__nav">
                <Link to="/login">
                    <div onClick={handleAuhtentication} className="header_option">
                        <span className="header__optionLineOne">Hello, User</span>
                        <span className="header__optionLineTwo">{user?'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout"> 
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header 