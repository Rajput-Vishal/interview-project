<template> 
    <div class="home">
        <main class="home-main">
        <div class="container-fluid">
            <div class="fade show">
            <div class="row">
                <div class="col-xl-12">      
                    <div class="card">
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
            </div>
            </div>
        </div>
        </main>
    </div>
</template>
<script>
import { mapState} from 'vuex'
export default{
    name:'EditPage',
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
    computed:{
        ...mapState('UserData',['userData']),
    },
    mounted(){
        this.$store.dispatch('UserData/findUserData', this.$route.params.id);
        if(this.userData){
            this.data.name = this.userData.name
            this.data.surname = this.userData.surname
            this.data.email = this.userData.email
            this.data.phoneNumber = this.userData.phone_number
        }
    },
    methods:{
        submitData(){
            this.data.id = this.$route.params.id;
            this.$store.dispatch('UserData/addUser', this.data);
            this.data = {};
            this.$router.push({name: 'Home'});
        },
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
.btn-info {
    color: #fff;
    background-color: #39f;
    border-color: #39f;
    margin: 16px 0px;
}
</style>