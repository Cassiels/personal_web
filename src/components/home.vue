<template>
<div id="blog">
  <!-- 导航开始 -->
    <nav class="navbar navbar-fixed-top navbar-inverse" style="">
    <div class="container-fluid">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
            <a class="navbar-brand" href="#"><img class="logo-index" src="" alt="tanglongxiang.org-Logo"></a>
        </div>

        <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false" style="height: 1px;">
          <ul class="nav navbar-nav navbar-right">
         <!--  <div class="nav_line" style="height: 2px; background: red; position: absolute; top: 50px; width: 58px; left: 726.297px;">
          </div> -->
              <li class=""><a class="actives" href="#">首页</a><span class="liHover"></span></li>
              <li><a href="">心情</a><span class="liHover"></span></li>
              <li><a href="">相册</a><span class="liHover"></span></li>
              <li><a href="">个人作品</a><span class="liHover"></span></li>
              <li><a href="">关于作者</a><span class="liHover"></span></li>
              <li><a href="">FAQ</a><span class="liHover"></span></li>
              <!-- <li><a href="">个人中心</a><span class="liHover"></span></li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- 导航结束 -->
  <!-- 内容部分 -->
    <div class="headpic">
      <div class="headcover">
          <div class="container">
            
          </div>
      </div>
    </div>
  <!-- 内容部分 -->
    <div style="width: 100%;height: 600px;background-color: #000;color: white">
        5454554454
    </div>
</div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body{}
    h1, h2 {
      font-weight: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    .navbar{
      margin: 0
    }
    
    .navbar-inverse{
    border-color: transparent;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 3;
    background: rgba(0,0,0,.4);
  }
  .nav li a{
    color: white;
  }
  .nav li a:hover{
    color: #E0716C;
  }
  .actives{color: #E0716C ! important}
  .headpic{
    height: 800px;
    background: url(../assets/header-bg.jpg) no-repeat center top fixed;;
    background-size: cover;
    position: relative;
    top: 0px;
  }
  .headpic .headcover{
    height: 800px;
    position: relative;
    outline: none;
    background-color: rgba(33, 32, 42, 0.44);
  }
</style>
