<template>
<div class="t-assembly-content">
  <div class="t-assembly-title">
    <div class="t-assembly-name t-left">热门专题</div>
    <div class="t-assembly-mord t-right">查看更多</div>
  </div>
  <div class="t-assembly">
    <div class="t-assembly-large"></div>
    <div class="t-assembly-in"></div>
    <div class="t-assembly-in"></div>
    <div class="t-assembly-in"></div>
    <div class="t-assembly-in"></div>
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

<style lang="less" scoped>
  .t-assembly-content{
    padding: 0 20px;
    width:100%;
    height:450px;
    background:white;
    .t-assembly-title{
      overflow: hidden;
      width: 100%;
      padding: 19px 0;
      height:60px;
      font-size:16px;
      color:rgba(102,102,102,1);
      line-height:22px;
      .t-assembly-name{
        font-size:20px;
        color:rgba(32,158,168,1);
        line-height:23px;
      }
      .t-assembly-mord{
        font-size:16px;
        color:rgba(102,102,102,1);
        line-height:22px;
      }
    }
    .t-assembly{
      box-sizing: border-box;
      /*border-left: 1px solid #F1F1F1;*/
      border-top: 1px solid #F1F1F1;
    }
    .t-assembly-large{
      float: left;
      width:350px;
      height:350px;
      box-sizing: border-box;
      border-left: 1px solid #F1F1F1;
      border-right: 1px solid #F1F1F1;
      border-bottom: 1px solid #F1F1F1;
    }
    .t-assembly-in{
      box-sizing: border-box;
      float: left;
      width:400px;
      height:175px; ;
      border-right: 1px solid #F1F1F1;
      border-bottom: 1px solid #F1F1F1;
    }
  }
</style>
