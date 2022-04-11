<template>
  <div>
    <h1>Berita Terkini</h1>
    <div class="container">
      <div v-for="item in berita" id="article" :key="item.title">
        <router-link
          :to="{ name: 'Description', params: { id: item.source.name } }"
          tag="button"
        >
          <div class="item">
            <div class="container2">
              <div class="image">
                <img :src="item.urlToImage" alt="" />
              </div>
              <div class="content">
                <span class="author">{{ item.author }}</span>
                <h4>{{ item.title }}</h4>
                <span class="published">{{ item.publishedAt }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      berita: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-04-08&to=2022-04-08&sortBy=popularity&apiKey=6f7f2269e8ab4459b52c2e97f3b04ac5"
      )
      .then((response) => {
        this.berita = response.data.articles;
      });
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

button {
  width: 100%;
  border: none;
  background-color: #e3eee8;
  margin: 10px;
}

#article {
  width: 50%;
  display: flex;
  border-radius: 4px;
}
h1{
  text-align: center;
  color: rgb(0, 31, 126);
}
.item {
  display: flex;
  border-radius: 4px;
}
.container2 {
  display: flex;
  flex-direction: row;
  background-color: #e3eee8;
  min-height: 150px;
  cursor: pointer;
  width: 100%;
}
.image {
  display: flex;
  align-items: center;
  width: 200px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-block: auto;
}
.content {
  color: rgb(0, 81, 255);
  text-align: left;
  padding: 20px;
}
.author {
  font-size: small;
  font-weight: 600;
}
.published {
  font-size: small;
}
</style>