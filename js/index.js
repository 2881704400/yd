function oneZheAreaColorChangeChart(id,colorInfo) {
	var myChart = echarts.init(document.getElementById(id));

	var xData = [];
	var realData = [];

	for(var i = 1; i <= 24; i++) {
		xData.push(sup(i) + ":00");
		realData.push(20 + Math.ceil(Math.random() * 10 + i));
	}
	console.log(xData)
	var option = {
		title: {
			show:false,
			text: '近30天设备在线情况',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 20,
				color: '#B8B8B8'
			},
			left: '3%',
			top: '2%',
		},
		grid: {
			top: "15%",
			left: '3%',
			right: '4%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			axisTick: {
				show: true,
				inside:true,
				lineStyle: {
					color: '#989DA2',
					width: 2,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#989DA2',
					width: 2,
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14,
					color: '#A4AAAC'
				}
			},
			data: xData
		}],
		yAxis: [{
			type: 'value',
			max: 80,
			axisTick: {
				show: true,
				inside:true,
				lineStyle: {
					color: '#989DA2',
					width: 2,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#989DA2',
					width: 2,
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14,
					color: '#A4AAAC'
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#57617B'
				}
			}
		}],
		series: [{
			type: 'line',
			data: realData,
			showSymbol: false,
			itemStyle: {
				normal: {
					lineStyle: {
						width: 3, //折线宽度
					},
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 1,
						color: colorInfo // 0% 处的颜色
					}, {
						offset: 0,
						color: colorInfo // 100% 处的颜色
					}], false),
					opacity: 0.4
				}
			},
			areaStyle: {
				normal: {
					lineStyle: {
						width: 3, //折线宽度
					},
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 1,
						color: 'rgba(2, 15, 28, 1)' // 0% 处的颜色
					}, {
						offset: 0,
						color: colorInfo // 100% 处的颜色
					}], false)
				}
			},
		}]
	};
	myChart.setOption(option);

	$(window).resize(function() {
		myChart.resize();
	});

	/*var myTimer = setInterval(function() {
		var data0 = option.series[0].data;
		var newData0 = 40 + Math.round(Math.random() * 15);
		option.series[0].data.shift();
		option.series[0].data.push(newData0);
		myChart.setOption(option);
	}, 1000);*/
}

