import {faker} from '@faker-js/faker/locale/ru'

const newPerson = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        base: {
            nameGroup: 'Основная информация',
            id: faker.datatype.number(1000),
            phone: faker.phone.number('+7 ### ### ## ##'),
            age: faker.datatype.number(40),
            gender: faker.name.sex(),
            birthdate: faker.date.birthdate({min: 18, max: 65, mode: 'age'}),
            city: faker.address.city(),
        },
        bank: {
            nameGroup: 'Банковская информация',
            bankName: faker.helpers.arrayElement(['ВТБ', "Сбер", "Альфа", "Тинькофф"])
        }
    }
}

export function makeData(length = 1) {
    let data = [];
    let leng = length;
    while(leng > 0) {
        let person = newPerson();
        person.id = length - leng + 1;
        data = [...data, person]
        leng--;
    }
    return data;
}
