import Table from "./Table/Table.jsx";
import styles from './TablePage.module.css';
import WidgetTable from "./WidgetTable/WidgetTable.jsx";
import {useState} from "react";

const TablePage = ({data}) => {
    const [search, setSearch] = useState('');

    const handleChangeSearch = (value) => {
        setSearch(value)
    }

    return (
        <div className={styles.tablePage}>
            <h1>Общая база сотрудников</h1>
            <WidgetTable data={data} handleChangeSearch={handleChangeSearch}/>
            <Table data={data} search={search}/>
        </div>
    );
};

export default TablePage;