import { defineStore } from 'pinia'
import {ref,reactive} from 'vue'

const todoApp = defineStore('alert',()=>{
    let listOfWorks = reactive([])
    let registrationPage = ref(false) 
    let registration = ref(false)
    const work = reactive({
        add(workName){
            listOfWorks.push({
                name:workName,
                done:false,
            })  
        },
    })
    const delet = (listOfWork,index) =>{
            console.log(listOfWorks.splice(index,1))
    }

    const login = (email,password) =>{

        registrationPage.value = true
        localStorage.setItem('email',email)
        localStorage.setItem('passwordOne',password)

    }


    const confarmPass = (oldPassTwo,con) =>{
        localStorage.setItem('passwordTwo',oldPassTwo)
        const oldPasswordOne = localStorage.getItem('passwordOne')
        const oldPasswordTwo = localStorage.getItem('passwordTwo')
        const confarmPass = con

        if(oldPasswordOne == oldPasswordTwo && oldPasswordTwo == confarmPass){
            registration.value = true
            console.log(oldPasswordOne,oldPasswordTwo,confarmPass)
        }else{
            registration.value = false
        }
    }

    return{
        work,listOfWorks,delet,login,registrationPage,registration,confarmPass
    }
})

export {todoApp}