function EightCircleColorChangeChart(id, sum1, value1, sum2, value2, sum3, value3, sum4, value4, sum5, value5, sum6, value6, sum7, value7, sum8, value8) {
	var myChart = echarts.init(document.getElementById(id));
	var textStyles = {
		fontWeight: 'normal',
		align: 'center',
		color: '#8C8F97',
		fontSize: '36',
	}
	var subtextStyles = {
		fontWeight: 'normal',
		color: '#c1c3cd',
		align: 'left',
		fontSize: '20',
	}
	var option = {
		title: [{
			show: true,
			text: 'P1',
			x: '3%',
			y: '17%',
			textStyle: textStyles,
			subtext: '停车位',
			subtextStyle: subtextStyles,
			itemGap: 6
		}, {
			show: true,
			text: 'P2',
			x: '23%',
			y: '17%',
			textStyle: textStyles,
			subtext: '停车位',
			subtextStyle: subtextStyles,
			itemGap: 6
		}, {
			show: true,
			text: 'P3',
			x: '48%',
			y: '17%',
			textStyle: textStyles,
			subtext: '停车位',
			subtextStyle: subtextStyles,
			itemGap: 6
		}, {
			show: true,
			text: 'P4',
			x: '73%',
			y: '17%',
			textStyle: textStyles,
			subtext: '停车位',
			subtextStyle: subtextStyles,
			itemGap: 6
		}, {
			show: true,
			text: 'P5',
			x: '3%',
			y: '60%',
			textStyle: textStyles,
			subtext: '停车位',
			subtextStyle: subtextStyles,
			itemGap: 6
		}, {
			show: true,
			text: 'P6',
			x: '23%',
			y: '60%',
			textStyle: textStyles,
			subtext: '停车位',
			subtextStyle: subtextStyles,
			itemGap: 6
		}, {
			show: true,
			text: 'P7',
			x: '48%',
			y: '60%',
			textStyle: textStyles,
			subtext: '停车位',
			subtextStyle: subtextStyles,
			itemGap: 6
		}, {
			show: true,
			text: 'P8',
			x: '73%',
			y: '60%',
			textStyle: textStyles,
			subtext: '停车位',
			subtextStyle: subtextStyles,
			itemGap: 6
		}],
		color: ['rgba(176, 212, 251, 1)'],
		series: [{
			type: 'pie',
			clockWise: true,
			startAngle: 90,
			radius: ['35%', '36%'],
			center: ['13%', '27%'],
			hoverAnimation: false,
			data: [{
				value: sum1 - value1,
				itemStyle: {
					color: '#1C3343',
					borderColor: '#1C3343',
					borderWidth: 5,
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false
				}
			}, {
				value: value1,
				itemStyle: {
					color: value1 / sum1 > 0.8 ? '#EBD74E' : '#28E597',
					borderColor: value1 / sum1 > 0.8 ? '#EBD74E' : '#28E597',
					borderWidth: 5,
				},
				label: {
					show: true,
					position: 'center',
					formatter: function(params) {
						return params.value + "/" + sum1;
					},
					textStyle: {
						color: '#fff',
						fontWeight: 400,
						fontSize: 24,
					}
				},
				labelLine: {
					show: false
				}
			}]
		}, {
			type: 'pie',
			clockWise: true,
			startAngle: 90,
			radius: ['35%', '36%'],
			center: ['33%', '27%'],
			hoverAnimation: false,
			data: [{
				value: sum2 - value2,
				itemStyle: {
					color: '#1C3343',
					borderColor: '#1C3343',
					borderWidth: 5,
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false
				}
			}, {
				value: value2,
				itemStyle: {
					color: value2 / sum2 > 0.8 ? '#EBD74E' : '#28E597',
					borderColor: value2 / sum2 > 0.8 ? '#EBD74E' : '#28E597',
					borderWidth: 5,
				},
				label: {
					show: true,
					position: 'center',
					formatter: function(params) {
						return params.value + "/" + sum2;
					},
					textStyle: {
						color: '#fff',
						fontWeight: 400,
						fontSize: 24,
					}
				},
				labelLine: {
					show: false
				}
			}]
		}, {
			type: 'pie',
			clockWise: true,
			startAngle: 90,
			radius: ['35%', '36%'],
			center: ['58%', '27%'],
			hoverAnimation: false,
			data: [{
				value: sum3 - value3,
				itemStyle: {
					color: '#1C3343',
					borderColor: '#1C3343',
					borderWidth: 5,
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false
				}
			}, {
				value: value3,
				itemStyle: {
					color: value3 / sum3 > 0.8 ? '#EBD74E' : '#28E597',
					borderColor: value3 / sum3 > 0.8 ? '#EBD74E' : '#28E597',
					borderWidth: 5,
				},
				label: {
					show: true,
					position: 'center',
					formatter: function(params) {
						return params.value + "/" + sum3;
					},
					textStyle: {
						color: '#fff',
						fontWeight: 400,
						fontSize: 24,
					}
				},
				labelLine: {
					show: false
				}
			}]
		}, {
			type: 'pie',
			clockWise: true,
			startAngle: 90,
			radius: ['35%', '36%'],
			center: ['83%', '27%'],
			hoverAnimation: false,
			data: [{
				value: sum4 - value4,
				itemStyle: {
					color: '#1C3343',
					borderColor: '#1C3343',
					borderWidth: 5,
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false
				}
			}, {
				value: value4,
				itemStyle: {
					color: value4 / sum4 > 0.8 ? '#EBD74E' : '#28E597',
					borderColor: value4 / sum4 > 0.8 ? '#EBD74E' : '#28E597',
					borderWidth: 5,
				},
				label: {
					show: true,
					position: 'center',
					formatter: function(params) {
						return params.value + "/" + sum4;
					},
					textStyle: {
						color: '#fff',
						fontWeight: 400,
						fontSize: 24,
					}
				},
				labelLine: {
					show: false
				}
			}]
		}, {
			type: 'pie',
			clockWise: true,
			startAngle: 90,
			radius: ['35%', '36%'],
			center: ['13%', '73%'],
			hoverAnimation: false,
			data: [{
				value: sum5 - value5,
				itemStyle: {
					color: '#1C3343',
					borderColor: '#1C3343',
					borderWidth: 5,
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false
				}
			}, {
				value: value5,
				itemStyle: {
					color: value5 / sum5 > 0.8 ? '#EBD74E' : '#28E597',
					borderColor: value5 / sum5 > 0.8 ? '#EBD74E' : '#28E597',
					borderWidth: 5,
				},
				label: {
					show: true,
					position: 'center',
					formatter: function(params) {
						return params.value + "/" + sum5;
					},
					textStyle: {
						color: '#fff',
						fontWeight: 400,
						fontSize: 24,
					}
				},
				labelLine: {
					show: false
				}
			}]
		}, {
			type: 'pie',
			clockWise: true,
			startAngle: 90,
			radius: ['35%', '36%'],
			center: ['33%', '73%'],
			hoverAnimation: false,
			data: [{
				value: sum6 - value6,
				itemStyle: {
					color: '#1C3343',
					borderColor: '#1C3343',
					borderWidth: 5,
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false
				}
			}, {
				value: value6,
				itemStyle: {
					color: value6 / sum6 > 0.8 ? '#EBD74E' : '#28E597',
					borderColor: value6 / sum6 > 0.8 ? '#EBD74E' : '#28E597',
					borderWidth: 5,
				},
				label: {
					show: true,
					position: 'center',
					formatter: function(params) {
						return params.value + "/" + sum6;
					},
					textStyle: {
						color: '#fff',
						fontWeight: 400,
						fontSize: 24,
					}
				},
				labelLine: {
					show: false
				}
			}]
		}, {
			type: 'pie',
			clockWise: true,
			startAngle: 90,
			radius: ['35%', '36%'],
			center: ['58%', '73%'],
			hoverAnimation: false,
			data: [{
				value: sum7 - value7,
				itemStyle: {
					color: '#1C3343',
					borderColor: '#1C3343',
					borderWidth: 5,
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false
				}
			}, {
				value: value7,
				itemStyle: {
					color: value7 / sum7 > 0.8 ? '#EBD74E' : '#28E597',
					borderColor: value7 / sum7 > 0.8 ? '#EBD74E' : '#28E597',
					borderWidth: 5,
				},
				label: {
					show: true,
					position: 'center',
					formatter: function(params) {
						return params.value + "/" + sum7;
					},
					textStyle: {
						color: '#fff',
						fontWeight: 400,
						fontSize: 24,
					}
				},
				labelLine: {
					show: false
				}
			}]
		}, {
			type: 'pie',
			clockWise: true,
			startAngle: 90,
			radius: ['35%', '36%'],
			center: ['83%', '73%'],
			hoverAnimation: false,
			data: [{
				value: sum8 - value8,
				itemStyle: {
					color: '#1C3343',
					borderColor: '#1C3343',
					borderWidth: 5,
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false
				}
			}, {
				value: value8,
				itemStyle: {
					color: value8 / sum8 > 0.8 ? '#EBD74E' : '#28E597',
					borderColor: value8 / sum8 > 0.8 ? '#EBD74E' : '#28E597',
					borderWidth: 5,
				},
				label: {
					show: true,
					position: 'center',
					formatter: function(params) {
						return params.value + "/" + sum8;
					},
					textStyle: {
						color: '#fff',
						fontWeight: 400,
						fontSize: 24,
					}
				},
				labelLine: {
					show: false
				}
			}]
		}]
	}
	myChart.setOption(option);

	$(window).resize(function() {
		myChart.resize();
	});

	/*var myTimer = setInterval(function() {
		var newData1 = 119 + (10 - Math.ceil(Math.random() * 20));
		var fnewData1 = sum1 - newData1;
		option.series[0].data[1].value = newData1;
		option.series[0].data[0].value = fnewData1;
		option.series[0].data[1].itemStyle.color = newData1 / sum1 > 0.8 ? '#EBD74E' : '#28E597';
		option.series[0].data[1].itemStyle.borderColor = newData1 / sum1 > 0.8 ? '#EBD74E' : '#28E597';

		var newData2 = 126 + (10 - Math.ceil(Math.random() * 20));
		var fnewData2 = sum2 - newData2;
		option.series[1].data[1].value = newData2;
		option.series[1].data[0].value = fnewData2;
		option.series[1].data[1].itemStyle.color = newData2 / sum2 > 0.8 ? '#EBD74E' : '#28E597';
		option.series[1].data[1].itemStyle.borderColor = newData2 / sum2 > 0.8 ? '#EBD74E' : '#28E597';

		var newData3 = 17 + (2 - Math.ceil(Math.random() * 4));
		var fnewData3 = sum3 - newData3;
		option.series[2].data[1].value = newData3;
		option.series[2].data[0].value = fnewData3;
		option.series[2].data[1].itemStyle.color = newData3 / sum3 > 0.8 ? '#EBD74E' : '#28E597';
		option.series[2].data[1].itemStyle.borderColor = newData3 / sum3 > 0.8 ? '#EBD74E' : '#28E597';

		var newData4 = 17 + (2 - Math.ceil(Math.random() * 4));
		var fnewData4 = sum4 - newData4;
		option.series[3].data[1].value = newData4;
		option.series[3].data[0].value = fnewData4;
		option.series[3].data[1].itemStyle.color = newData4 / sum4 > 0.8 ? '#EBD74E' : '#28E597';
		option.series[3].data[1].itemStyle.borderColor = newData4 / sum4 > 0.8 ? '#EBD74E' : '#28E597';

		var newData5 = 119 + (10 - Math.ceil(Math.random() * 20));
		var fnewData5 = sum5 - newData5;
		option.series[4].data[1].value = newData5;
		option.series[4].data[0].value = fnewData5;
		option.series[4].data[1].itemStyle.color = newData5 / sum5 > 0.8 ? '#EBD74E' : '#28E597';
		option.series[4].data[1].itemStyle.borderColor = newData5 / sum5 > 0.8 ? '#EBD74E' : '#28E597';

		var newData6 = 126 + (10 - Math.ceil(Math.random() * 20));
		var fnewData6 = sum6 - newData6;
		option.series[5].data[1].value = newData6;
		option.series[5].data[0].value = fnewData6;
		option.series[5].data[1].itemStyle.color = newData6 / sum6 > 0.8 ? '#EBD74E' : '#28E597';
		option.series[5].data[1].itemStyle.borderColor = newData6 / sum6 > 0.8 ? '#EBD74E' : '#28E597';

		var newData7 = 17 + (2 - Math.ceil(Math.random() * 4));
		var fnewData7 = sum7 - newData7;
		option.series[6].data[1].value = newData7;
		option.series[6].data[0].value = fnewData7;
		option.series[6].data[1].itemStyle.color = newData7 / sum7 > 0.8 ? '#EBD74E' : '#28E597';
		option.series[6].data[1].itemStyle.borderColor = newData7 / sum7 > 0.8 ? '#EBD74E' : '#28E597';

		var newData8 = 17 + (2 - Math.ceil(Math.random() * 4));
		var fnewData8 = sum8 - newData8;
		option.series[7].data[1].value = newData8;
		option.series[7].data[0].value = fnewData8;
		option.series[7].data[1].itemStyle.color = newData8 / sum8 > 0.8 ? '#EBD74E' : '#28E597';
		option.series[7].data[1].itemStyle.borderColor = newData8 / sum8 > 0.8 ? '#EBD74E' : '#28E597';

		myChart.setOption(option);
	}, 1000);*/
}


