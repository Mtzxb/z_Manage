<template>
  <div class="home">
    <!-- 头部轮播 -->
    <el-carousel height="200px" :interval="1000" direction="vertical">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item" style="width: 100%;height: 100%;" />
      </el-carousel-item>
    </el-carousel>
    <div class="home-bottom">
      <div class="home-bottom-left">
        <div ref="chart" class="echarts-dom"></div>
      </div>
      <div class="home-bottom-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      bannerList: [
        'http://192.169.1.139:8094/main/img/banner1.7765b98.png',
        'http://192.169.1.139:8094/main/img/bannertitle_zh.ccbf5d9.png',
        'http://192.169.1.139:8094/main/img/banner2.9dabf91.png'
      ]
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      let myChart = this.$echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>
<style lang="scss">
.home {
  .el-carousel{
    border-radius: 5px;
    margin-bottom: 12px;
  }

  // 底下部分
  .home-bottom{
    display: flex;
    height: calc(100% - 212px);
    .home-bottom-left, .home-bottom-right{
      background-color: #fff;
      padding: 12px;
      border-radius: 5px;
    }
    .home-bottom-left{
      flex: 1;
      
    }
    .home-bottom-right{
      flex: 0 0 240px;
      margin-left: 12px;
    }
  }
  .echarts-dom {
    width: 100%;
    height: 300px;
  }
}
</style>