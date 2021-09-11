const _userList = [
    {
        id: '1', 
        name: 'Built-In Mic',
        surname: 'nested',
        email:'xyz@gmail.com',
        phone_number: 12345678990
    },
    {
        id: '1', 
        name: 'Built-In Mic',
        surname: 'nested',
        email:'xyz@gmail.com',
        phone_number: 12345678990
    },
    {
        id: '1', 
        name: 'Built-In Mic',
        surname: 'nested',
        email:'xyz@gmail.com',
        phone_number: 12345678990
    },
];

export default {
    getAllUsers(cb) {
        setTimeout(() => cb(_userList), 100);
    },
};