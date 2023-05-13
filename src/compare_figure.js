import * as echarts from 'echarts'

var chartDom = document.getElementById('main')
var myChart = echarts.init(chartDom)
var option

option = {
  grid: {
    left: 100,
    bottom: 200,
    right: 200
  },
  legend: {
    top: 25
  },
  xAxis: {
    data: ['Substance use disorders', 'Alcohol use disorders', 'Mood disorders', 'Anxiety disorders', 'Anxiety disorder NOS', 'Major depressive disorder', 'Dysthymic disorder', 'Generalized anxiety disorder', 'Mood disorder NOS', 'Psychotic disorders', 'Schizophrenia', 'Organic mental disorders', 'Mood disorder due to GMC', 'Specific phobias', 'Organic mental disorders NOS', 'Bipolar 1 disorder', 'Post-traumatic stress disorder', 'Pain disorder', 'Anxiety disorder due to GMC', 'Obsessive-compulsive disorder'],
    axisLabel: {
      interval: 0, rotate: 45
    },
    name: "Mental Disorder Types"
  },
  yAxis: {
    name: "Prevalence"
  },
  series: [
    {
      type: 'bar',
      data: [5.51, 5.45, 5.84, 2.89, 1.32, 3.15, 1.66, 0.39, 0.72, 1.11, 0.96, 0.68, 0.41, 0.5, 0.24, 0.16, 0.27, 0.04, 0.12, 0.16],
      barGap: '20%',
      barCategoryGap: '40%',
      name: "Rural"
    },
    {
      type: 'bar',
      data: [7.18, 7.17, 4.57, 4.89, 3.45, 1.71, 1.88, 1.05, 0.77, 0.44, 0.32, 0.35, 0.26, 0.17, 0.28, 0.21, 0.13, 0.14, 0.08, 0.03],
      name: "Urban"
    }
  ]
}

option && myChart.setOption(option)
