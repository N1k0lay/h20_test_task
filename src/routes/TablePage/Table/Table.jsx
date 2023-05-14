import styles from './table.module.css';
import {useEffect, useState} from "react";
import arrowIcon from '../../../assets/icons/arrow.svg';
import arrowRIcon from '../../../assets/icons/arrowR.svg';
import cn from 'classnames';
import iconDown from '../../../assets/icons/down.svg';

//Поправить, редактируется только имя, фамилия
const TdEdit = ({id, value, editMode, name, type, handleChangeData}) => {
    const [editValue, setEditValue] = useState(value)
    if (editMode) {
        return (
            <input type={type} value={editValue} onChange={(event) => {
                setEditValue(event.target.value);
                handleChangeData(id, name, event.target.value)

            }}/>
        )
    } else {
        return value
    }
}

const Table = ({data, search, editMode}) => {

    const [filteredData, setFilteredData] = useState(data);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedPage, setSelectedPage] = useState(1);
    const [pageArr, setPageArr] = useState([1]);
    const [viewData, setViewData] = useState([]);
    const [sortDirection, setSortDirection] = useState(true);

    //Сортировка данных
    const sortData = (key) => {
        let dataS;
        sortDirection ? dataS = [...filteredData].sort((a, b) => a[key] > b[key] ? 1 : -1) : dataS = [...filteredData].sort((a, b) => a[key] < b[key] ? 1 : -1);
        setSortDirection(!sortDirection);
        setFilteredData(dataS);
    }

    //Поиск по firstName, lastName
    useEffect(() => {
        search ? setFilteredData(data.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))) : setFilteredData(data);
        setSelectedPage(1);
    }, [search, data])

    //Заполнение массива для списка страниц
    useEffect(()=> {
        let arr = [];
        for(let i = 0; i < filteredData.length / itemsPerPage; i++) {
            arr.push(i+1);
        }
        setPageArr(arr);
    }, [selectedPage, itemsPerPage, filteredData])

    //Если изменено количество записей на странице и записей не хватает, то включается последняя страница
    useEffect(() => {
        if(selectedPage*itemsPerPage > filteredData.length) {
            setSelectedPage(filteredData.length/itemsPerPage)
        }
    }, [filteredData.length, itemsPerPage, selectedPage])


    useEffect(() => {
        console.log('newArr')
        let newArr = [];
        for(let i = (selectedPage-1)*itemsPerPage; i < (selectedPage)*itemsPerPage; i++) {
            if(filteredData[i]) {
                newArr.push(filteredData[i])
            }
        }
        setViewData(newArr)
    }, [filteredData, itemsPerPage, selectedPage, setViewData])

    //Функция изменения данных при редактировании
    const handleChangeData = (id, name, value) => {
        let dataEdited = filteredData;
        let arrKey = name.split('.');
        dataEdited[id-1][arrKey] = value;
        setFilteredData(dataEdited)
    }

    return (
        <div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th rowSpan={2}><button onClick={() => sortData('id')}>№<img className={cn({
                        [styles.reverseSortIcon]: !sortDirection
                    })} src={iconDown} alt="sort icon"/></button></th>
                    <th rowSpan={2} ><button onClick={() => sortData('name')}>Имя сотрудника <img className={cn({
                        [styles.reverseSortIcon]: !sortDirection
                    })} src={iconDown} alt="sort icon"/></button></th>
                    <th colSpan={6}>Основная информация</th>
                </tr>
                <tr>
                    <th>ID номер</th>
                    <th>Телефон</th>
                    <th><button onClick={() => sortData('base_gender')}>Пол<img className={cn({
                        [styles.reverseSortIcon]: !sortDirection
                    })} src={iconDown} alt="sort icon"/></button></th>
                    <th>Дата рождения</th>
                    <th><button onClick={() => sortData('base_city')}>Город<img className={cn({
                        [styles.reverseSortIcon]: !sortDirection
                    })} src={iconDown} alt="sort icon"/></button></th>
                </tr>
                </thead>
                <tbody>
                {viewData.length > 0 && viewData.map((p) => {
                    return <tr key={p.id}>
                        <td>{p.id}</td>
                        <td><TdEdit id={p.id} value={p.name} editMode={editMode} handleChangeData={handleChangeData} name={'name'}/></td>
                        <td><TdEdit value={p.base_id} editMode={editMode} type={'number'} id={p.id}  handleChangeData={handleChangeData} name={'base_id'}/></td>
                        <td><TdEdit value={p.base_phone} editMode={editMode} type={'tel'} id={p.id}  handleChangeData={handleChangeData} name={'base_phone'}/></td>
                        <td><TdEdit value={p.base_gender} editMode={editMode} type={'text'}/></td>
                        <td><TdEdit value={p.base_birthdate.toLocaleDateString()} editMode={editMode}
                                    type={'date'}/></td>
                        <td><TdEdit value={p.base_city} editMode={editMode} type={'text'}/></td>
                    </tr>
                })}
                </tbody>
            </table>
            <div className={styles.tablePagination}>
                <div className={styles.paginationInfo}>показано {selectedPage * itemsPerPage - itemsPerPage + 1} - {selectedPage * itemsPerPage < filteredData.length ? selectedPage * itemsPerPage : filteredData.length} из {filteredData.length} результатов</div>
                <div className={styles.pagination}>
                    <button className={cn(styles.arrowIcon, {
                        [styles.buttonDisabled] : selectedPage === 1,
                    })}><img src={arrowIcon} onClick={() => setSelectedPage(selectedPage - 1 > 0 ? selectedPage - 1 : 1)} alt="arrow left"/></button>
                    <div className={styles.pagesButtons}>
                    {pageArr.map((n => {
                        return <button
                            className={cn(styles.pageButton, {
                                [styles.active]: selectedPage === n})}
                            key={n} onClick={() => setSelectedPage(n)}>{n}</button>
                    }))}
                    </div>
                    <button className={cn(styles.arrowIcon, {
                        [styles.buttonDisabled] : selectedPage === pageArr[pageArr.length-1],
                    })}><img src={arrowRIcon} onClick={() => setSelectedPage(selectedPage + 1 < pageArr.length ? selectedPage + 1  : pageArr.length)} alt="arrow right"/>
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