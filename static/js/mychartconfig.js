(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('essos', {
        "color": [
            "rgba(255,0,0,0.89)",
            "rgba(181,46,39,0.8)",
            "rgba(118,8,8,0.8)"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#ffffff"
            },
            "subtextStyle": {
                "color": "#aeb4c5"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "2"
            },
            "symbolSize": "6",
            "symbol": "roundRect",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "2"
            },
            "symbolSize": "6",
            "symbol": "roundRect",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "rgba(24,15,15,0.9)"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(24,15,15,0.9)"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(24,15,15,0.9)"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(24,15,15,0.9)"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(24,15,15,0.9)"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(24,15,15,0.9)"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(24,15,15,0.9)"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(24,15,15,0.9)"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#eb8146",
                "color0": "transparent",
                "borderColor": "#d95850",
                "borderColor0": "#58c470",
                "borderWidth": "2"
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(24,15,15,0.9)"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaa"
            },
            "symbolSize": "6",
            "symbol": "roundRect",
            "smooth": false,
            "color": [
                "rgba(255,0,0,0.89)",
                "rgba(181,46,39,0.8)",
                "rgba(118,8,8,0.8)"
            ],
            "label": {
                "color": "#ffffff"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#893448"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#ffb248",
                    "borderColor": "#eb8146",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#893448"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#893448"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#ffb248",
                    "borderColor": "#eb8146",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#893448"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#161515"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#526472"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#161515"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#161515"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#526472"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#161515"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#161515"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#526472"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#161515"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#161515"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#526472"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#161515"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#afbccf"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#893448",
                "width": 1
            },
            "itemStyle": {
                "color": "#893448",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#893448",
                "borderColor": "#893448",
                "borderWidth": 0.5
            },
            "checkpointStyle": {
                "color": "#eb8146",
                "borderColor": "#ffb248"
            },
            "label": {
                "color": "#893448"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#ffb248"
                },
                "controlStyle": {
                    "color": "#893448",
                    "borderColor": "#893448",
                    "borderWidth": 0.5
                },
                "label": {
                    "color": "#893448"
                }
            }
        },
        "visualMap": {
            "color": [
                "#893448",
                "#c92121",
                "#ff1000"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(255,178,72,0.5)",
            "fillerColor": "rgba(255,178,72,0.15)",
            "handleColor": "#ffb248",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333"
            }
        },
        "markPoint": {
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "label": {
                    "color": "#ffffff"
                }
            }
        }
    });
}));
