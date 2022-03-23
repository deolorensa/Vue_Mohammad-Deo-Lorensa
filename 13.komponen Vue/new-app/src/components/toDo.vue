<template>
  <div id="hey">
      <ol>
          <div v-if="!isEditing">
            <li v-for="(item, index) of task" v-bind:key="index"> {{ item }}
            <button @click="remove(index)">hapus</button>
            <button @click="editTodo">edit</button>
            </li>
          </div>
          
          <div v-else>
            <li v-for="(item, index) of task" v-bind:key="index"> {{ item }}
            <button @click="remove(index)">hapus</button>
            <button @click="updateTodo">update</button>
            </li>
          </div>
          
      </ol>
    <p v-if="task.length < 1">Dokumen Kosong</p>
    <input type="text" v-model="taskBaru" @keyup.enter="submit" />
    <button @click="submit">Tambahkan</button>
    <p v-if="task.length > 3">Hebat!</p>
  </div>
</template>
<script>
export default {
  name: "HeyYou",
  data: function () {
    return {
      task: [],
      taskBaru: "",
      isEditing: false,
      selectedTodo: null
    };
  },
  methods: {
    submit() {
      this.task.push(this.taskBaru);
      this.taskBaru = "";
    },
    remove(id){
        this.$delete(this.task, id);
    },
    updateTodo() {
        this.task.splice(this.selectedIndex, 1, this.item)
        this.item = ''
        this.isEditing = false
        },
    editTodo(index, item) {
        this.isEditing = true
        this.item = item
        this.selectedIndex = index
        },
  },
};
</script>

<style>

</style>