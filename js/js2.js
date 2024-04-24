// 初始化图表实例（只需要初始化一次）  
var myChart = echarts.init(document.getElementById("main"));  
  
// 声明一个变量来存储当前的图表配置  
var currentOption = null;  
  
// 第一个按钮的点击事件  
document.getElementById("a1").addEventListener("click", function() {  
    // Generate data
    let category = [];  
    let barData = [];  
    let lineData = [];  
      
    let startYear = new Date().getFullYear() - 1; // 1年前的年份  
    let startMonth = 0; // 1月  
    let startDay = 1; // 1日  
    let dottedBase = new Date(startYear, startMonth, startDay).getTime(); // 获取1年前的1月1日的时间戳  
      
    // 初始值  
    let currentBarValue = 97;  
    let currentLineValue = 97;  
      
    // 假设我们有15个月份的固定增长量  
    let barGrowthRates = [3, 7, 2, 8, 3, 10, 5, 10, 4, 10, 8, 13, 7, 8, 2]; // barData的每月增长量  
    let lineGrowthRates = [2, 10, 1, 11, 12, 3, 14, 6, 12, 3, 8, 13, 12, 8, 2]; // lineData的每月增长量  
      
    for (let i = 0; i < barGrowthRates.length; i++) { // 遍历15月的所有月份  
      let date = new Date(dottedBase);  
      category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));  
      
      // 计算当前月份的值  
      currentBarValue += barGrowthRates[i];  
      currentLineValue += lineGrowthRates[i];  
      
      // 添加到数据数组中  
      barData.push(currentBarValue);  
      lineData.push(currentLineValue);  
      
      // 下一个月的时间戳  
      dottedBase += 3600 * 24 * 30 * 1000; // 假设每个月30天  
    }  
// option
var option1 = {  
    backgroundColor: 'transparent',  
    tooltip: {  
      trigger: 'axis',  
      axisPointer: {  
        type: 'shadow'  
      }  
    },  
    legend: {  
      data: ['安全性', '质量性'], // 将这里的 'line' 和 'bar' 替换为 '安全性' 和 '质量性'  
      textStyle: {  
        color: '#ccc'  
      }  
    },  
    xAxis: {  
      data: category,  
      axisLine: {  
        lineStyle: {  
          color: '#ccc'  
        }  
      }  
    },  
    yAxis: {  
      splitLine: { show: false },  
      axisLine: {  
        lineStyle: {  
          color: '#ccc'  
        }  
      }  
    },  
    series: [  
      {  
        name: '安全性', // 将这里的 'line' 替换为 '安全性'  
        type: 'bar', // 将 line 类型更改为 bar  
        smooth: false, // bar 类型不需要 smooth 属性  
        showAllSymbol: true,  
        symbol: 'emptyCircle',  
        symbolSize: 15,  
        data: barData // 将这里的数据从 lineData 更改为 barData  
      },  
      {  
        name: '质量性', // 将这里的 'bar' 替换为 '质量性'  
        type: 'line', // 将 bar 类型更改为 line  
        smooth: true,  
        showAllSymbol: true,  
        symbol: 'emptyCircle',  
        symbolSize: 15,  
        data: lineData // 将这里的数据从 barData 更改为 lineData  
      }  
      // 其他的 series 配置保持不变，或者根据需要移除  
    ]  
  };
    updateChart(option1);  
    
    var myChart1 = echarts.init(document.getElementById('main1'));  
    var myChart2 = echarts.init(document.getElementById('main2'));  
    // 声明变量来存储当前图表的配置（如果需要的话）  
    var currentOption1 = null;  
    var currentOption2 = null;  
    // 指定图表的配置项和数据  
    var option4 = {
        title: {  
            text: '医疗器材的市场情况',  
            textStyle: {  
              color: 'white' // 设置标题文字颜色为白色  
            }  
          }, 
        xAxis: {
          data: ['2022-10-24', '2022-12-25', '2023-1-26', '2023-3-27'],
          axisLabel: {
            textStyle: {
                color:'#fff'
            },
        },
        },
        yAxis: {
          axisLabel: {
            textStyle: {
                color:'#fff'
            },
        },
        },
        series: [
          {
            type: 'candlestick',
            data: [
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42]
            ]
          }
        ]
      };
      window.addEventListener('resize', function () {  
        myChart.resize();  
      });
    
    var option5 = {  
      title: {  
        text: '2023年上半年高危器材的使用情况'  ,
        textStyle: {  
            color: 'white' // 设置标题文字颜色为白色  
          }  
      },  
      tooltip: {  
        trigger: 'axis',  
        axisPointer: {  
          type: 'shadow'  
        }  
      },  
      
      xAxis: {  
        data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        axisLabel: {
          textStyle: {
              color:'#fff'
          },
      },  
      },  
      yAxis: {
        axisLabel: {
          textStyle: {
              color:'#fff'
          },
      },
      },  
      series: [{  
        name: '药器用量（单位：万）',  
        type: 'line',  
        data: [161, 189, 152, 160, 178, 160, 182]  ,
        lineStyle: { // 设置线的样式  
          color: 'red' // 设置折线颜色为红色  
      }  
      }]  
    };  
    
    // 使用刚指定的配置项和数据显示图表。  
    myChart1.setOption(option4);  
    myChart2.setOption(option5); 
    updateChart(optionForMain);  
});  
  
