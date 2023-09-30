<script setup>
import {todoApp} from '../store/store'
import {ref, reactive} from 'vue'

const todo = todoApp()
const workList = ref('')
const addWork = () => {
  todo.work.add(workList.value),
  workList.value = '' 
}

</script>

<template>
    <section class="bg-green-50 py-10 w-full h-screen">
        <div class="w-1/2 mx-auto">
            <div class="flex py-1">
                <input v-model="workList" @keyup.enter="addWork" type="text" class="w-full outline-none p-1">
                <button @click="addWork" class=" bg-cyan-500 text-white px-1">Add</button>
            </div>
            <div class="mt-2">
                <p class="bg-red-400 text-white text-base text-center w-full pb-0">work list</p>
                <div class="bg-white px-1 py-1 flex justify-between border-b">
                    <ul class="w-full">
                        <li v-for="(listOfWork,index) in todo.listOfWorks" :key="index" class="flex justify-between w-full px-1 border-b text-center">
                            <div class="flex">
                                <p class="pr-1">{{ index+1 }}  </p>
                                <input type="checkbox" v-model="listOfWork.done">
                                <label class="mx-1">{{ listOfWork.done ? 'done' : 'undone' }}</label>
                            </div>
                            <span :class="{ 'line-through': listOfWork.done }">{{ listOfWork.name }}</span>
                            <button @click="todo.delet(listOfWork,index)" class="bg-red-400 rounded text-white px-1">delet</button>
                        </li>
                    </ul>
                </div>
                <div v-if="todo.listOfWorks.length < 1" class="bg-white px-1 py-1 flex justify-between border-b">
                    <div >
                        <p class="text-black">demo work pending</p>
                    </div>
                    <div class="flex">
                        <button class="bg-red-400 text-sm px-1 text-white">Demo</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>