var re1 = document.getElementById("a1");
var re2 = document.getElementById("a2");
var re3 = document.getElementById("a3");
var re4 = document.getElementById("a4");
var re5 = document.getElementById("a5");


// 添加点击事件监听器
re1.addEventListener("click", function(){
  document.getElementById("main").innerHTML = "<div class='box1'><h3>法律法规及相关规定</h3><br><ul><li><a href='http://www.nhsa.gov.cn/art/2023/9/1art_175_11206.html'>《社会保险经办条例》</a></li><li><a href='http://www.nhsa.gov.cn/art/2020/7/31/art_173_10977.html'>《基本医疗保险用药管理暂行办法》</a></li><li><a href='http://www.nhsa.gov.cn/art/2021/1/8/art_173_10987.html'>《医疗机构医疗保障定点管理暂行办法》</a></li><li><ahref='http://www.nhsa.gov.cn/art/2021/6/11/art_173_10989.html'>《医疗保障行政处罚程序暂行规定》</a></li><li><a href='http://www.nhsa.gov.cn/art/2021/1/8/art_173_10988.html'>《零售药店医疗保障定点管理暂行办法》</a></li><li><a href='http://www.nhsa.gov.cn/art/2022/1/29/art_173_10990.html'>《医疗保障基金使用监督管理举报处理暂行办法》</a></li><li><a href='http://www.nhsa.gov.cn/art/2023/3/14/art_173_10991.html'>《医疗保障基金飞行检查管理暂行办法》</a></li></ul></div><div class='box2'><a href='http://www.nhsa.gov.cn/col/col164/index.html'><img src='images/c1.png' alt=''></a><a href='https://www.gov.cn/zhengce/zczhjd/'><img src='images/c3.jpg' alt=''><a href='http://www.nhsa.gov.cn/col/col157/index.html'><img src='images/c2.png' alt=''></div>";
})

re2.addEventListener("click", function() {
    // 在这里编写刷新页面的逻辑代码
    // 1.实例化对象
    var myChart = echarts.init(document.getElementById("main"));
    // 2.指定配置项和数据
    var option = {
      title: {
        text: "'十四五'全民医疗保障规划",
        textStyle: {
          color: "#fff",
          fontSize:'30',
        },
       left:'center',
       top:'15'
      },
      darkMode:true,
      series: [{
          type: 'wordCloud',
          shape: 'circle',
          keepAspect: false,
  
          //maskImage: maskImage,
  
          left: '10%',
          top: '10%',
          width: '90%',
          height: '90%',
  
          sizeRange: [20, 70],
          rotationRange: [-90,90],
          rotationStep: 15,
  
          gridSize: 8,
          // drawOutOfBound: false,
          // shrinkToFit: false,
          // layoutAnimation: true,
  
          // Global text style
          textStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              fontStyle:'normal',
              color: function () {
                  // Random color
                  return 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                  ].join(',') + ')';
              }
          },
          emphasis: {
              focus: 'self',
  
              textStyle: {
                  textShadowBlur: 10,
                  textShadowColor: '#333'
              }
          },
          // Data is an array. Each array item must have name and value property.
          data: [
          {"name":"集采","value":35.25},
          {"name":"医保码","value":15.87},
          {"name":"DRG","value":29.97},
          {"name":"保险","value":28.03},
          {"name":"三重制度","value":25.60},
          {"name":"国家医保局","value":24.27},
          {"name":"医疗","value":22.64},
          {"name":"DIP","value":19.53},
          {"name":"新农合","value":17.95},
          {"name":"基金监督","value":15.49},
          {"name":"国家医保","value":15.15},
          {"name":"药品目录","value":14.65},
          {"name":"合作机制","value":14.05},
          {"name":"坚持","value":13.35},
          {"name":"多维度","value":12.25},
          {"name":"卫生","value":11.71},
          {"name":"多元","value":10.65},
          {"name":"门诊统筹","value":10.88},
          {"name":"商业医疗","value":10.15},
          {"name":"基层","value":9.13},
          {"name":"共享信息","value":8.65},
          {"name":"便民服务","value":8.04},
          {"name":"两结合三赋能","value":8.43},
          {"name":"体系结构","value":7.65},
          {"name":"改革","value":7.04},
          {"name":"扶贫","value":6.65},
          {"name":"保障","value":6.13},
          {"name":"基础","value":5.75},
          {"name":"高效","value":5.63},
          {"name":"医保","value":5.10},
          {"name":"保底","value":4.65},
          {"name":"长护险","value":3.91},
          {"name":"重治理","value":3.55},
          {"name":"使用效率","value":3.05},
          {"name":"监管","value":2.09},
          {"name":"精准","value":6.19},
          {"name":"救助","value":5.06},
          {"name":"基础性","value":9.09},
          {"name":"综合性","value":8.60},
          {"name":"补充","value":10.88},
          {"name":"强化","value":17.82},
          {"name":"健全","value":12.78},
          {"name":"机制","value":13.48},
          {"name":"十四五","value":24.88},
          {"name":"参保率","value":6.56},
          {"name":"保障网","value":4.36},
          ]
     }]
  } 
    // 3.把配置项给实例对象
    myChart.setOption(option, true);
    
    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
      myChart.resize();
    })
});

