<template>
<div class="t-page-navigation">
  <div class="t-page-content">
    <div class="t-page-content-navigation">
      <div class="t-page-content-middle t-left">
        <div class="t-page-middle-navigation t-left">
          <div class="t-page-middle-content"></div>
          <div class="t-page-middle-content"></div>
          <div class="t-page-middle-content"></div>
          <div class="t-page-middle-content"></div>
          <div class="t-page-middle-content"></div>
        </div>
        <div class="t-page-middle-carousel t-left">
          <div class="t-middle-carousel">
            <div class="block">
              <el-carousel height="280px">
                <el-carousel-item v-for="item in items" :key="item">
                  <img :src="item" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="t-middle-section">
            <div class="t-middle-section-left t-left">
              <div class="t-middle-section-major"></div>
              <div class="t-middle-section-icon"></div>
              <div class="t-middle-section-icon"></div>
              <div class="t-middle-section-icon"></div>
              <div class="t-middle-section-icon"></div>
            </div>
            <div class="t-middle-section-right t-right">
            </div>
          </div>
        </div>
        <div class="t-middle-headlines">
          <div class="t-middle-headlines-zhiqi"></div>
          <div class="t-middle-headlines-logo"></div>
          <div class="t-middle-headlines-content">
            <div class="t-middle-headlines-title">80%以上财税工作将被机器人取代</div>
            <div class="t-middle-headlines-content">
              在江北新区召开的新时代中国会计服务与创新研讨会上，与会专家认为，未来超八成的基础财税工作将被机器人取代，会计专业的人才培养要进行调整。
            </div>
          </div>
        </div>
      </div>
      <div class="t-page-content-side t-right">
        <div class="t-page-content-user">
          <div class="t-page-content-portrait"></div>
          <!--非登录状态-->
          <!--<div>-->
            <!--<div class="t-page-content-hello">Hi,你好!</div>-->
            <!--<div class="t-page-content-register">注册领红包</div>-->
            <!--<div class="m-t-10">-->
              <!--<button class="t-page-button-login">登录</button>-->
              <!--<button class="t-page-button-login">注册</button>-->
            <!--</div>-->
          <!--</div>-->
          <!--登录状态-->
          <div>
            <div class="t-page-content-iphone">Hi,你好!</div>
            <div class="t-page-content-entrust">
              <div class="t-page-content-list">
                <div class="t-page-content-number">1</div>
                <div class="t-page-content-zi">新委托</div>
              </div>
              <div class="t-page-content-list">
                <div class="t-page-content-number">1</div>
                <div class="t-page-content-zi">新预约</div>
              </div>
              <div class="t-page-content-list">
                <div class="t-page-content-number">1</div>
                <div class="t-page-content-zi">新提问</div>
              </div>
              <div class="t-page-content-list">
                <div class="t-page-content-number">1</div>
                <div class="t-page-content-zi">新订单</div>
              </div>
            </div>
          </div>
        </div>
        <div class="t-page-content-tool"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
        <div class="t-page-content-toolOne"></div>
      </div>
    </div>
    <!--热门专题-->
    <component-assembly class="m-t-10"></component-assembly>
    <component-service class="m-t-10"></component-service>
    444444444444444444444444
  </div>
</div>
</template>

<script type="text/javascript">
import ComponentAssembly from '../componentAssembly/componentAssembly.vue'
import ComponentService from '../componentAssembly/ComponentService.vue'
export default {
  data () {
    return {
      items: [
        'http://cdn.cr-ke.com/agentServices/images/2018/3/1519957890778.jpg',
        'http://cdn.cr-ke.com/agentServices/images/2018/3/1519958294390.jpg',
        'http://cdn.cr-ke.com/agentServices/images/2018/3/1519958144040.jpg',
        'http://cdn.cr-ke.com/agentServices/images/2018/3/1519957890778.jpg'
      ]
    }
  },
  components: {
    ComponentAssembly: ComponentAssembly,
    ComponentService: ComponentService
  }
}
</script>

