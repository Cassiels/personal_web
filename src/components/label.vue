<template>
  <div id="label_main" class="label_stl">
    <div>
      <h1 class="label_per">个性标签</h1>
      <div class="personal_lab">
        <span class="tip_list">
          <span class="name">英雄联盟</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">心态良好</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">自由</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">买房买车中</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">6的飞起</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">努力</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">成熟</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">屌丝男</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">颜值控</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">上班族</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">有妹子</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">不怂</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
      </div>
      <h1 class="label_per" style="margin-top: 70px">技术标签</h1>
      <div class="personal_lab">
        <span class="tip_list">
          <span class="name">Vue</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">Javascript</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">Apicloud</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">Jquery</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">Aui/Mui/Sui</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
        <span class="tip_list">
          <span class="name">Bootstrap</span> 
          <span class="count">0</span>
          <div class="bg-content" style="opacity: 0.88;"></div>
        </span>
      </div>
    </div>
   <!--  <p style="color:#000;font-size: 36px">{{ msg }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '标签页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;  
  margin: 0 10px;
}
a{color: #222;}
a{text-decoration: none}
a:hover{text-decoration: none}
a:active, a:hover{text-decoration: none}
a:focus{text-decoration: none}
.label_stl{
  padding: 1.5em;
 /* border-bottom: 1px solid #ddd;*/
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
  h1.label_per{
    padding: 15px 30px;
    border-bottom: 1px solid #EEE;
    -webkit-box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(200, 200, 200, 0)), to(rgba(200, 200, 200, 0.12)));
    background-image: linear-gradient(rgba(200, 200, 200, 0), rgba(200, 200, 200, 0.12));
    color: #666;
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 25px;
    text-align: left;
  }
}
.personal_lab{
  font-size: 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  line-height: 30px;
  font-family: PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif;
  .tip_list{
    display: inline-block;
    height: 30px;
    line-height: 27px;
    padding: 2px 18px;
    font-size: 14px;
    color: #000;
    position: relative;
    margin: 20px;
    border-radius: 17px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      box-shadow: 1px 1px 10px 0 hsla(0,0,0,0.8);
      color: #E0716C;
    };
    .bg-content{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 17px;

/*      z-index: -1;*/
    }
  }
}

</style>
