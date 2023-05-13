import * as echarts from 'echarts'

var chartDom = document.getElementById('main')
var myChart = echarts.init(chartDom)
var option

option = {
  xAxis: {
    name: 'Try number',
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6', '7 or more']
  },
  yAxis: {
    name: 'Probability (%)',
    type: 'value'
  },
  series: [
    {
      data: [0., 6., 23., 35., 24., 7., 1.],
      type: 'bar'
    }
  ]
}

option && myChart.setOption(option)
