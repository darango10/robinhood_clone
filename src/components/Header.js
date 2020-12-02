import React from 'react';
import '../styles/header.css'
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className='header'>
            {/*logo*/}
            <div className="header__logo">
                <img
                    src="https://assets.themuse.com/uploaded/companies/11964/small_logo.png?v=150e72767c5cf48382f5e2716ebc16913eed57ac57dfc10cac648ad8c221c1b7"
                    alt="logo" width={150}/>
            </div>
            {/*search*/}
            <div className="header__search">
                <input type="text" placeholder={'Search'}/>
                <SearchIcon/>
            </div>

            <div className="header__menuItems">
                <a href="">Free Stocks</a>
                <a href="">Portfolio</a>
                <a href="">Cash</a>
                <a href="">Messages</a>
                <a href="">Account</a>
            </div>
            {/*menu*/}
        </div>
    );
};

export default Header;
