$(function () {
    var chart = document.getElementById('chart');
    $("#ajslstjfx").addClass('tjfx_selected');
    $("#msg").css("display","none");
    var chart1_data = [60,40,70];//70表示Y轴显示的最大值
    var chart1_xAxis_data = ['调解组织', '仲裁机构'];
    chart1(chart,chart1_data,chart1_xAxis_data);

    $("#charts").change(function () {
        $("#subtitle").css("display","none");
        $('#chart').css('width','600px');
        //echarts.init(document.getElementById('echarts')).dispose();//销毁前一个实例
        echarts.init(document.getElementById('chart')).dispose();
        switch ($(this).val()) {
            case '3':
                chart2();
                break;
            case '2':
                $('#chart').css('width','1000px');
                chart1(chart,[10,20,5,10,30,15,5,5],['国有企业','集体企业','港澳台企业','外商投资企业','私营企业','股份制企业','个体工商户','其他']);
                break;
            default:
                chart1(chart,[60,40,70],['调解组织', '仲裁机构']);
        }
    });

    $("#ajslstjfx").click(function (e) {
        echarts.init(document.getElementById('chart2')).dispose();
        $(this).addClass('tjfx_selected').siblings().removeClass('tjfx_selected');
        $("#select").css("display","block");
        $("#msg,#container span").css("display","none");
        $('#chart').css('width','600px');
        echarts.init(document.getElementById('chart')).dispose();
        switch ($("#charts").val()) {
            case '3':
                chart2();
                break;
            case '2':
                $('#chart').css('width','1000px');
                chart1(chart,[10,20,5,10,30,15,5,5],['国有企业','集体企业','港澳台企业','外商投资企业','私营企业','股份制企业','个体工商户','其他']);
                break;
            default:
                chart1(chart,[60,40,70],['调解组织', '仲裁机构']);
        }
    });
    $("#ldzrstjfx").click(function (e) { 
        echarts.init(document.getElementById('chart2')).dispose();
        $(this).addClass('tjfx_selected').siblings().removeClass('tjfx_selected');
        $("#select,#container span").css("display","none");
        $("#msg").css("display","block");
        $('#chart').css('width','600px');
        echarts.init(document.getElementById('chart')).dispose();
        chart1_data = [20,10,5,15,25];
        chart1_xAxis_data = ['调解组织','仲裁机构','本市','外省市'];
        chart1(chart,chart1_data,chart1_xAxis_data);
    });
    $("#ajjastjfx").click(function (e) { 
        $(this).addClass('tjfx_selected').siblings().removeClass('tjfx_selected');
        $("#select").css("display","none");
        $("#msg").css("display","none");
        $('#container span').css("display","inline-block");
        $('#chart').css('width','600px');
        echarts.init(document.getElementById('chart')).dispose();
        chart1_data = [30,25,35];
        chart1_xAxis_data = ['调解组织','仲裁机构'];
        chart1(chart,chart1_data,chart1_xAxis_data);
        var chart2 = document.getElementById('chart2');
        var chart2_data = [30,20,5,10,5];
        var chart2_xAxis_data = ['调解组织','仲裁机构','撤诉','裁决','其他'];
        chart1(chart2,chart2_data,chart2_xAxis_data);
    });
});

function chart1(chart,chart1_data,chart1_xAxis_data) {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(chart);
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
            data: ['制造业', '建筑业', '交通运输、仓储和邮政业', '科学研究、技术服务和地址勘察类','批发和零售业', '住宿和餐饮业','租赁和商务服务类','房地产业','其他']
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
                    name: '制造业'
                },
                {
                    value: 310,
                    name: '建筑业'
                },
                {
                    value: 234,
                    name: '交通运输、仓储和邮政业'
                },
                {
                    value: 335,
                    name: '科学研究、技术服务和地址勘察类'
                },
                {
                    value: 135,
                    name: '批发和零售业'
                },
                {
                    value: 748,
                    name: '住宿和餐饮业'
                },
                {
                    value: 535,
                    name: '租赁和商务服务类'
                },
                {
                    value: 835,
                    name: '房地产业'
                },
                {
                    value: 235,
                    name: '其他'
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
}