
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('map'));
    var mapName = 'china';
    var data = [
    
   
     {name: '上海', value: 6308},
     
    
     {name: '重庆', value: 21361},
    
     {name: '北京', value: 10699},
    
     {name: '天津', value: 6076},
     {name: '湖南', value: 55677},
     {name: '湖北', value: 36529},
     {name: '广西', value: 34112},
     {name: '广东', value: 57964},
     {name: '新疆', value: 114},
     {name: '云南', value: 26885},
     {name: '内蒙古', value: 24948},
     {name: '山西', value: 41007},
     {name: '黑龙江', value: 20578},
     {name: '吉林', value: 25344},
     {name: '贵州', value: 29292},
     {name: '新疆', value: 16970},
     {name: '甘肃', value: 25759},
     {name: '海南', value: 6277},
     {name: '宁夏', value: 4571},
     {name: '青海', value: 6408},
     {name: '西藏', value: 6907},
     {name: '江苏', value: 36448},
     {name: '山东', value: 85715},
     {name: '浙江', value: 35120},
     {name: '河南', value: 78536},
     {name: '四川', value: 80249},
     {name: '河北', value: 88162},
     {name: '福建', value: 28693},
     {name: '安徽', value: 29554},
     {name: '辽宁', value: 33051},
     {name: '陕西', value: 34971},
     {name: '江西', value: 36764},
];

    option = {
        //backgroundColor: '#404a59',
        title: {
            text: '2021年全国医疗卫生机构分布',
            x: 'center',
            top:'10px',
            textStyle: {
                fontSize: 24,
                color:'#fff'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var  toolTiphtml = ''
                if(isNaN(params.value)) {
                    toolTiphtml = params.name + '0个'
                }
                else{
                    toolTiphtml = params.name + params.value + '个'
                }
                return toolTiphtml;
            }
        },
        visualMap: {
            show:true,
            left:'left',
            top: 'bottom',
            seriesIndex:[0],
            type:'piecewise',
            pieces:[
                {min:60000, color:'rgb(250, 127, 111)'},
                {min:45000, max:60000, color:'rgb(142, 207, 201)'},
                {min:30000, max:45000, color:'rgb(255, 190, 122)'},
                {min:15000, max:30000, color:'rgb(130, 176, 210)'},
                {min:0, max:15000, color:'rgb(190, 184, 220)'},
            ],
            textStyle: {
                color:'#000000'
            }
        },
        geo: {
            show: true,
            map: mapName,
            label: {
                normal: {
                    show: true,
                    fontSize: 12
                },
                emphasis: {
                    show: false
                }
            },
            roam: false,
           
            itemStyle: {
                normal: {
                    areaColor: 'rgba(2,37,101,.5)',
                    borderColor: 'rgba(112,187,252,.5)'
                },
                emphasis: {
                    areaColor: 'rgba(2,37,101,.8)'
                }
            }
        },
        series : [
            {
                type: 'map',
                map: mapName,
                geoIndex: 0,
                Animation:false,
                data: data,
            }

        ]
    };
		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

