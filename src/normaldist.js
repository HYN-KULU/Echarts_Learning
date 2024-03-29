import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'value',
        max: 2.5,
        min: -2.5
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '40%']
    },
    grid: {
        right: 10
    },
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
            {
                gt: -1.96,
                lt: 1.96,
                color: 'rgba(0, 0, 180, 0.4)'
            }
        ]
    },
    series: [
        {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: '#5470C6',
                width: 5
            },
            markLine: {
                symbol: ['none', 'none'],
                label: { show: true },
                data: [{ xAxis: -1.96 }, { xAxis: 1.96 }]
            },
            areaStyle: {},
            data: [[-2.5, 0.13803194789255913],
            [-2.375, 0.18719908286976875],
            [-2.25, 0.2499435681123972],
            [-2.125, 0.3285446221692845],
            [-2.0, 0.42516833158763634],
            [-1.875, 0.5416785069446362],
            [-1.75, 0.679417059340145],
            [-1.625, 0.8389680836747522],
            [-1.5, 1.0199258064227916],
            [-1.375, 1.220691358885449],
            [-1.25, 1.4383259259100214],
            [-1.125, 1.6684872637876311],
            [-1.0, 1.9054722647301798],
            [-0.875, 2.1423800541231026],
            [-0.75, 2.371398548247309],
            [-0.625, 2.5842036270394444],
            [-0.5, 2.7724457859755125],
            [-0.375, 2.9282863423894283],
            [-0.25, 3.0449360090459563],
            [-0.125, 3.117144585598392],
            [0.0, 3.141592653589793],
            [0.125, 3.117144585598392],
            [0.25, 3.0449360090459563],
            [0.375, 2.9282863423894283],
            [0.5, 2.7724457859755125],
            [0.625, 2.5842036270394444],
            [0.75, 2.371398548247309],
            [0.875, 2.1423800541231026],
            [1.0, 1.9054722647301798],
            [1.125, 1.6684872637876311],
            [1.25, 1.4383259259100214],
            [1.375, 1.220691358885449],
            [1.5, 1.0199258064227916],
            [1.625, 0.8389680836747522],
            [1.75, 0.679417059340145],
            [1.875, 0.5416785069446362],
            [2.0, 0.42516833158763634],
            [2.125, 0.3285446221692845],
            [2.25, 0.2499435681123972],
            [2.375, 0.18719908286976875],
            [2.5, 0.13803194789255913],
            ]
        }
    ]
};

option && myChart.setOption(option);
