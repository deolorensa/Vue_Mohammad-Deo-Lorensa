<template>
  <div class="home">
    <div class="container">
    <div class="box" v-for="(news,index) in listNews" :key="index">
      <div class="box-img"> <img :src="`${news.urlToImage}`" alt="">
      </div>
        <div class="flex-col">
        <h3 class="box-autor">{{ news.author }}</h3>
        <h3 class="box-title">{{ news.title }}</h3>
        <p class="box-date">{{ news.publishedAt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  computed: {
    listNews() {
      return this.$store.state.newsList
    }
  },
  mounted() {
    this.$store.dispatch('fetchNews')
  }
}
</script>

<style>
img{
  width: 250px;
  height: 180px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  flex: auto;
}
.flex-col{
  flex-direction: column;
}
.box{
  display: flex;
  background-color: rgb(240, 240, 240);
  margin: 10px;
  height: 200px;
  flex: 48%;
}
.box-img{
  width: 250px;
  margin: 10px;
}
.box-autor{
  color: rgb(0, 113, 154);
  margin: 10px;
}
.box-title{
  color: rgb(0, 151, 205);
  margin: 20px 10px;
  font-size: 1rem;
}
.box-date{
  color: rgb(0, 113, 154);
  margin: 10px;
}
</style>