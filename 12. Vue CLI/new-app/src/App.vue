<template>
  <div id="app">
    <p v-for="(item, index) of task" v-bind:key="index">{{ index + 1 }}. {{ item }}</p>
    <p v-if="task.length < 1">Dokumen Kosong</p>
    <input type="text" v-model="taskBaru" @keyup.enter="submit" />
    <button @click="submit">Tambahkan</button>
    <p v-if="task.length > 3">Hebat!</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      task: [],
      taskBaru: "",
    };
  },
  methods: {
    submit() {
      this.task.push(this.taskBaru);
      this.taskBaru = "";
    },
  },
};
</script>
