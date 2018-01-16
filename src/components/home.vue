<template>
  <div id="blog" class="blog_stl">
    <!-- 导航开始 -->
      <div class="global-tlx">
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
                <ul class="nav navbar-nav navbar-right nav_ul">
               <!--  <div class="nav_line" style="height: 2px; background: red; position: absolute; top: 50px; width: 58px; left: 726.297px;">
                </div> -->
                    <li><a class="actives" href="#">文章</a></li>
                    <li><a href="">Skill</a></li>
                    <li><a href="">标签</a></li>
                    <li><a href="">留言板</a></li>
                    <li><a href="">关于</a></li>
                    <!-- <li><a href="">个人中心</a><span class="liHover"></span></li> -->
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>  
    <!-- 导航结束 -->

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {font-weight: normal;}
  ul {list-style-type: none;padding: 0;}
  .blog_stl{
    max-width: 1200px;
    padding: 80px 0 30px 0;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    overflow: hidden;
    display: block;
  }
  .navbar-inverse{
    /*border-top: 3px solid #009a61;*/
    /*border-color: transparent;*/
    border-bottom-color: transparent;
    left: 0;
    right: 0;
    top: 0;
    position: static;
    z-index: 3;
    background: white;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
    border-radius: 5px;
  }
  .navbar-inverse .navbar-nav>li>a:focus, .navbar-inverse .navbar-nav>li>a:hover {color: #E0716C;}
  .nav_ul li a{
    font: normal 130% 'STXingkai', sans-serif;
    color: #222;
  }
   
</style>
