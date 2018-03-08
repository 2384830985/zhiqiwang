<template>
<div class="t-home-herder">
  <div class="home-herder">
    <div class="herder-login t-left">您好,请登录&nbsp;&nbsp;&nbsp;<span>免费注册</span></div>
    <div class="herder-home t-right">执企网首页</div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
  @color-FAFAFA: #fafafa;
  @color-666666: #666666;
  @color-38D4D8: #38D4D8;
  .t-home-herder {
    background-color: @color-FAFAFA;
    width: 100%;
    height: 36px;
    box-shadow: 0px -1px 0px 0px rgba(241,241,241,1);
    .home-herder{
      margin: 0 auto;
      overflow: hidden;
      width: 1190px;
      padding: 9px 0 10px;
      .herder-login{
        font-size:12px;
        color: @color-38D4D8;
        line-height:17px;
        span{
          line-height:17px;
          color: @color-666666;
        }
      }
      .herder-home{
        font-size:12px;
        color: @color-666666;
        line-height:18px;
      }
    }
  }
</style>