<style lang="less" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 280px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  @color-38D4D8: #38D4D8;
  .t-page-navigation{
    width: 100%;
    .t-page-content{
      width: 1190px;
      margin: 10px auto 20px;
      .t-page-content-navigation{
        overflow: hidden;
        width: 100%;
        height: 535px;
        .t-page-content-middle{
          overflow: hidden;
          height: 100%;
          width: 890px;
        }
        .t-page-content-side{
          width: 290px;
          height: 100%;
          background-color: white;
          .t-page-content-user{
            padding-top: 20px;
            width:270px;
            height:192px;
            background:rgba(255,255,255,1);
            margin-left: 10px;
            box-shadow: 0px 1px 0px 0px rgba(241,241,241,1)
          }
        }
      }
    }
  }
  .t-page-middle-navigation{
    margin-right: 10px;
    width: 240px;
    .t-page-middle-content{
      margin-bottom: 1px;
      width: 100%;
      height: 84px;
      background-color: @color-38D4D8;
    }
  }
  .t-page-middle-carousel{
    width: 640px;
    .t-middle-carousel{
      width: 100%;
      height: 280px;
      background-color: black;
      margin-bottom: 10px;
    }
    .t-middle-section{
      padding: 2px 0 0 0;
      overflow: hidden;
      height:134px;
      width: 100%;
      .t-middle-section-left{
        padding: 8px 0 0 10px;
        margin-top: 2px;
        width:440px;
        height:132px;
        background:white;
        box-shadow: 0px -2px 0px 0px rgba(56,212,216,1);
        .t-middle-section-major{
          float: left;
          width: 140px;
          height: 114px;
          background-color: #fafafa;
        }
        .t-middle-section-icon{
          float: left;
          margin: 0 0 10px 10px;
          width:130px;
          height:52px;
          background:#fafafa;
        }
      }
      .t-middle-section-right{
        width:190px;
        height:134px;
        background:white;
      }
    }
  }
  .t-middle-headlines{
    overflow: hidden;
    padding: 20px;
    margin-top: 10px;
    float: left;
    width: 100%;
    height: 100px;
    background-color: white;
    .t-middle-headlines-zhiqi{
      float: left;
      width: 140px;
      height: 100%;
      background-color: red;
    }
    .t-middle-headlines-logo{
      margin-right: 14px;
      float: left;
      width: 120px;
      height: 60px;
      background:rgba(250,250,250,1);
    }
    .t-middle-headlines-content{
      float: left;
      width: 500px;
      height: 100%;
      .t-middle-headlines-title{
        font-size:14px;
        color:rgba(51,51,51,1);
        line-height:1;
        margin: 4px 0 6px;
      }
      .t-middle-headlines-content{
        overflow: hidden;
        width:500px;
        height:32px;
        font-size:12px;
        color:rgba(153,153,153,1);
        line-height:16px;
      }
    }
  }
  .t-page-content-tool{
    margin: 10px;
    width:270px;
    height:72px;
    background:rgba(250,250,250,1);
  }
  .t-page-content-toolOne{
    float: left;
    margin-left: 10px;
    margin-bottom: 10px;
    width:60px;
    height:72px;
    background:rgba(250,250,250,1);
  }
  .t-page-content-portrait{
    margin: 0 auto 8px;
    width:48px;
    height:48px;
    border-radius: 50%;
    background: #f1f1f1;
  }
  .t-page-content-hello{
    text-align: center;
    margin-bottom: 24px;
    font-size:12px;
    color: #999999;
    line-height:1;
  }
  .t-page-content-register{
    width:270px;
    height:30px;
    background:rgba(250,250,250,1);
    border-radius: 15px;
    font-size:12px;
    color:rgba(51,51,51,1);
    padding: 5px 0 0 15px;
    line-height:18px;
  }
  .t-page-button-login{
    cursor: pointer;
    outline: none;
    width:130px;
    height:30px;
    background:rgba(56,212,216,1);
    border-radius: 2px;
    font-size:12px;
    color:rgba(255,255,255,1);
    line-height:18px;
  }
  .t-page-content-iphone{
    margin-bottom: 20px;
    font-size:12px;
    text-align: center;
    color:#333333;
    line-height:1;
  }
  .t-page-content-entrust{
    overflow: hidden;
    margin-left: 12px;
    .t-page-content-list{
      float: left;
      width:62px;
      height:84px;
      .t-page-content-number{
        margin: 16px 0 9px;
        width:62px;
        text-align: center;
        font-size:16px;
        color:rgba(216,40,43,1);
        line-height:19px;
      }
      .t-page-content-zi{
        text-align: center;
        font-size:12px;
        color:rgba(51,51,51,1);
        line-height:1;
      }
    }
  }

</style>