function liquidFillChangeChart(id,value) {
	var myChart = echarts.init(document.getElementById(id));

	var option = {
		series: [{
			type: 'liquidFill',
			data: [value],
			radius: '66%',
			center: ['50%', '52%'],
			outline: {
				show: false
			},
			backgroundStyle: {
				borderColor: '#17CBFF',
				borderWidth: 0,
				shadowColor: 'rgba(0, 0, 0, 0.4)',
				shadowBlur: 20
			},
			itemStyle: {
				opacity: 0.95,
				shadowBlur: 50,
				color: '#17CBFF',
				shadowColor: 'rgba(0, 0, 0, 0.4)'
			},
			shape: 'path://M100.5,31.8L100.5,31.8C100.5,31.7,100.5,31.7,100.5,31.8L100.5,31.8C100.5,31.7,100.4,31.7,100.5,31.8l0,1L100.5,31.8 C100.4,31.7,100.4,31.7,100.5,31.8L100.5,31.8C100.4,31.7,100.4,31.7,100.5,31.8L100.5,31.8c-1.2,1.2-54.3,55-52.4,89 c0.1,29.4,23.5,53.2,52.3,53.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c28.8,0,52.2-23.8,52.3-53.2C154.7,86.8,101.6,32.9,100.5,31.8z M100.4,165.7C100.4,165.7,100.4,165.7,100.4,165.7L100.4,165.7C100.4,165.7,100.4,165.7,100.4,165.7',
			label: {
				show: false
			}
		}, {
			type: 'liquidFill',
			data: [1],
			radius: '90%',
			amplitude: '0%',
			animationDuration: 0,
			animationDurationUpdate: 0,
			outline: {
				show: false
			},
			backgroundStyle: {
				borderColor: '#17CBFF',
				borderWidth: 0,
				shadowColor: 'rgba(0, 0, 0, 0.4)',
				shadowBlur: 20
			},
			itemStyle: {
				opacity: 0.95,
				shadowBlur: 50,
				color: '#17CBFF',
				shadowColor: 'rgba(0, 0, 0, 0.4)'
			},
			shape: 'path://M100.7,10.1L100.7,10.1C100.7,10.1,100.7,10.1,100.7,10.1L100.7,10.1C100.6,10.1,100.6,10.1,100.7,10.1l0,1.3L100.7,10.1 C100.6,10.1,100.6,10.1,100.7,10.1L100.7,10.1C100.6,10.1,100.6,10.1,100.7,10.1L100.7,10.1c-1.6,1.5-70.2,69.7-67.8,112.7 c0.1,37.2,30.4,67.3,67.6,67.3c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c37.2,0,67.5-30.1,67.6-67.3C170.8,79.9,102.2,11.6,100.7,10.1z M158.1,122.7L158.1,122.7c-0.1,31.6-25.7,57.2-57.3,57.2c0,0-0.1,0-0.1,0v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0-0.1,0-0.1,0 c-31.6,0-57.2-25.6-57.3-57.2h0c-2.2-37.1,57.4-99.2,57.4-99.2c0,0,0,0,0,0v0.1c0,0,0,0,0,0c0,0,0,0,0,0v-0.1c0,0,0,0,0,0 C100.7,23.5,160.6,85.3,158.1,122.7z',
			label: {
				show: false
			}
		}]

	};
	myChart.setOption(option);

	$(window).resize(function() {
		myChart.resize();
	});

	//	var myTimer = setInterval(function() {
	//		var data0 = option.series[0].data;
	//		var newData0 = 1000 + Math.round(Math.random() * 100);
	//		option.series[0].data.shift();
	//		option.series[0].data.push(newData0);
	//		myChart.setOption(option);
	//	}, 1000);
}