// 第二个按钮的点击事件  
document.getElementById("a2").addEventListener("click", function() {  
    setTimeout(function () {
        option2 = {
          legend: {textStyle: {  
            color: 'white' // 设置图例文字颜色为白色  
          }  },
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: [  
                ['product', '2018', '2019', '2020', '2021', '2022', '2023'],  
                ['一类：常规管理足以保证其安全性', 126.5, 102.1, 98.7, 112.1, 107.4, 138.1],  
                ['二类：加以控制的医疗器材', 61.1, 51.4, 55.1, 43.3, 55.8, 68.7],  
                ['三类：植入人体的直接生命体', 19.1, 12.2, 15.5, 20.4, 15.2, 22.5],  
              ]
          },
          xAxis: { 
            type: 'category',
            axisLabel: {
              textStyle: {
                  color:'#fff'
              },
          },
          },
          yAxis: {
             gridIndex: 0,
             axisLabel: {
              textStyle: {
                  color:'#fff'
              },
             },
          },
          grid: { top: '55%' },
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              emphasis: {
                focus: 'self'
              },
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
              }
            }
          ]
        };
        myChart.on('updateAxisPointer', function (event) {
          const xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            });
          }
        });
        myChart.setOption(option);
      });
    updateChart(option2);  
});  
  