re3.addEventListener("click", function() {
// 在这里编写刷新页面的逻辑代码
    var myChart = echarts.init(document.getElementById("main"));
    // 2.指定配置项和数据
    option = {
      title:{
        text: '2023基本医疗保险',
        textStyle: {
          color: "#fff",
          fontSize:'21',

        },
       left:'5',
       top:'5'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: '{a} <br/>{b} : {c}亿元'
      },
      legend: {
        data: ['净收入', '支出', '收入'],
        textStyle: {
          color:'#fff'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value',
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "14"
          },
          splitLine: {
            lineStyle: {
              color:"rgba(255,255,255,.1)"
            }
          },
        },
        
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: {
            show: false
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] ,
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "14"
          },
          splitLine: {
            lineStyle: {
              color:"rgba(255,255,255,.1)"
            }
          },
        },
      ],
      series: [
        {
          name: '净收入',
          type: 'bar',
          label: {
            show: true,
            position: 'inside'
          },
          emphasis: {
            focus: 'series'
          },
          data: [1225.15, 1249.66, 1048.22, -72.91, -51.61, -84.99, -230.58, -24.38, 31.41, 566.4, 794.84, 763.62]
        },
        {
          name: '收入',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [3097.43, 2857.87, 3145.18, 2302.65, 2306.78, 2639.11, 2262.58, 2311.73, 2544.97, 2719.43, 3174.42, 3993.01]
        },
        {
          name: '支出',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'inside'
          },
          emphasis: {
            focus: 'series'
          },
          data: [-1872.28, -1608.21, -2096.96, -2375.56, -2358.39, -2724.1, -2493.16,-2336.11, -2513.56, -2153.03, -2379.58, -3229.39]
        }
      ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
    myChart.resize();
    })
});

re4.addEventListener("click", function() {
  // 在这里编写刷新页面的逻辑代码
      // 1.实例化对象
      var myChart = echarts.init(document.getElementById("main"));
      // 2.指定配置项和数据
      option = {
        title:{
          text: '2022年基本医疗保险参保人数',
          textStyle: {
            color: "#fff",
            fontSize:'21',
  
          },
         left:'5',
         top:'5'
        },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} 万人({d}%)'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: '类型',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 30,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                  { value: 26604, name: '在职职工基本医保' },
                  { value: 9639, name: '退休职工基本医保' },
                  { value: 72056, name: '成年人城乡基本医保' },
                  { value: 1935, name: '大学生城乡基本医保' },
                  { value: 24359, name: '中小学儿童基本医保' }
              ]
            }
          ]
      };
      // 3.把配置项给实例对象
      myChart.setOption(option, true);
  
      // 4.让图表随屏幕自适应
      window.addEventListener('resize', function () {
      myChart.resize();
      })
});

re5.addEventListener("click", function(){
  document.getElementById("main").innerHTML = "<video width='400' controls='controls'><source src='D:/codes/competition/main/images/video~2.mp4' type='video/mp4'></video>";
});


