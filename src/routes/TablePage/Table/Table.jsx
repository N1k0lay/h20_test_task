import styles from './table.module.css';

const Table = ({data}) => {
    console.table(data)
    console.log(Object.keys(data[0].base))
    return (
        <div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th rowSpan={2}>№</th>
                    <th rowSpan={2}>Имя сотрудника</th>
                    <th colSpan={Object.keys(data[0].base).length-1}>{data[0].base.nameGroup}</th>
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
                {data.map((p) => {
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