 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

    echarts_2()
    echarts_3()
    echarts_4()
    echarts_5()
    echarts_6()

    function echarts_2() {
            // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        var data = [398747102, 569762373, 671149102, 364060805, 267099877, 671527084, 618732213, 343983592, 301255142, 816694405, 546473842, 293658384]
        var titlename = ['河北',  '江苏', '浙江', '安徽', '福建', '山东', '河南', '湖北', '湖南', '广东', '四川', '云南'];
        option = {
            grid: {
                left: '0',
                top:'0',
                right: '0',
                bottom: '0%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis'
              },
            xAxis: {
                show: false
            },
            yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: { show: false},
                splitLine:{ show: false},
                axisTick:{ show: false},
                axisLabel: {
                    textStyle: {
                        color:'#fff'
                    },
                },
            }, {
                show: false,
                inverse: true,
                data: data,
                axisLabel: {textStyle: {color: '#fff'}},
                axisLine: { show: false},
                splitLine:{ show: false},
                axisTick: { show: false},
            }],
            series: [{
                name: '人次',
                type: 'bar',
                yAxisIndex: 0,
                data: data,
                barWidth: 15,
                itemStyle: {
                    normal: {
                    barBorderRadius: 50,
                        color:'#3bc7a1',
                    }
                },
                label: {
                normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}',
                    textStyle: {color: 'rgba(255,255,255,.5)'}
                    }
                },
            }]
        };
            // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        //实例化对象
        var myChart = echarts.init(document.getElementById('echart3'));

        //指定配置
        var option = {
            
            color:['#00f2f1', '#ed3f35', '#ffeb7b'],
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              textStyle: {
                color:'#4c9bfb'
              },
              right:'10%'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top:'18%',
              show: true,
              borderColor:'#012f4a',
              containLabel: true,
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年','2022年'],
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#4c9bfd'
              },
              axisLine: {
                show: false
              }
            },
            yAxis: {
              type: 'value',
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#4c9bfd'
              },
              axisLine: {
                show: false
              },
              splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
              }
            },
            series: [
              {
                name: '政府卫生支出',
                type: 'line',
                data: [10579.23, 12475.28, 13910.31, 15205.87, 16399.13, 18016.95, 21941.90, 20676.06, 24040.89],
                smooth:true
              },
              {
                name: '社会卫生支出',
                type: 'line',
                data: [13437.75, 16506.71, 19096.68, 22258.81, 25810.78, 29150.57, 30273.67, 34963.26, 38345.67],
                smooth:true
              },
              {
                name: '个人现金卫生支出',
                type: 'line',
                data: [11295.41, 11992.65, 13337.90, 15133.60, 16911.99, 18673.87, 19959.43, 21205.67, 22940.94],
                smooth:true
              }
            ]
          };
        // 使用刚指定的配置项和数据显示图表
        myChart.setOption(option);
        //自适配屏幕大小
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var option = {  
            grid: {
                    left: '0',
                    top: '30',
                    right: '0',
                    bottom: '10',
                    containLabel: true
            },
            legend: {
                top: 0,
                right: '20px',

                textStyle: {
                color: "#fff",
                },

                itemWidth: 10,  // 设置宽度
                itemHeight: 10, // 设置高度
            },

            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
            },

            xAxis: {
                type: 'category',
                data: ["执业医师","技师","药师","注册护士", "其他"],
                axisTick: { //---坐标轴 刻度
                    show: true, //---是否显示
                },

                axisLine: { //---坐标轴 轴线
                    show: true, //---是否显示
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                        width: 1,
                        type: 'dotted',
                    },
                },

                axisLabel: {//X轴文字
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                },
            },

            yAxis: {
                type: 'value',
                splitLine: {//分割线
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                        width: 1,
                        type: 'dotted'
                    }
                },

                axisLabel: {//Y轴刻度值
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                },

                axisLine: { //---坐标轴 轴线
                    show: false, //---是否显示
                },

            },
            series: [{
                name: '城市',
                type: 'bar',
                data: [139894, 47517, 12565, 146179, 57632],
                barWidth: 15,
                barGap: 1, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
                itemStyle: {
                    normal: {
                        barBorderRadius: 50,
                        color: "#446ACF",
                    }
                },
            }, {
                name: '农村',
                type: 'bar',
                data: [119732, 35280, 12219, 118276, 65097],
                barWidth: 15, //柱图宽度
                itemStyle: {

                    normal: { //设置颜色的渐变
                        barBorderRadius: 50,
                        color: "rgb(190, 184, 220)",
                    }
                },
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_5() {
            // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        option = {
            color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
        
            calculable : true,
            series : [
                {
                    type:'pie',
                    radius : [20, 70],
                    center: ["50%", "50%"],
                    roseType : 'area',
                    data:[ 
                        {value:400, name:'临床医疗类'},
                        {value:310, name:'医疗器械'},
                        {value:276, name:'护理类'},
                        {value:202, name:'医学机构'},
                        {value:180, name:'管理类'},
                        {value:104, name:'医技类'},
                        
                    ],
                    label: {
                        normal: {
                            formatter: function(param) {
                                return param.name +'\n' ;
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length:5,
                            length2:15,
                            lineStyle: { width: 1}
                        }
                    },
            
                    itemStyle: {
                        normal: {
                            shadowBlur: 30,
                            shadowColor: 'rgba(0, 0, 0, 0.4)'
                        }
                    },
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_6() {
        var myChart = echarts.init(document.getElementById('echart6'));
        option = {
            radar: {
              // shape: 'circle',
              indicator: [
                { name: '2022年', max: 766.29 },
                { name: '2021年', max: 741.42 },
                { name: '2020年', max: 713.12 },
                { name: '2019年', max: 686.65 },
                { name: '2018年', max: 651.97 },
                { name: '2017年', max: 612.05 }
              ]
            },
            tooltip: {
                trigger: 'item'
            },
            series: [
              {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                  {
                    value: [544.0659, 553.09932, 515.58576, 574.0394, 548.95874, 520.2425],
                    name: '床位使用个数'
                  },
                ],
                itemStyle:{
                    color:'#ffeb7b'
                }
              } 
            ]
          };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})