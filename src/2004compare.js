import * as echarts from 'echarts'

var chartDom = document.getElementById('main')
var myChart = echarts.init(chartDom)
var option

option = {
  grid: {

  },
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 34, name: 'I. DSMIV axis I diagnoses' },
        { value: 30, name: 'II. Substance use disorders' },
        { value: 26, name: 'III. Alcohol use disorders' },
        { value: 22, name: 'IV. Anxiety disorders' },
        { value: 18, name: 'V. Mood disorders' },
      ]
    }
  ]
}

option && myChart.setOption(option)
