<template>
    <div class="overlay">        
        <div class="card create-user-modal">
            <div class="p-2 close-button-div">
            <button
                ref="closeappointmentmodal"
                type="button"
                class="close-button float-end text-dark"
                @click="closeModal()"
            >
                &times;
            </button>
                </div>
            <div class="card-body p-3">                
                <form class="row" enctype="multipat/form-data" @keyup.enter="submitData()">
                    <div class="col-6 form-group">
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text" v-model="data.name" class="form-control" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="surname">Surname</label>
                        <input id="surname" name="surname" type="text" v-model="data.surname" class="form-control" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="email">Email Address</label>
                        <input class="form-control" id="email" name="email" v-model="data.email" type="email" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="password">Password</label>
                        <input class="form-control" id="password" name="password" type="password" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="username">Username </label>
                        <input class="form-control" id="username" name="username" type="text" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="company">Company </label>
                        <input class="form-control" id="company" name="company" type="text" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="phone_number">Phone Nnumber </label>
                        <input class="form-control" id="phone_number" name="phone_number" v-model="data.phoneNumber" type="text" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="phone_country_code">Phone Country Code </label>
                        <input class="form-control" id="phone_country_code" name="phone_country_code" type="text" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="image">Image</label>
                        <br>
                        <input class="" id="image" name="image" type="file">
                    </div> 
                    <div class="col-6">
                    </div>
                    <div class="col-6">
                        <button class="btn btn-info" type="submit" @click.prevent="submitData()">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'CreateUserModal',
    data(){
        return {
            data:{
                name:'',
                surname:'',
                email:'',
                phoneNumber:null,
            }
        }
    },
    methods:{
        submitData(){
            this.$store.dispatch('UserData/addUser', this.data);
            this.closeModal();
            this.data = {};
        },
        closeModal(){
            this.$parent.openCreateUserModal(false);
        }
    }
}
</script>
<style scoped>
.overlay {
  background: lightgray;
  height: 200%;
  left: 0;
  max-height: fit-content;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;
}
.create-user-modal{
    margin:120px;
}
.close-button {
    background: none;
    border: none;
    font-size: 27px;
    font-weight: 900;
    opacity: 0.5;
    text-shadow: 0 1px 0 #000;  
}
.close-button-div {
    border-bottom: 1px solid lightgray;
}
.btn-info {
    color: #fff;
    background-color: #39f;
    border-color: #39f;
    margin: 16px 0px;
}
</style>