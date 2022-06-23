<template>
<div class="all">
    <h1>Login to your account</h1>
    <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple.</p>
    <p>If you signed up but didn't get your verification email, click here to have it resent.</p>
    <div class="login">
    <label for="username">Username</label>
    <input type="text"  v-model="username">

    <label for="password">Password</label>
    <input type="password"  v-model="password" @keyup.enter="submit">

    <div class="loginn">
    <button @click="submit">Login</button>
    <a @click="resetPassword">Reset password</a>
    </div>
    </div>
</div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import {ref} from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
components:{},
setup(){
const store = useStore()
const route = useRoute()
const router = useRouter()

const username = ref(null)
const password = ref(null)
const reqToken = ref(null)
const approvedToken = ref(null)
const sessionId = ref(null)

    const submit = async() => {
        let rToken = await axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
        reqToken.value = await rToken.data.request_token

        let aToken = await axios.post('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=0b5e8ce7494ae54d6c643adf4db40da7',{
             username: username.value,
             password: password.value,
             request_token: reqToken.value
         })
         approvedToken.value = await aToken.data.request_token

         let sId = await axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=0b5e8ce7494ae54d6c643adf4db40da7',{
            request_token: approvedToken.value
        })
        sessionId.value = await sId.data.session_id
        store.dispatch('sesija', sId.data.session_id)

        let last = await axios.get('https://api.themoviedb.org/3/account?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + sessionId.value)
        store.dispatch('username', last.data.username )
        router.push({name:'home'})
    }

    
    return{
        username,
        password,
        reqToken,
        approvedToken,
        sessionId,
        submit
    }
    
}
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');


.body{
    font-family: 'Source Sans Pro', Arial, sans-serif;
    color: black;
}
.all{
    display: flex;
    flex-direction: column;

    width: 1300px;
    margin: auto;
    margin-top: 20px;

}
.login{
    display: flex;
    flex-direction: column;
    height: 200px;
}
.login input{
    width: 1180px;
}
.all p{
    margin-bottom: 10px;
    margin-top: 10px;
    color: black;
}
.login label{
    margin-top: 20px;
}
.login input{
    height: 30px;
    border-radius: 5px;
    border: 1px solid lightgray;
}
.login button{
    width: 70px;
    color: white;
    background:  #01b4e4;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-size: 15px;
}
.login a{
    margin-left: 10px;
    color:#01b4e4;
    font-size: 15px;
    cursor: pointer;
}
.loginn{
    margin-top: 20px;
    display: flex;
    align-items: center;
}
h1{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 0;
}
</style>