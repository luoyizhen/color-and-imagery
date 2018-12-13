var BUBBLE_PARAMETERS = {
    "data_file": "output2.csv",
    "report_title": "Overview",
    "width": 600, //940
    "height": 600,//600
    "force_strength": 0.03,
    "force_type": "charge",
    "radius_field": ["提及次数","唐代提及次数"],
    "color": "颜色",
    "numeric_fields": ["Asset Value", "Debt", "唐代提及次数", "宋代提及次数", "Stake"],
    "fill_color": {
        "data_field": "关键词",
        "color_groups": {
            //关键词
            "青牛":"#2e317c",
            "碧潭":"#4e7ca1",
            "碧空":"#126bae",
            "青嶂":"#15559a",
            "翠色":"#1e9eb3",
            "踏青":"#1661ab",
            "暗中":"#131124",
            "碧草":"#5cb3cc",
            "碧海":"#346c9c",
            "丹桂":"#eb3c70",
            "白露":"#eef7f2",
            "白骨":"#e2e1e4",
            "青史":"#428675",
            "青苔":"#1ba784",
            "丹霞":"#cf4813",
            "朱輪":"#f43e06",
            "白浪":"#92b3a5",
            "青草":"#9abeaf",
            "赤城":"#c02c38",
            "白水":"#baccd9",
            "白鳥":"#f8f4ed",
            "金丹":"#f26b1f",
            "丹心":"#eb3c70",
            "李白":"#e2e1e4",
            "朱門":"#ed5126",
            "白衣":"#cdd1d3",
            "赤松":"#82111f",
            "白鷗":"#c0c4c3",
            "金碧":"#bec936",
            "碧落":"#12a182",
            "青眼":"#1a6840",
            "青冥":"#253d24",
            "丹砂":"#f1441d",
            "白石":"#fffef8",
            "青松":"#83a78d",
            "牡丹":"#eb3c70",
            "太白":"#d8e3e7",
            "翡翠":"#20a162",
            "碧玉":"#41b349",
            "白雪":"#fffef9",
            "翰墨":"#310f1b",
            "翠微":"#c6dfc8",
            "青春":"#2c9678",
            "白玉":"#f9f4dc",
            "青天":"#c6e6e8",
            "白首":"#f1f0ed",
            "白頭":"#e2e1e4",
            "白日":"#fffefa",
            "冥冥":"#253d24",
            "青青":"#5dbe8a",
            "丹青":"#2bae85",
            "青山":"#428675"
        }
    },
    "tooltip": [
        {"title": "关键词", "data_field": "关键词"},
        // {"title": "", "data_field": "颜色分类"},
        {"title": "提及次数", "data_field": "提及次数", "format_string" : ",.2r"},
        {"title": "唐代提及次数", "data_field": "唐代提及次数", "format_string": ",.2r"},
        {"title": "宋代提及次数", "data_field": "宋代提及次数", "format_string": ",.2r"},
        {"data_field": "诗句"},
    ],
    "modes": [
        {
            "button_text": "总览",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "按颜色分类",
            "button_id": "region",
            "type": "grid",
            "labels": ["绿", "黑", "红", "白"],
            "grid_dimensions": {"rows": 2, "columns": 2},
            "data_field": "颜色分类"
        },
        {
            "button_text": "按唐宋分类",
            "button_id": "change_vs_net_value",
            "type": "scatterplot",
            "x_data_field": "唐代提及次数",
            "y_data_field": "宋代提及次数",
            "x_format_string": ",.2r",
            "y_format_string": ",.2r"
        },
    ]
};