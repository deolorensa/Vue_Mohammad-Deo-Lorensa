<template>
  <div>
    <div id="app">
        <ol>
            <li v-for="toDo in toDos" :key="toDo">{{ toDo }}</li>
        </ol>
        <input type="text" v-model="newToDo">
        <button @click="addToDo">Tambahkan</button>
        <p v-if="showMessage">Hebat!</p>
    </div>
    
  </div>
</template>
    <script>
        const opts = {
            el : '#app',
            data: {
                toDos:[],
                newToDo:"",
                showMessage: false
            },
            methods: {
                addToDo(){
                    this.toDos.push(this.newToDo)
                    this.listChecker()
                },
                listChecker(){
                    if(this.toDos.length > 3){
                        this.showMessage=true
                    } 
                }
            },
            
        }
        var app = new Vue(opts)
    </script>