<template>
  <div>
    <NavbarMenu/>
    <div class="flex flex-wrap grid grid-rows-2 grid-flow-col gap-4 ml-5">
        <div class="container flex flex-wrap row-span-2">
          <div v-for="article in listFilm" id="article" :key="article.original_title">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-sky-50 mx-5 my-5">
              <a href="#">
                  <img class="rounded-t-lg" :src="'https://image.tmdb.org/t/p/w500/'+article.poster_path" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-800">{{ article.original_title }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">{{ article.overview }}</p>
              </div>
          </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import NavbarMenu from '@/components/NavbarMenu.vue'

export default {
  name: "Home",
  components: {
    NavbarMenu,
  },
computed: {
    listFilm() {
      return this.$store.state.listFilm
    }
  },
  mounted() {
    this.fetchFilm({
      keyword:"" || "black",
    })
  },
  methods: {
    fetchFilm({keyword}) {
      this.$store.dispatch('fetchFilm',{
        keyword,
      })
    }
  }
};
</script>


