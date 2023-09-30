<script setup>
import {todoApp} from './store/store'
const todo = todoApp()



</script>

<template>
  <div>
    <header class="bg-black border-b-light-100 border-b h-16 text-white items-center flex p-5 text-2xl justify-between">
    <h1 class="text-xl font-semibold">A Wonderful Blog</h1>
  </header>
  <section class="flex">
    <aside class="w-[150px] bg-black ">
      <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
          <li>
            <router-link to="/home">Log in</router-link>
          </li>
          <li v-if="todo.registrationPage">
            <router-link to="/registration">Registration</router-link>
          </li>
          <li v-if="todo.registration">
            <router-link to="/todo" class="text-green-700 font-bold">Todo</router-link>
          </li>
        </ul>
      </section>
    </aside>
    <main class="w-full min-h-screen ">
      <router-view></router-view>
    </main>
  </section>
  </div>
</template>

<style scoped>
</style>
