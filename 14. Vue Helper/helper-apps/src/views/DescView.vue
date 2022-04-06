<template>
  <div>
    <nav>
      <router-link to="/" tag="button">Kembali</router-link>
    </nav>
    <h1>{{ todo.list }}</h1>
    <form @submit.prevent="editDescription" v-if="isEdit">
      <input type="text" v-model="description" style="width: 90%" />
      &nbsp; <button type="submit">Edit</button> &nbsp;
    </form>
    <div v-else>
      <p v-if="todo.description">{{ todo.description }}</p>
      <p v-else>Belum ada deskripsi</p>
      <button @click="isEdit = !isEdit">Ubah Deskripsi</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescView",
  mounted: function () {
    console.log(this.$route.params.id);
  },
  data() {
    return {
      isEdit: false,
      description: "",
    };
  },
  computed: {
    todo() {
      let id = this.$route.params.id;
      return this.$store.state.todos[id];
    },
  },
  methods: {
    editDescription() {
      this.$store.commit("editDescription", {
        id: this.$route.params.id,
        description: this.description,
      });

      this.isEdit = false;
    },
  },
};
</script>