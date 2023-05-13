import styles from './table.module.css';
import {useEffect, useState} from "react";
import arrowIcon from '../../../assets/icons/arrow.svg';
import arrowRIcon from '../../../assets/icons/arrowR.svg';
import cn from 'classnames';


//Поправить
const TdEdit = ({value, editMode, type}) => {
    const [editValue, setEditValue] = useState(value)

    if (editMode) {
        return (
            <input type={type} value={editValue} onChange={(event) => setEditValue(event.target.value)}/>
        )
    } else {
        return <>{value}</>
    }

}

const Table = ({data, search, editMode}) => {

    const [filteredData, setFilteredData] = useState(data);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedPage, setSelectedPage] = useState(1);
    const [pageArr, setPageArr] = useState([1]);

    //Поиск по firstName, lastName
    useEffect(() => {
        search ? setFilteredData(data.filter(person => person.firstName.toLowerCase().includes(search.toLowerCase()) || person.lastName.toLowerCase().includes(search.toLowerCase()))) : setFilteredData(data)
    }, [search, data])

    //Заполнение массива для списка страниц
    useEffect(()=> {
        let arr = [];
        for(let i = 0; i < filteredData.length / itemsPerPage; i++) {
            arr.push(i+1);
        }
        setPageArr(arr);
    }, [selectedPage, itemsPerPage, filteredData.length])

    useEffect(() => {
        if(selectedPage*itemsPerPage > filteredData.length) {
            setSelectedPage(filteredData.length/itemsPerPage)
        }
    }, [filteredData.length, itemsPerPage, selectedPage])

    return (
        <div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th rowSpan={2}>№</th>
                    <th rowSpan={2}>Имя сотрудника</th>
                    <th colSpan={6}>Основная информация</th>
                </tr>
                <tr>
                    <th>ID номер</th>
                    <th>Телефон</th>
                    <th>Пол</th>
                    <th>Дата рождения</th>
                    <th>Город</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.length > 0 && filteredData.map((p) => {
                    if (p.id > selectedPage * itemsPerPage - itemsPerPage && p.id < selectedPage * itemsPerPage + 1) {
                        return <tr key={p.id}>
                            <td>{p.id}</td>
                            <td><TdEdit value={p.firstName} editMode={editMode}/> <TdEdit value={p.lastName}
                                                                                          editMode={editMode}/></td>
                            <td><TdEdit value={p.base.id} editMode={editMode} type={'number'}/></td>
                            <td><TdEdit value={p.base.phone} editMode={editMode} type={'tel'}/></td>
                            <td><TdEdit value={p.base.gender} editMode={editMode} type={'text'}/></td>
                            <td><TdEdit value={p.base.birthdate.toLocaleDateString()} editMode={editMode}
                                        type={'date'}/></td>
                            <td><TdEdit value={p.base.city} editMode={editMode} type={'text'}/></td>
                        </tr>
                    }
                })}
                </tbody>
            </table>
            <div className={styles.tablePagination}>
                <div className={styles.paginationInfo}>показано {selectedPage * itemsPerPage - itemsPerPage + 1} - {selectedPage * itemsPerPage < filteredData.length ? selectedPage * itemsPerPage : filteredData.length} из {filteredData.length} результатов</div>
                <div className={styles.pagination}>
                    <button className={cn(styles.arrowIcon)}><img src={arrowIcon} onClick={() => setSelectedPage(selectedPage - 1 > 0 ? selectedPage - 1 : 1)} alt="arrow left"/></button>
                    <div className={styles.pagesButtons}>
                    {pageArr.map((n => {
                        return <button
                            className={cn(styles.pageButton, selectedPage === n ? styles.active : null)}
                            key={n} onClick={() => setSelectedPage(n)}>{n}</button>
                    }))}
                    </div>
                    <button className={cn(styles.arrowIcon)}><img src={arrowRIcon} onClick={() => setSelectedPage(selectedPage + 1 < pageArr.length ? selectedPage + 1  : pageArr.length)} alt="arrow right"/>
                    </button>
                </div>
                <div className={styles.paginationInfo}>
                    <label htmlFor='items-per-page-select'>Отображать на странице</label>
                    <select className={styles.selectPagination} value={itemsPerPage} onChange={(event) => setItemsPerPage(event.target.value)}
                            name="items-per-page" id="items-per-page-select">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
        </div>
    );

};

export default Table;