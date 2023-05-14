import {faker} from '@faker-js/faker/locale/ru'

const newPerson = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        base_id: faker.datatype.number(1000),
        base_phone: faker.phone.number('+7 ### ### ## ##'),
        base_age: faker.datatype.number(40),
        base_gender: faker.name.sex(),
        base_birthdate: faker.date.birthdate({min: 18, max: 65, mode: 'age'}),
        base_city: faker.address.city(),
        bank_bankName: faker.helpers.arrayElement(['ВТБ', "Сбер", "Альфа", "Тинькофф"])
    }
}

export function makeData(length = 1) {
    let data = [];
    let leng = length;
    while (leng > 0) {
        let person = newPerson();
        person.id = length - leng + 1;
        data = [...data, person]
        leng--;
    }
    return data;
}
