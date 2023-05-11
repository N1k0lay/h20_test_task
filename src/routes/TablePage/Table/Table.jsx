import styles from './table.module.css';
import {useEffect, useState} from "react";

const Table = ({data, search}) => {

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
                    // search && p.includes(search) &&
                    return <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{`${p.firstName} ${p.lastName}`}</td>
                        <td>{p.base.id}</td>
                        <td>{p.base.phone}</td>
                        <td>{p.base.gender}</td>
                        <td>{p.base.birthdate.toLocaleDateString()}</td>
                        <td>{p.base.city}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );

};

export default Table;