function oneZheColorChangeChart(id) {
	var myChart = echarts.init(document.getElementById(id));

	var xData = [];
	var realData = [];

	for(var i = 1; i <= 31; i++) {
		xData.push(sup(i));
		realData.push(1000 + Math.ceil(Math.random() * 100 + i));
	}
	console.log(xData)
	var option = {
		title: {
			text: '近30天设备在线情况',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 20,
				color: '#B8B8B8'
			},
			left: '3%',
			top: '2%',
		},
		grid: {
			top: "20%",
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#989DA2',
					width: 2,
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14,
					color: '#A4AAAC'
				}
			},
			data: xData
		}],
		yAxis: [{
			type: 'value',
			max: 1500,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14,
					color: '#A4AAAC'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#57617B'
				}
			}
		}],
		series: [{
			type: 'line',
			data: realData,
			showSymbol: false,
			itemStyle: {
				normal: {
					lineStyle: {
						width: 3, //折线宽度
					},
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 1,
						color: '#008AEC' // 0% 处的颜色
					}, {
						offset: 0,
						color: '#008AEC' // 100% 处的颜色
					}], false),
					opacity: 0.4
				}
			},
		}]
	};
	myChart.setOption(option);

	$(window).resize(function() {
		myChart.resize();
	});

	/*var myTimer = setInterval(function() {
		var data0 = option.series[0].data;
		var newData0 = 1000 + Math.round(Math.random() * 100);
		option.series[0].data.shift();
		option.series[0].data.push(newData0);
		myChart.setOption(option);
	}, 1000);*/
}

