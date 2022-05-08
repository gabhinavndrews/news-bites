<template>
  <div class="navbar">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <i class="fa-brands fa-neos"></i>
      <label>NEWS BITES</label>
  </div>
</template>

<script>

export default {
    name: 'NavBar'
}
</script>

<style>
    .navbar {
        display: block;
        background-color: red;
        color: white;
        height: 4rem;
        padding: 0.2rem;
        margin: 10px;
    }

    .nav-items {
        display:block;
        float: right;
        text-transform: uppercase;
    }

    .navbar label {
        display: block;
        padding: 0.6rem;
        font-size: 3rem;
        margin-bottom: 10px;
        text-align: center;
    }

    .navbar a {
        float: right;
        padding: 0.8rem;
    }

    .navbar a :hover {
        background-color: #d62828;
        color: black;
    }
</style>