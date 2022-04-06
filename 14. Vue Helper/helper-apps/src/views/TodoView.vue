<template>
  <div>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
// import TodoComponent from '../components/TodoComponent.vue';
export default {
  name: "TodoView",
  components: {
    TodoList,
    // TodoComponent,
  },
};
</script>
