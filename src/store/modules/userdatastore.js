import usersList from '../../api/userdata'
const UserData = {
    namespaced: true,
    state: {
        userList: [],
        userData:{}
    },
    mutations:{ 
        userListReceived(state, {data}) {
            state.userList = data;
        },
        fetchedUserData(state, {data}) {
            state.userData = data;
        },
    },
    actions:{
        userList({commit}, data) {
            usersList.getAllUsers((data) => {
                commit('userListReceived', {data});
            }, data);
        },
        addUser({commit}, data) {
            usersList.addUser((data) => {
                commit('userListReceived', {data});
            }, data);
        },
        deleteUser({commit}, id) {
            usersList.deleteUser((data) => {
                commit('userListReceived', {data});
            }, id);
        },
        findUserData({commit}, id) {
            usersList.findData((data) => {
                commit('fetchedUserData', {data});
            }, id);
        },
    },
    modules:{        
    },
}
export default UserData;