import React from 'react';
import logoH2O from '../../assets/logo.svg';
import PropTypes from "prop-types";
import icon1 from '../../assets/icons/H3.svg'
import icon2 from '../../assets/icons/H3-1.svg'
import icon3 from '../../assets/icons/H3-2.svg'
import icon4 from '../../assets/icons/H3-3.svg'
import icon5 from '../../assets/icons/H3-4.svg'
import icon6 from '../../assets/icons/H3-5.svg'
import icon7 from '../../assets/icons/H3-6.svg'
import styles from './NavBar.module.scss'
import cn from 'classnames';


const NavBar = ({className}) => {
    return (
        <div className={cn(className, styles.navbar)}>
            <img className={styles.logo} src={logoH2O} alt="logo h2o" width={64}/>
            <nav className={styles.menu}>
                <ul>
                    <li><a href="/"><img src={icon7} alt="icon7" width={33}/></a></li>
                    <li><a href="/"><img src={icon1} alt="icon1" width={33}/></a></li>
                    <li><a href="/"><img src={icon2} alt="icon2" width={33}/></a></li>
                    <li><a href="/"><img src={icon3} alt="icon3" width={33}/></a></li>
                    <li><a href="/"><img src={icon4} alt="icon4" width={33}/></a></li>
                    <li><a href="/"><img src={icon5} alt="icon5" width={33}/></a></li>
                    <li><a href="/"><img src={icon6} alt="icon6" width={33}/></a></li>
                </ul>
            </nav>
        </div>
    );
};

NavBar.propTypes = {
    className: PropTypes.string.isRequired,
};

export default NavBar;