function fourCircleColorChangeChart(id, title) {
	var myChart = echarts.init(document.getElementById(id));
	console.log(title)
	var option = {
		title: {
			show: true,
			text: '正常运行',
			x: 'center',
			y: '50%', 
			textStyle: {
				fontWeight: 'normal',
				color: '#c1c3cd',
				fontSize: '14',
			},
			subtext: '数量',
			subtextStyle: {
				fontWeight: 'normal',
				color: '#c1c3cd',
				fontSize: '14',
			},
			itemGap: 6
		},
		color: ['rgba(176, 212, 251, 1)'],
		legend: {
			show: true,
			itemGap: 0,
			left: 'center',
			bottom: '0%',
			itemWidth: 0,
			itemHeight: 0,
			textStyle: {
				color: '#fff',
				fontSize: 24
			},
			data: [title]
		},
		series: [{
				name: title,
				type: 'pie',
				clockWise: false,
				startAngle: 60,
				radius: ['70%', '71%'],
				center: ['50%', '44%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				},
				hoverAnimation: false,
				data: [{
					value: 96,
					itemStyle: {
						normal: {
							color: { // 完成的圆环的颜色
								colorStops: [{
									offset: 0,
									color: '#367bec' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#00cefc' // 100% 处的颜色
								}],
							},
							borderColor: { // 完成的圆环的颜色
								colorStops: [{
									offset: 0,
									color: '#367bec' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#00cefc' // 100% 处的颜色
								}],
							},
							borderWidth: 8,
						}
					},
					label: {
						show: true,
						position: 'center',
						formatter: "{a|{d}}{b|%}",
						textStyle: {
							color: '#fff',
							fontSize: 40,
						},
						rich: {
							a: {
								padding: [40, 0, 0, 0],
								color: '#fff',
								fontSize: 50,
							},
							b: {
								padding: [40, 0, 20, 5],
								color: '#fff',
								fontSize: 20,
							}
						}
					},
					labelLine: {
						show: false
					}
				}, {
					value: 4,
					itemStyle: {
						normal: {
							color: 'transparent',
						}
					},
					label: {
						show: false,
					},
					labelLine: {
						show: false
					}
				}]
			},
			{
				type: 'pie',
				clockWise: false,
				radius: ['85%', '88%'],
				center: ['50%', '44%'],
				hoverAnimation: false,
				startAngle: 90,
				data: [{
					value: 100,
					itemStyle: {
						normal: {
							color: '#585858'
						}
					},
					label: {
						show: false,
					},
					labelLine: {
						show: false
					}
				}]
			}
		]
	}
	myChart.setOption(option);

	$(window).resize(function() {
		myChart.resize();
	});

	/*var myTimer = setInterval(function() {
		var newData0 = 80 + Math.ceil(Math.random() * 20);
		var newData1 = 100 - newData0;
		option.series[0].data[0].value = newData0;
		option.series[0].data[1].value = newData1;
		myChart.setOption(option);
	}, 1000);*/
}

function twoZhuColorChangeChart(id) {
	var myChart = echarts.init(document.getElementById(id));
	var Color = ['#09E7FC', '#416DE8', '#4C3ED3', '#D92356', '#4C3ED4', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#962e66'];

	var xData = [];
	var realData1 = [];
	var realData2 = [];

	for(var i = 0; i < 24; i++) {
		xData.push(sup(i) + ":00");
		if(i < 15) {
			realData1.push(45 + Math.ceil(Math.random() * 10 + i * 1.5));
			realData2.push(55 + Math.ceil(Math.random() * 5 + i * 1.5));
		} else {
			realData1.push(35 + Math.ceil(Math.random() * 5 + i * 2));
			realData2.push(40 + Math.ceil(Math.random() * 5 + i));
		}
	}

	var option = {
		title: {
			show: false,
			text: '请求数',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 16,
				color: '#F1F1F3'
			},
			left: '6%'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		legend: {
			icon: 'rect',
			itemGap: 50,
			itemWidth: 22,
			itemHeight: 9,
			data: ['CO2', 'TVOC'],
			top: '5%',
			right: '4%',
			textStyle: {
				padding: [0, 0, 0, 5],
				fontSize: 14,
				color: '#FFF'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#989DA2',
					width: 2,
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14,
					color: '#A4AAAC'
				}
			},
			data: xData,
		}],
		yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			max: 150,
			axisLine: {
				show: false,
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14,
					color: '#A4AAAC'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#57617B'
				}
			}
		}],
		series: [{
			name: 'TVOC',
			type: 'bar',
			barWidth: "20%",
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(209, 36, 89, 1)'
					}, {
						offset: 1,
						color: 'rgba(209, 36, 89, 0)'
					}], false)
				}
			},
			data: realData1
		}, {
			name: 'CO2',
			type: 'bar',
			barWidth: "20%",
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(4, 248, 255, 1)'
					}, {
						offset: 0.2,
						color: 'rgba(63, 146, 246, 1)'
					}, {
						offset: 1,
						color: 'rgba(63, 146, 246, 0)'
					}], false)
				}
			},
			data: realData2
		}]
	};
	myChart.setOption(option);

	$(window).resize(function() {
		myChart.resize();
	});

	/*var myTimer = setInterval(function() {
		var data0 = option.series[0].data;
		var data1 = option.series[1].data;
		var newData0 = 65 + Math.round(Math.random() * 15);
		var newData1 = 50 + Math.round(Math.random() * 10);
		option.series[0].data.shift();
		option.series[0].data.push(newData0);
		option.series[1].data.shift();
		option.series[1].data.push(newData1);
		myChart.setOption(option);
	}, 1000);*/
}

