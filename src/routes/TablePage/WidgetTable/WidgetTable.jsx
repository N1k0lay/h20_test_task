import styles from './WidgetTable.module.css'

const WidgetTable = ({data}) => {
    return (
        <div className={styles.widgetTable}>
            <div className={styles.left}>
                <div className={styles.count}><span className={styles.countNumber}>{data && data.length}</span> контактов</div>
                <input className={styles.searchInput} type="search" name="table-search" placeholder={"Поиск"}/>
            </div>
            <button className={styles.buttonSearch}>Режим редактирования</button>
        </div>
    );
};

export default WidgetTable;