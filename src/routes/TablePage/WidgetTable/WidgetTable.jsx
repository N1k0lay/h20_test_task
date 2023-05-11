import styles from './WidgetTable.module.css'
import searchIcon from '../../../assets/icons/search.svg';
import {useEffect, useState} from "react";


const searchStyle = {
    background: `#F8F8F8 url(${searchIcon}) no-repeat 22px 16px`,
}

const WidgetTable = ({data, handleChangeSearch}) => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        handleChangeSearch(search)
    }, [handleChangeSearch, search])

    return (
        <div className={styles.widgetTable}>
            <div className={styles.left}>
                <div className={styles.count}><span className={styles.countNumber}>{data && data.length}</span> контактов</div>
                <input value={search} onChange={(event) => {setSearch(event.target.value)}} style={searchStyle} className={styles.searchInput} type="search" name="table-search" placeholder={"Поиск"}/>
            </div>
            <button className={styles.buttonSearch}>Режим редактирования</button>
        </div>
    );
};

export default WidgetTable;