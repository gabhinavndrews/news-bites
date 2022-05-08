<template>
  <div class="footer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="footer-links">
      <label>Email:</label>
      <a> newsbites@gmail.com</a>
    </div>
    <div class="footer-links">
      <label>Phone:</label>
      <a> 9999999999</a>
    </div>
    <div class="foot-copyright">
        <span><i class="fa fa-copyright"> News Bites 2022</i></span>
    </div>
  </div>
</template>

<script>

export default {
    name: "ProjFooter"
}
</script>

<style>
  
  .footer {
    background-color: #dc2f02;
    color: white;
    height: 150px;
    margin: 10px;
    padding: 10px;
  }
  .foot-copyright {
    font-size: 20px;
    text-align: center;
    margin-top: 80px;
  }

  .footer-links {
    text-align: center;
    margin: 5px;
  }
</style>