function twoZheColorChangeChart(id) {
	var myChart = echarts.init(document.getElementById(id));
	var Color = ['#09E7FC', '#416DE8', '#4C3ED3', '#D92356', '#4C3ED4', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#962e66'];

	var xData = [];
	var realData1 = [];
	var realData2 = [];

	for(var i = 0; i < 24; i++) {
		xData.push(sup(i) + ":00");
		if(i < 15) {
			realData1.push(25 + Math.ceil(Math.random() * 10 + i * 1.5));
			realData2.push(35 + Math.ceil(Math.random() * 5 + i * 1.5));
		} else {
			realData1.push(35 + Math.ceil(Math.random() * 5 + i * 2));
			realData2.push(40 + Math.ceil(Math.random() * 5 + i));
		}
	}

	var option = {
		title: {
			show: false,
			text: '请求数',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 16,
				color: '#F1F1F3'
			},
			left: '6%'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		legend: {
			icon: 'rect',
			itemGap: 50,
			itemWidth: 22,
			itemHeight: 9,
			data: ['PM2.5', 'PM10'],
			top: '5%',
			right: '4%',
			textStyle: {
				padding: [0, 0, 0, 5],
				fontSize: 14,
				color: '#FFF'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#989DA2',
					width: 2,
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14,
					color: '#A4AAAC'
				}
			},
			data: xData,
		}],
		yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			max: 150,
			axisLine: {
				show: false,
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14,
					color: '#A4AAAC'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#57617B'
				}
			}
		}],
		series: [{
			name: 'PM10',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2,
					color: 'rgba(51,184,224,1)'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(51,184,224, 0.4)'
					}, {
						offset: 1,
						color: 'rgba(51,184,224, 0.1)'
					}], false)
				},
			},
			itemStyle: {
				normal: {
					color: 'rgba(51,184,224, 1)'
				}
			},
			data: realData1
		}, {
			name: 'PM2.5',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2,
					color: 'rgba(235,215,78, 1)'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(235,215,78, 0.4)'
					}, {
						offset: 1,
						color: 'rgba(235,215,78, 0.1)'
					}], false)
				}
			},
			itemStyle: {
				normal: {
					color: 'rgba(235,215,78, 1)'
				}
			},
			data: realData2
		}]
	};
	myChart.setOption(option);

	$(window).resize(function() {
		myChart.resize();
	});

	/*var myTimer = setInterval(function() {
		var data0 = option.series[0].data;
		var data1 = option.series[1].data;
		var newData0 = 65 + Math.round(Math.random() * 15);
		var newData1 = 50 + Math.round(Math.random() * 10);
		option.series[0].data.shift();
		option.series[0].data.push(newData0);
		option.series[1].data.shift();
		option.series[1].data.push(newData1);
		myChart.setOption(option);
	}, 1000);*/
}