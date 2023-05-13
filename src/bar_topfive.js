import * as echarts from 'echarts'

var chartDom = document.getElementById('main')
var myChart = echarts.init(chartDom)
var option

option = {
  grid: {
    bottom: 200,
    left: 100,
    right: 200
  },
  xAxis: {
    name: 'Mental Disorders Types',
    type: 'category',
    data: ['Bipolar I disorder', 'Bipolar II disorder', 'Other bipolar disorders', 'Major depressive disorder', 'Dysthymic disorder', 'Mood disorder NOS', 'Anxiety disorders', 'Panic disorder', 'Agoraphobia without panic', 'Social phobia', 'Specific phobias', 'Obsessive-compulsive disorder', 'Post-traumatic stress disorder', 'Generalized anxiety disorder', 'Anxiety disorder NOS', 'Substance use disorders', 'Alcohol use disorders', 'Drug use disorders', 'Other substance use disorders', 'Others'],
    axisLabel: {
      interval: 0, rotate: 45
    }

  },
  yAxis: {
    type: 'value',
    name: 'Urban Adjusted Prevalence'
  },
  // legend: {
  //   orient: 'horizontal',
  //   top: 10,
  //   right: 200
  // },
  series: [
    {
      data: [
        {
          value: 7.17,
          itemStyle: {
            color: '#91cc75',
          }
        }, {
          value: 4.89,
          itemStyle: {
            color: '#91cc75',
          }
        }, {
          value: 4.57,
          itemStyle: {
            color: '#91cc75',
          }
        }, {
          value: 3.45,
          itemStyle: {
            color: '#91cc75',
          }
        }, {
          value: 1.88,
          itemStyle: {
            color: '#91cc75',
          }
        }, 1.71, 1.05, 0.77, 0.44, 0.35, 0.32, 0.28, 0.26, 0.21, 0.17, 0.14, 0.13, 0.1, 0.08, 0.03],
      type: 'bar',
      name: 'Prevalence'
    }
  ]
}

option && myChart.setOption(option)
