<template>
  <div class="about">
    {{ newsList }}
    <div class="box-image"></div>
    <h1>{{ list.title }}</h1>
    <div class="line">
      <p>Nama Author</p>
      <p class="end">Date</p>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore, eveniet voluptatem doloribus obcaecati minus eaque, 
      rem explicabo commodi rerum aperiam a saepe perferendis qui facere quam cum neque quo.</p>
      <router-link to="/" tag="button">Kembali</router-link>
  </div>
</template>
<script>
export default {
  name:'AboutView',
  computed: {
    list() {
      return this.$route.params.id
      },
  },
}
</script>
<style>
.box-image{
  background-color: aqua;
  height: 500px;
  margin: auto;
}
h1 {
  text-align: center;
  color: rgb(3, 87, 118);
}
p {
  color: rgb(0, 38, 52);

}
.line {
  display: flex;
}
.end {
  text-align: right;
}
</style>