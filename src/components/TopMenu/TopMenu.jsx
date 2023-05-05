import left from '../../assets/icons/left.svg'
import right from '../../assets/icons/right.svg'
import styles from './TopMenu.module.scss'
import avatarImg from '../../assets/img/avatar.png'
import downIcon from '../../assets/icons/down.svg'
import {Link, useLocation} from "react-router-dom";

const menu = [
    {
        name: 'База анкет сотрудников',
        link: '/table'
    },
    {
        name: 'Общая база сотрудников',
        link: '/allbase'
    },
    {
        name: 'База сотрудников',
        link: '/base'
    },
    {
        name: 'Календарь сотрудников',
        link: '/calendar'
    }
]

function scrollToItem(itemId) {
    const container = document.querySelector('#nav');
    const item = document.getElementById(itemId);
    if (container && item) {
        item.scrollIntoView({block: "center", behavior: "smooth"});
    }
}

const TopMenu = () => {

    const location = useLocation();
    const currentItemIndex = menu.findIndex(item => item.link.includes(location.pathname)),
        prevLink= currentItemIndex <= 0 ? menu[menu.length-1].link : menu[currentItemIndex-1].link,
        nextLink = currentItemIndex < menu.length - 1 ? menu[currentItemIndex+1].link : menu[0].link;

    return (
        <div className={styles.topMenu}>
            <div className={styles.menuWrapper}>
                <div className={styles.controlButtons}>
                    <Link to={prevLink} className={styles.btn} onClick={() => scrollToItem(prevLink)}><img className={styles.left} src={left} alt="налево"/></Link>
                    <Link to={nextLink} className={styles.btn} onClick={() => scrollToItem(nextLink)}><img className={styles.right} src={right} alt="направо"/></Link>
                </div>
                <nav id={'nav'} className={styles.nav}>
                    <ul className={styles.menu}>
                        {menu && menu.map(item => <li key={item.name} id={item.link}><Link className={location.pathname === item.link ? styles.active : null} to={item.link}>{item.name}</Link></li>)}
                    </ul>
                </nav>
            </div>
            <div className={styles.profile}>
                <img src={avatarImg} className={styles.avatar} alt="avatar"/>
                <div className={styles.profileInfo}>
                    <span className={styles.profileName}>Kristina 🐰</span>
                    <span className={styles.profileDesc}>менеджер продаж</span>
                </div>
                <img src={downIcon} className={styles.icon} alt="open profile settings "/>
            </div>
        </div>
    );
};

export default TopMenu;