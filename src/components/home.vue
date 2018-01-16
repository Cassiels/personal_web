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
                <ul class="nav navbar-nav navbar-right nav_ul animated fadeIn">
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
    <!-- 文章 -->
      <div id="content">
          <div class="row">
            <div class="col-sm-3 col-md-2.5 col-md-2.5" style="background-color: ;">
                <div class="per_head">
                  <div class="tx">
                    <div class="avatar_">
                      <img src="../assets/firecracker.jpg">
                      <!-- <i class="iconfont  icon-weixin"></i> -->
                    </div>
                  </div>
                  <h1 class="author_name">
                      <a href="javascript:;">这个代码别太帅</a>
                  </h1>
                  <span>Front-end Engineer</span>
                  <div class="url_list">
                    <div class="item_list animated fadeIn">
                        <a  href="javascript:;">
                          <i style="color: #000" class="iconfont icon-weixin"></i>
                        </a>
                    </div>
                    <div class="item_list">
                        <a href="">
                          <i style="color: #000" class="iconfont  icon-weibo"></i>
                        </a>
                    </div>
                    <div class="item_list">
                        <a href="">
                          <i style="color: #666" class="iconfont  icon-youxiang"></i>
                        </a>
                    </div>
                  </div>
                  <section>
                      <div class="section">
                        <p class="show">留言展示</p>
                        <ul>
                          <li>
                            <a href="#">
                              <p>小火鸡:</p>
                              <span>马马虎虎将就看看</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <p>小火鸡:</p>
                              <span>马马虎虎将就看看</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <p>小火鸡:</p>
                              <span>马马虎虎将就看看</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                  </section>
                  <p style="color: rgba(0,0,0,.6);padding: 0 10px 20px 10px">Copyright © 2018 TANGLONGXIANG.ORG</p>
                </div>
            </div>
            <div class="col-sm-9 col-md-9.5 col-md-9.5" style="">
                <div id="main" class="article_stl">
                    <article>
                        <header>454545</header>
                        <p>16545454</p>
                        <footer>asdasd</footer>
                    </article>
                </div>
            </div>
          </div>
      </div>
    <!-- 文章 -->
  </div>
</template>
<!-- 每日一图由 未曾遗忘的青春 提供 | Copyright © 2016~2018 DAIWEI.ORG -->
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
  a{text-decoration: none}
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
  .nav_ul li a{font: normal 130% 'STXingkai', sans-serif;color: #222;}
   .article_stl{padding: 1em 0 2em;border-bottom: 1px solid #ddd;box-sizing: border-box;}
  .per_head{
    text-align: center;
    min-height: 50px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    z-index: 88;
    box-shadow: 0 0 0 1px rgba(0,0,0,.02), 0 4px 10px rgba(0,0,0,.06);
    border: 0;
  }
  /*avatar_*/
  .per_head .tx{
    padding: 28px 10px 10px 10px;
  }
  .per_head .tx .avatar_{
    position: relative;
    max-width: 120px;
    margin: 0 auto;
  }
  .per_head .tx .avatar_ img{
    max-width: 120px;
    height: 120px;
    border: 1px solid #eee;
    border-radius: 100%;
    box-sizing: border-box;
    display: block;
    vertical-align: middle;
    margin: 0 auto;
  }
  .author_name{
    font-size: 20px;
    line-height: 30px;
    margin: 0 35px;
    position: relative;
    font-weight: 400;
    color: #444;
    margin:0 auto;
  }
  .author_name a{
    color: rgba(0,0,0,.8);
    cursor: pointer;
  }
  .author_name span{
    display: block;
    font-size: 12px;
    padding: 0 10px;
    margin: 10px 0 0;
  }
  .url_list{
    padding: 20px;
    color: rgba(0,0,0,.6);
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }
  .url_list .item_list{
    width: 33.333%
  }
  .url_list .item_list i{
    font-size: 30px;
  }
  .per_head .section{
    margin: 0 0 10px;
    position: relative;
    padding: 15px;
  }
  .per_head .section p.show{
    text-align: left;
    border-bottom: 2px solid hsla(0,0%,55%,.5);
    padding: 0 10px;
    color: #8b8b8b;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 0;
  }
  .per_head .section ul li{
    padding: 5px 0;
    border-bottom: .5px dashed hsla(0,0%,55%,.4);    
  }
  .section ul li a{
    height: 45px;
    display: block;
    line-height: 19px;
    position: relative;
  }
  .section ul li a p{
    text-align: left;
    color: #3B5998;
    line-height: 15px;
    font-weight: 700;
    padding: 1px 0 0;
    font-size: 15px;
    padding: 0 10px;
  }
  .section ul li a span{
    color: rgba(0,0,0,.5);
    display: block;
    font-weight: 400;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    padding: 0 10px;
  }   
</style>