// 第三个按钮的点击事件
document.getElementById("a3").addEventListener("click", function() {  
  // 定义图表的配置  
  const upColor = '#ec0000';
const upBorderColor = '#8A0000';
const downColor = '#00da3c';
const downBorderColor = '#008F28';
// Each item: open，close，lowest，highest
const data0 = splitData([
  ['2023/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
  ['2023/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
  ['2023/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
  ['2023/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
  ['2023/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
  ['2023/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
  ['2023/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
  ['2023/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
  ['2023/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
  ['2023/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
  ['2023/3/15', 2269.31, 2278.4, 2250, 2312.08],
  ['2023/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
  ['2023/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
  ['2023/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
  ['2023/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
  ['2023/3/22', 2321.4, 2328.28, 2314.97, 2332],
  ['2023/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
  ['2023/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
  ['2023/3/27', 2299.38, 2301.26, 2289, 2323.48],
  ['2023/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
  ['2023/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
  ['2023/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
  ['2023/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
  ['2023/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
  ['2023/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
  ['2023/4/9', 2143.47, 2225.77, 2143.47, 2234.73],
  ['2023/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
  ['2023/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
  ['2023/4/12', 2218.09, 2206.78, 2204.44, 2226.26],
  ['2023/4/15', 2199.91, 2110.94, 2177.39, 2204.99],
  ['2023/4/16', 2169.63, 2194.85, 2165.78, 2196.43],
  ['2023/4/17', 2195.03, 2193.8, 2178.47, 2197.51],
  ['2023/4/18', 2110.82, 2197.6, 2175.44, 2206.03],
  ['2023/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
  ['2023/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
  ['2023/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
  ['2023/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
  ['2023/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
  ['2023/4/26', 2203.89, 2177.91, 2173.86, 2210.58],
]);
function splitData(rawData) {
  const categoryData = [];
  const values = [];
  for (var i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i]);
  }
  return {
    categoryData: categoryData,
    values: values
  };
}
function calculateMA(dayCount) {
  var result = [];
  for (var i = 0, len = data0.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += +data0.values[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}
option3 = {
    title: {  
        text: '运用数学用法的趋势分析',  
        textStyle: {  
            color: '#ffffff' // 设置为白色  
        }  
    },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['市场对于大件医疗器材的需求', 'DR设备', 'CT扫描仪', '核磁共振成像（MRI）设备', '血液透析机'],
    textStyle: {  
        color: '#ffffff' // 设置为白色  
    },
      right:'5%'
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    data: data0.categoryData,
    boundaryGap: false,
    axisLine: { onZero: false },
    splitLine: { show: false },
    min: 'dataMin',
    max: 'dataMax',
    axisLabel: {
      textStyle: {
          color:'#fff'
      },
  },
  },
  yAxis: {
    scale: true,
    splitArea: {
      show: true
    },
    axisLabel: {
      textStyle: {
          color:'#fff'
      },
  },
  },
  dataZoom: [
    {
      type: 'inside',
      start: 50,
      end: 100
    },
    {
      show: true,
      type: 'slider',
      top: '90%',
      start: 50,
      end: 100
    }
  ],
  series: [
    {
      name: '市场对于大件医疗器材的需求',
      type: 'candlestick',
      data: data0.values,
      itemStyle: {
        color: upColor,
        color0: downColor,
        borderColor: upBorderColor,
        borderColor0: downBorderColor
      },
      markPoint: {
        label: {
          formatter: function (param) {
            return param != null ? Math.round(param.value) + '' : '';
          }
        },
        data: [
          {
            name: 'Mark',
            coord: ['2023/5/31', 2300],
            value: 2300,
            itemStyle: {
              color: 'rgb(41,60,85)'
            }
          },
          {
            name: 'highest value',
            type: 'max',
            valueDim: 'highest'
          },
          {
            name: 'lowest value',
            type: 'min',
            valueDim: 'lowest'
          },
          {
            name: 'average value on close',
            type: 'average',
            valueDim: 'close'
          }
        ],
        tooltip: {
          formatter: function (param) {
            return param.name + '<br>' + (param.data.coord || '');
          }
        }
      },
      markLine: {
        symbol: ['none', 'none'],
        data: [
          [
            {
              name: 'from lowest to highest',
              type: 'min',
              valueDim: 'lowest',
              symbol: 'circle',
              symbolSize: 10,
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            },
            {
              type: 'max',
              valueDim: 'highest',
              symbol: 'circle',
              symbolSize: 10,
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            }
          ],
          {
            name: 'min line on close',
            type: 'min',
            valueDim: 'close'
          },
          {
            name: 'max line on close',
            type: 'max',
            valueDim: 'close'
          }
        ]
      }
    },
    {
      name: 'DR设备',
      type: 'line',
      data: calculateMA(5),
      smooth: true,
      lineStyle: {
        opacity: 0.5
      }
    },
    {
      name: 'CT扫描仪',
      type: 'line',
      data: calculateMA(10),
      smooth: true,
      lineStyle: {
        opacity: 0.5
      }
    },
    {
      name: '核磁共振成像（MRI）设备',
      type: 'line',
      data: calculateMA(20),
      smooth: true,
      lineStyle: {
        opacity: 0.5
      }
    },
    {
      name: '血液透析机',
      type: 'line',
      data: calculateMA(30),
      smooth: true,
      lineStyle: {
        opacity: 0.5
      }
    }
  ]
};
   updateChart(option3);   
});

// 第四个按钮的点击事件
document.getElementById("a4").addEventListener("click", function() {  
    // 定义图表的配置  
    option6 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          data: [
            '研发投入统计',
            '专利申请与授权统计',
            '新产品上市统计',
            '临床试验与注册统计',
            '市场占有率统计',
            '国际合作与交流统计',
            '行业报告与趋势分析',
          ],
          textStyle: {  
            color: '#ffffff' // 设置为白色  
        }  
        },
        series: [
          {
            name: '资金投入量（单位：亿元）',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'inner',
              fontSize: 14
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1548, name: '新产品上市统计' },
              { value: 775, name: '研发投入统计' },
              { value: 679, name: '专利申请与授权统计', selected: true }
            ]
          },
          {
            name: '资金投入量（单位：亿元）',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
              length: 30
            },
            label: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#F6F8FC',
              borderColor: '#8C8D8E',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: '#6E7079',
                  lineHeight: 22,
                  align: 'center'
                },
                hr: {
                  borderColor: '#8C8D8E',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  color: '#4C5058',
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33
                },
                per: {
                  color: '#fff',
                  backgroundColor: '#4C5058',
                  padding: [3, 4],
                  borderRadius: 4
                }
              }
            },
            data: [
              { value: 148, name: '行业报告与趋势分析' },
              { value: 1335, name: '研发投入统计' },
              { value: 1810, name: '临床试验与注册统计' },
              { value: 234, name: '市场占有率统计' },
              { value: 895, name: '国际合作与交流统计' },
            ]
          }
        ]
      };
     updateChart(option6);   
  });

// 第五个按钮的点击事件
document.getElementById("a5").addEventListener("click", function() {  
    // 定义图表的配置  
    option7 = {
        color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
        title: {
          text: '左图为基础医疗图，右图为商业用量图',
          textStyle: {  
            color: '#ffffff' // 设置为白色  
        }  
        },
        legend: {
          right:'5%'
        },
        radar: [
          {
            indicator: [
                { text: '产量' },
                { text: '普及' },
                { text: '成本' },
                { text: '后果' },
                { text: '反映效果' },
            ],
            center: ['25%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            axisName: {
              formatter: '【{value}】',
              color: '#428BD4'
            },
            splitArea: {
              areaStyle: {
                color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)'
              }
            }
          },
          {
            indicator: [
              { text: '产量', max: 150 },
              { text: '普及', max: 150 },
              { text: '成本', max: 150 },
              { text: '后果', max: 120 },
              { text: '反映效果', max: 108 },
              { text: '不良反应', max: 72 }
            ],
            center: ['75%', '50%'],
            radius: 120,
            axisName: {
              color: '#fff',
              backgroundColor: '#666',
              borderRadius: 3,
              padding: [3, 5]
            }
          }
        ],
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000],
                name: '普通医疗器材的生产率',
                label: {  
                    show: true,  
                    color: 'white', // 设置数据标签颜色为白色  
                } 
              },
              {
                value: [60, 5, 0.3, -100, 1500],  
                name: '普通医疗器材的具体使用率', // 这个name不会直接显示颜色，它通常用于图例或提示框  
                label: {    
                    show: true,    
                    color: 'white' // 设置数据点标签颜色为白色  
                },  
                areaStyle: {
                  color: 'rgba(255, 228, 52, 0.6)'
                }
              }
            ]
          },
          {
            type: 'radar',
            radarIndex: 1,
            data: [
              {
                value: [120, 118, 130, 100, 99, 70],
                name: '商业产量',
                label: {  
                    show: true,  
                    color: 'white', // 设置数据标签颜色为白色  
                } ,
                symbol: 'rect',
                symbolSize: 12,
                lineStyle: {
                  type: 'dashed'
                },
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value;
                  }
                }
              },
              {
                value: [100, 93, 50, 90, 70, 60],
                name: '商业淘汰量',
                label: {  
                    show: true,  
                    color: 'white', // 设置数据标签颜色为白色  
                } ,
                areaStyle: {
                  color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: 'rgba(255, 145, 124, 0.1)',
                      offset: 0
                    },
                    {
                      color: 'rgba(255, 145, 124, 0.9)',
                      offset: 1
                    }
                  ])
                }
              }
            ]
          }
        ]
      };
     updateChart(option7);   
  });
// 更新图表配置的函数  
function updateChart(option) {  
    // 清除之前的图表配置（如果有的话）  
    if (currentOption) {  
        myChart.clear();  
    }  
    // 设置新的图表配置  
    myChart.setOption(option);  
    // 保存当前配置  
    currentOption = option;  
}  
  
// 监听窗口大小变化，以调整图表大小  
window.addEventListener('resize', function () {  
    if (currentOption) {  
        // 如果当前有配置，则更新图表大小  
        myChart.resize();  
    }  
});  
  
window.onload = function() {  
  var currentPage = window.location.href;  
  if (currentPage.endsWith('test2.html')) {  
      // 触发'市场需求和趋势分析'按钮的点击事件  
      document.getElementById('a1').click();  
  }  
};
