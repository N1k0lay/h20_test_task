import styles from './layout.module.scss'
import {Outlet} from "react-router-dom";
import NavBarLeft from "../components/NavBar/NavBar.jsx";
import TopMenu from "../components/TopMenu/TopMenu.jsx";


const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.navbar}>
                <NavBarLeft className={styles.nav}/>
            </header>
            <main className={styles.main}>
                <section className={styles.topMenu}>
                    <TopMenu />
                </section>
                <section className={styles.mainContent}>
                    <Outlet/>
                </section>
            </main>
        </div>
    );
};

export default Layout;