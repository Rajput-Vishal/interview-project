<template>
  <div class="position-relative table-responsive">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th class="" style="vertical-align: middle; overflow: hidden;">
            <div class="d-inline">Name</div>
          </th>
          <th class="" style="vertical-align: middle; overflow: hidden;">
            <div class="d-inline">Surname</div>
          </th>
          <th class="font-weight-bold" style="vertical-align: middle; overflow: hidden;">
            <div class="d-inline">Email</div>
          </th>
          <th class="" style="vertical-align: middle; overflow: hidden;">
            <div class="d-inline">Phone Number</div>
          </th>
          <th class="" style="vertical-align: middle; overflow: hidden;">
            <div class="d-inline">Activate</div>
          </th>
          <th class="" style="vertical-align: middle; overflow: hidden;">
            <div class="d-inline">Action</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="user in userList" :key="user.id">
          <td class="">{{user.name}}</td
          ><td class="">{{user.surname}}</td>
          <td class="font-weight-bold">{{user.email}}</td>
          <td class="">{{user.phone_number}}</td>
          <td><span class="badge badge-success">Active</span></td>
          <td>
            <button class="btn btn-sm btn-success edit-button" @click="editDetails(user.id)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState} from 'vuex'

export default {
  name: 'UserList',
  data(){
    return {

    }
  },
  computed:{
    ...mapState('UserData',['userList']),
  },
  mounted(){
    this.$store.dispatch('UserData/userList')
  },
  methods:{
    editDetails(id) {
      this.$router.push({name: 'EditPage', params: {id: id}});
    },
    deleteUser(id) {
      var result = confirm("Are you sure to delete this user?");
      if(result){
        this.$store.dispatch('UserData/deleteUser', id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.badge-success {
    color: #fff;
    background-color: #2eb85c;
}
.edit-button{
  margin-right: 5px;
}
</style>
