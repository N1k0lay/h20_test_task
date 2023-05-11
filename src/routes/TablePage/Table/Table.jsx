import styles from './table.module.css';
import {useEffect, useState} from "react";

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

    const [filteredData, setFilteredData] = useState(data)
    //Поиск по firstName, lastName
    useEffect(() => {
        search ? setFilteredData(data.filter(person => person.firstName.toLowerCase().includes(search.toLowerCase()) || person.lastName.toLowerCase().includes(search.toLowerCase()))) : setFilteredData(data)
    }, [search, data])


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
                    return <tr key={p.id}>
                        <td>{p.id}</td>
                        <td><TdEdit value={p.firstName} editMode={editMode}/> <TdEdit value={p.lastName} editMode={editMode}/></td>
                        <td><TdEdit value={p.base.id} editMode={editMode} type={'number'}/></td>
                        <td><TdEdit value={p.base.phone} editMode={editMode} type={'tel'}/></td>
                        <td><TdEdit value={p.base.gender} editMode={editMode} type={'text'}/></td>
                        <td><TdEdit value={p.base.birthdate.toLocaleDateString()} editMode={editMode} type={'date'}/></td>
                        <td><TdEdit value={p.base.city} editMode={editMode} type={'text'}/></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );

};

export default Table;