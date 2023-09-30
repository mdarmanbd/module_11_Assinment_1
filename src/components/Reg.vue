<script setup>
import {ref,reactive} from 'vue'
import { todoApp } from '../store/store';

const todo = todoApp()
const conPassword = ref('')
const oldPassword = ref('')

</script>

<template>
    <section class="bg-green-50 py-10 w-full h-screen">
        <div class="w-1/2 pt-10 bg-gray-50 mx-auto">
            <div class="pb-4 px-5">
                <h1 class="text-black font-extrabold pb-1">this is login page</h1>
                <div class="pb-2">
                    <p class="text-black font-mono text-lg">Email</p>
                    <input type="email" placeholder="example@.com" class="w-full border border-green-300 rounded outline-none pl-1 text-base">
                </div>
                <div class="pb-2">
                    <p class="text-black font-mono text-lg">Old Password</p>
                    <input v-model="oldPassword" type="text" class="w-full border border-green-300 rounded outline-none pl-1 text-base">
                    
                </div>
                <div class="pb-2">
                    <p class="text-black font-mono text-lg">Confarm Password</p>
                    <input v-model="conPassword" type="text" class="w-full border border-green-300 rounded outline-none pl-1 text-base">
                    <small v-if="!todo.registration" class="text-red-500">password is not a match</small>
                </div>
                <div>
                   <button @click="todo.confarmPass(oldPassword,conPassword)" class="bg-green-800 text-white font-mono text-lg rounded px-1">
                    Registration
                   </button> 
                </div>
                <div v-if="todo.registration" class="pt-5">
                    <p class="text-green-600 font-semibold text-lg">welcome to Registration</p>
                </div>
            </div>
        </div>
     </section>
</template>