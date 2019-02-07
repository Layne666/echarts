$(function () {
    var chart1_data = [10, 52, 200, 334, 390, 330, 220];
    var chart1_xAxis_data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    chart1(chart1_data,chart1_xAxis_data);

    $("#charts").change(function () {
        $("#subtitle").css("display","none");
        //echarts.init(document.getElementById('echarts')).dispose();//销毁前一个实例
        echarts.init(document.getElementById('chart')).dispose();
        switch ($(this).val()) {
            case '3':
                chart3();
                break;
            case '2':
                chart2();
                break;
            default:
                $("#subtitle").css("display","block");
                chart1(chart1_data,chart1_xAxis_data);
        }
    });

    $("#day").click(function (e) { 
        echarts.init(document.getElementById('chart')).dispose();
        chart1_data = [200,20,90,140,88,78,112];//动态数据
        chart1_xAxis_data = ['1日','2日','3日','4日','5日','6日','7日'];//动态数据
        chart1(chart1_data,chart1_xAxis_data);
    });
    $("#month").click(function (e) { 
        echarts.init(document.getElementById('chart')).dispose();
        chart1_data = [20,120,190,300,188,178,12];
        chart1_xAxis_data = ['6月','7月','8月','9月','10月','11月','12月'];
        chart1(chart1_data,chart1_xAxis_data);
    });
    $("#year").click(function (e) { 
        echarts.init(document.getElementById('chart')).dispose();
        chart1_data = [300,220,190,40,28,278,212];
        chart1_xAxis_data = ['2012','2013','2014','2015','2016','2017','2018'];
        chart1(chart1_data,chart1_xAxis_data);
    });
});

function chart1(chart1_data,chart1_xAxis_data) {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('chart'));
    var option1 = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    name:'柱状图',
                    pixelRatio:2
                }
            }
        },
        xAxis: [{
            type: 'category',
            data: chart1_xAxis_data,
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data:chart1_data
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
}


function chart2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById('chart'));
    var option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    name:'饼状图',
                    pixelRatio:2
                }
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 335,
                    name: '直接访问'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 135,
                    name: '视频广告'
                },
                {
                    value: 1548,
                    name: '搜索引擎'
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
}

function chart3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart3 = echarts.init(document.getElementById('chart'));
    var option3 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    name:'折线图',
                    pixelRatio:2
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option3);
}