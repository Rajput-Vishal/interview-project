<template>
  <div class="home">
    <main class="home-main">
      <div class="container-fluid">
        <div class="fade show">
          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <header class="card-header">
                  <span class="heading text-left">Users</span>
                  <button class="btn btn-info btn-sm float-end" @click="openCreateUserModal()">Create User</button>
                </header>
                <div class="card-body">
                  <UserList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </main> 
    <CreateUserModal v-show="isCreateUserModalOpen" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList.vue'
import CreateUserModal from '@/components/CreateUserModal.vue'

export default {
  name: 'Home',
  components: {
    UserList,
    CreateUserModal
  },
  data(){
    return {
      isCreateUserModalOpen: false,
    }
  },
  methods:{
    openCreateUserModal(){
      this.isCreateUserModalOpen = true;
    }
  }
}
</script>
<style scoped>
.home{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.home-main {
    flex-basis: auto;
    flex-shrink: 0;
    flex-grow: 1;
    min-width: 0;
    padding: 2rem;
    height: 100vh;
}
.heading {
  text-align: left;
}
.btn-info {
    color: #fff;
    background-color: #39f;
    border-color: #39f;
}
</style>