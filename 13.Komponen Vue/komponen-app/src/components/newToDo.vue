<template>
  <div id="hey" v-cloak class="container mx-auto flex items-center flex-col mt-10">
    <header class="text-center">
      <h1 class="text-5xl font-black">Todo List</h1>
      <p class="text-xl mb-8">You Have {{ items.length }}</p>
      <p class="text-xl mb-8" v-if="items.length > 3">Hebat !</p>
    </header>
    <main class="mt-3">
      <label for="">
        <input type="text" id="add_item" placeholder="Add Task" autofocus ref="addtask" @keyup.enter="addItem"
        class="bg-gray-200 focus:bg-white border-black border-solid border-2 px-2 py-1 w-full mb-4 hover:bg-white">
      </label>
      <ol class="max-w-xs">
        <li class="my-4 flex items-center justify-end" v-for="(item, index) in items" :key="index" >
          <span v-if="!item.edit" class="px-2 py-1 mr-2 w-40 border-transparent border-solid border-2 hover:border-black" @click="enableEdit(index)">{{ item.title }}</span>
        <input v-else type="text" v-model="item.title" :ref="'task'" @keyup.enter="disableEdit(index)" @blur="disableEdit(index)" class="px-2 py-1 mr-2 w-40 border-black border-transparent focus:border-black border-solid border-2 focus:bg-white">
        <button class="border-black border-solid border-2 bg-orange-400 hover:bg-black hover:text-orange-400 focus:bg-black focus:text-orange-400 px-2 py-1 mr-2" @click="removeItem(index)">Delete</button>
        <button class="border-black border-solid border-2 bg-blue-400 hover:bg-black hover:text-blue-400 focus:bg-black focus:text-blue-400 px-2 py-1" @click="enableEdit(index)">Edit</button>
        </li>
      </ol>
      <p class="error px-2 py-1 rounded" v-if="isError">☝This task already exists.</p>
  </main>
  </div>
</template>

<script>
export default{
  name:"newToDo",
  data() {
    return{
      items: [
        {
          title:"",
          edit:false
        },
      ],
      taskItem:"",
      isError:false
    };
  },
  methods: {
    addItem: function(e) {
      const value = e.target.value;
      if(value === "") {
        return false;
      }

      if(this.itemExist(value)=== true){
        let repeated = [].filter.call(
          document.getElementsByTagName("span"),
          function(span){
            return span.textContent === value;
          }
        );

        this.isError = true
        repeated[0].classList.add("bg-orange-300")
      }

      this.isError = false;
      e.target.value = "";
      this.items.push({
        title: value,
        edit:false
      });
      let repeatedClasses = document.querySelectorAll(".bg-orange-300");
      for (let repeatedClass of repeatedClasses) {
        repeatedClass.classList.remove("bg-orange-300");
      }
    },
    removeItem:function(index){
      this.items.splice(index, 1);
      this.$refs.addtask.fokus();
    },
    enableEdit: function(index){
      this.items[index].edit = true;
      this.$nextTick(() => {
        let input = this.$refs.task[0];
        input.focus();
      });
    },
    disableEdit: function(index){
      this.items[index].edit = false;
    },
    itemExist:function(value){
      for (var i = 0; i < this.items.length; i++){
        if(this.items[i].title === value) {
          return true;
        }
      }
      return false;
    }
  },
}
</script>

<style >
[v-cloak] {
  display: none;
};
</style>