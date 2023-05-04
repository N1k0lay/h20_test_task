import left from '../../assets/icons/left.svg'
import right from '../../assets/icons/right.svg'
import styles from './TopMenu.module.scss'
import avatarImg from '../../assets/img/avatar.png'
import downIcon from '../../assets/icons/down.svg'
import {Link, useParams} from "react-router-dom";



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


const TopMenu = () => {

    const params = useParams();
    console.log(params)
    return (
        <div className={styles.topMenu}>
            <div className={styles.menuWrapper}>
                <div className={styles.controlButtons}>
                    <button className={styles.btn}><img className={styles.left} src={left} alt="налево"/></button>
                    <button className={styles.btn}><img className={styles.right} src={right} alt="направо"/></button>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        {menu && menu.map(item => <li key={item.name}><Link className={styles.active} to={item.link}>{item.name}</Link></li>)}
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