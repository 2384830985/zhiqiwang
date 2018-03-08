<template>
  <div class="home">
    <div class="home-navigation">
      <div class="home-content">
        <div class="navigation-logo"></div>
        <div class="home-navigation-home">
          <router-link class="home-navigation-title t-left"  tag="div" to="/home/page">首页</router-link>
          <router-link class="home-navigation-title t-left"  tag="div" to="ddd">办事易</router-link>
          <router-link class="home-navigation-title t-left"  tag="div" to="ddd">创业课堂</router-link>
          <router-link class="home-navigation-title t-left"  tag="div" to="/home/connoisseur">问行家</router-link>
          <div class="home-navigation-search t-right">
            <input type="text" class="home-navigation-input" placeholder="搜索服务、课程、话题">
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @color-38D4D8: #38D4D8;
  .router-link-active{
    color: @color-38D4D8;
  }
  .home-navigation{
    width: 100%;
    height:80px;
    background:rgba(255,255,255,1);
    box-shadow: 0 2px 0 0 @color-38D4D8;
    .home-content{
      position: relative;
      .navigation-logo{
        position: absolute;
      }
      .home-navigation-home{
        margin-left: 200px;
        overflow: hidden;
        .home-navigation-title{
          cursor: pointer;
          padding: 33px 25px;
          font-size:14px;
          line-height:1;
        }
        .home-navigation-search{
          margin-top: 20px;
          width:300px;
          height:40px;
          background:rgba(250,250,250,1);
          border-radius: 20px ;
          .home-navigation-input{
            margin: 10px 0 0 16px;
            display: block;
            border: none;
            width: 250px;
            font-size:14px;
            background:rgba(250,250,250,1);
            outline:none;
            color:rgba(153,153,153,1);
            line-height:1;
          }
          input::-webkit-input-placeholder{
            color:rgba(153,153,153,1);
          }
        }
      }
    }
  }
</style>
