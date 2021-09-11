const _userList = [
    {
        id: '1', 
        name: 'Built-In Mic',
        surname: 'nested',
        email:'xyz@gmail.com',
        phone_number: 12345678990
    },
    {
        id: '2', 
        name: 'Built-In Mic',
        surname: 'nested',
        email:'xyz@gmail.com',
        phone_number: 12345678990
    },
    {
        id: '3', 
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
    addUser(cb, data) {
        if(data.id){
            var index = data.id - 1;
            _userList[index].name= data.name
            _userList[index].surname= data.surname
            _userList[index].email= data.email
            _userList[index].phone_number= data.phoneNumber
        }
        else {
            _userList.push({
                id:_userList.length+1,
                name: data.name,
                surname: data.surname,
                email: data.email,
                phone_number: data.phoneNumber,
            });
        }
        setTimeout(() => cb(_userList), 100);
    },
    findData(cb, id) {
        const data = _userList.find((x) => x.id === id);
        setTimeout(() => cb(data), 100);
    },
    deleteUser(cb, id) {
        var index = id - 1;
        _userList.splice(index, 1);
        setTimeout(() => cb(_userList), 100);
    },
};