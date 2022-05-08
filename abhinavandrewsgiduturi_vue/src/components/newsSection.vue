<template>
  <v-container class="newsSection">
    <form class="search">
      <input class="search-box" type="text" v-model="search" placeholder="Search keywords..">
      <select class="filter"  type="text" v-model="search">
        <option disabled value="">Please select a genre</option>
        <option value="">All</option>
        <option>sports</option>
        <option>business</option>
        <option>local</option>
        <option>movies</option>
        <option>international</option>
      </select>
      <h1>Showing results for: {{resultFn()}}</h1>
    </form>
    <v-row>
    <v-col v-for=" newsArticle in filteredNews" :key="newsArticle.id" >
      <newsCard :news="newsArticle" :filter = "this.filter" @onClick="onClick()"  />
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import newsCard from './newsCard.vue'



export default {
    name: 'newsSection',
    components : {
        newsCard
    },
    data() {
      return {
        search: '',
        result: 'All'
      }
    },
    props:{
        news: Array
    },
    methods: {
      onClick() { 
        console.log(this.filter);
      },
      resultFn() {
        if(this.search != '') {
          this.result = this.search;
          return this.result
        }else {
          this.result = 'All'
          return this.result
        }
      }
    },
    computed: {
      filteredNews(){
        return this.news.filter(news => news.genre.toLowerCase().includes(this.search.toLowerCase()))
      }
    }
    
}
</script>

<style>
    .newsSection {
        display: block;
        background-color: #fdfcdc;
        border: 2px solid black;
        padding: 10px;
        margin: 10px;
        text-align: center;
    }

    .search {
      display: block;
      margin: 10px;
      float: center;
    }

    .search-box {
      width: 200px;
      height: 30px;
      border-radius: 5px;
    }

    .filter {
      margin: 10px;
      width: 200px;
      height: 35px;
      border-radius: 5px;
    }
</style>