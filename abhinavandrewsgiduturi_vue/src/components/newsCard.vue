<template>
  <div @click="expand = !expand" id="news-card" class="news-card shadow" :class="{'expand-card': expand}">
      <img 
        class="news-img"
        :src=news.img 
        :class="{'expand-img': expand}"
      />
      <h4 class="headline">{{news.headline}}</h4>
      <h6 class="news-date">{{formatDate(news.publishedDate)}}</h6>
      <p class="description">{{news.desc.substring(0,150)+"..."}}</p>
      <p class="news-article" :class="{'expand-article': expand}" >{{news.article}}</p>
      <a :href=news.url class="news-link">Read More...</a>
      <a :href=news.source-url class="news-source" >{{news.source}}</a>
  </div>
</template>

<script>
import { format } from "date-fns"

export default {
    name: 'newsCard',
    data () {
      return {
        expand: false
      }
    },
    props : {
        news: Array,
        filter: String
    },
    methods : {
      formatDate(strDate) {
        return format(new Date(strDate), "MMMM do, yyyy")
      }
    }
}
</script>

<style>
  .news-card {
    display: inline-block;
    margin: 20px;
    height: auto;
    width: 420px;
    border: 2px solid black;
    background-color: #fff1e6;
    padding: 10px;
    border-radius: 8px;
    text-align: left;
  }

  .expand-card {
    width: 1000px;
    height: auto;
  }

  .shadow { 
  box-shadow: 0 20px 20px rgb(0 0 0 / 0.2);
}

  .closeBtn {
    display: none;
  }

  .displayClose {
    display: block;
    float: right;
  }

  .news-link {
    float: right;
    padding-right: 35px; 
    text-decoration: none;
  }

  .news-date {
    font-weight: normal;
    color: #718096;
    margin: 1px;
  }

  .news-img {
      height: 250px;
      width: 420px;
      border-radius: 10px;
  }

  .expand-img {
    width: 600px;
    height: 300px;
    margin-left: 200px;
  }

  .headline {
    padding: 2px;
  }

  .news-source {
    text-decoration : none;
    float: left;
  }

  .news-article{
    display: none;
  }

  .expand-article {
    display: block;
    text-align: justify;
  }

</style>