import Table from "./Table/Table.jsx";
import styles from './TablePage.module.css';
import WidgetTable from "./WidgetTable/WidgetTable.jsx";
import {useState} from "react";

const TablePage = ({data}) => {
    const [search, setSearch] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleChangeSearch = (value) => {
        setSearch(value)
    }

    const handleChangeEditMode = (value) => {
        setEditMode(value)
    }

    return (
        <div className={styles.tablePage}>
            <h1>Общая база сотрудников</h1>
            <WidgetTable data={data} search={search} handleChangeSearch={handleChangeSearch} editMode={editMode} handleChangeEditMode={handleChangeEditMode}/>
            <Table data={data} search={search} editMode={editMode}/>
        </div>
    );
};

export default TablePage;