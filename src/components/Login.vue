<script setup>
import {todoApp} from '../store/store'
import{ref,reactive} from 'vue'
import{useRoute,useRouter} from 'vue-router'

const router = useRouter()
const todo = todoApp()
const email = ref('')
const password = ref('')
let worningEmail = ref(false)
let worningPassword = ref(false)
let regPage = ref(false)

const loginBtn = () =>{
    if(email.value.length < 2 || email.value.search('@') == -1){
      worningEmail.value = true
      regPage.value = false
    }
    else if (password.value.toLocaleLowerCase() == 'password'){
       worningPassword.value = true
       regPage.value = false
       
    }else{
        
        router.push('/registration')
        regPage.value = true
        todo.login(email.value,password.value)
    
    }
   
}

 

</script>

<template>
     <section class="bg-green-50 py-10 w-full h-screen">
        <div class="w-1/2 pt-10 bg-gray-50 mx-auto">
            <div class="pb-4 px-5">
                <h1 class="text-black font-extrabold pb-1">this is login page</h1>
                <div class="pb-2">
                    <p class="text-black font-mono text-lg">Email</p>
                    <input v-model="email" type="text" placeholder="example@.com" class="w-full border border-green-300 rounded outline-none pl-1 text-base">
                    <small v-if="worningEmail" class="text-red-500">email length is too short and also requered the '@'</small>
                </div>
                <div class="pb-2">
                    <p class="text-black font-mono text-lg">Password</p>
                    <input v-model="password" type="text" class="w-full border border-green-300 rounded outline-none pl-1 text-base">
                    <small v-if="worningPassword" class="text-red-500">password is not a password</small>
                </div>
                <div>
                   <button @click="loginBtn" class="bg-green-800 text-white font-mono text-lg rounded px-1">
                    Login
                   </button> 
                </div>
            </div>
        </div>
     </section>
</template>