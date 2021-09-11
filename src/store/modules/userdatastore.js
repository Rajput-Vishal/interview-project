import usersList from '../../api/userdata'
const UserData = {
    namespaced: true,
    state: {
        userList: []
    },
    mutations:{ 
        userListReceived(state, {data}) {
            state.userList = data;
        },
    },
    actions:{
        userList({commit}, data) {
            usersList.getAllUsers((data) => {
                commit('userListReceived', {data});
            }, data);
        },
    },
    modules:{        
    },
}
export default UserData;