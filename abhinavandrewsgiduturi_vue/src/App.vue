<template>
  <NavBar/>
  <newsSection :news="news" />
  <ProjFooter/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import newsSection from './components/newsSection.vue'
import ProjFooter from './components/ProjFooter.vue'


export default {
  name: 'App',

  components: {
    NavBar,
    newsSection,
    ProjFooter
  },

  data() {
    return {
      newsFetch: [],
      news: []
    }
  },

  methods: {
    async fetchNews() {
      const response = await fetch("https://news-bites.herokuapp.com/api");
      const data = await response.json();
      //console.log(data);
      return data
    }
  },

  async created() {
    this.newsFetch = await this.fetchNews()
    console.log("fetch successful",this.newsFetch)
    this.news = this.newsFetch.news
  }
}
</script>

<style>
:root {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #14213d;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
