import Table from "./Table/Table.jsx";
import styles from './TablePage.module.css';
import {makeData} from "../../fakeData.js";
import WidgetTable from "./WidgetTable/WidgetTable.jsx";
const TablePage = () => {

    const data = makeData(20);

    return (
        <div className={styles.tablePage}>
            <h1>Общая база сотрудников</h1>
            <WidgetTable data={data} />
            <Table data={data}/>
        </div>
    );
};

export default TablePage;