  //省市区		
	  
	  
	  
var arrAll = [
		{
			label: "选择省份", children: [{label: "请选择"}], type: 1},
		{
			label: "北京",
			children: [
				{label: "请选择", children: []},
				{
					label: "北京",
					children: [{label: "请选择"}, {label: "东城区"}, {label: "西城区"}, {label: "崇文区"}, {label: "宣武区"}, {label: "朝阳区"}, {label: "海淀区"}, {label: "丰台区"}, {label: "石景山区"}, {label: "房山区"}, {label: "通州区"}, {label: "顺义区"}, {label: "昌平区"}, {label: "大兴区"}, {label: "怀柔区"}, {label: "平谷区"}, {label: "门头沟区"}, {label: "密云县"}, {label: "延庆县"}, {label: "其他"}],
					type: 0
				}], type: 1
		},
		{
			label: "广东",
			children: [{label: "请选择", children: []},
				{
					label: "广州",
					children: [{label: "请选择"}, {label: "越秀区"}, {label: "荔湾区"}, {label: "海珠区"}, {label: "天河区"}, {label: "白云区"}, {label: "黄埔区"}, {label: "番禺区"}, {label: "花都区"}, {label: "南沙区"}, {label: "萝岗区"}, {label: "增城市"}, {label: "从化市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "深圳",
					children: [{label: "请选择"}, {label: "福田区"}, {label: "罗湖区"}, {label: "南山区"}, {label: "宝安区"}, {label: "龙岗区"}, {label: "盐田区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "珠海",
					children: [{label: "请选择"}, {label: "香洲区"}, {label: "斗门区"}, {label: "金湾区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "汕头",
					children: [{label: "请选择"}, {label: "金平区"}, {label: "濠江区"}, {label: "龙湖区"}, {label: "潮阳区"}, {label: "潮南区"}, {label: "澄海区"}, {label: "南澳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "韶关",
					children: [{label: "请选择"}, {label: "浈江区"}, {label: "武江区"}, {label: "曲江区"}, {label: "乐昌市"}, {label: "南雄市"}, {label: "始兴县"}, {label: "仁化县"}, {label: "翁源县"}, {label: "新丰县"}, {label: "乳源瑶族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "佛山",
					children: [{label: "请选择"}, {label: "禅城区"}, {label: "南海区"}, {label: "顺德区"}, {label: "三水区"}, {label: "高明区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "江门",
					children: [{label: "请选择"}, {label: "蓬江区"}, {label: "江海区"}, {label: "新会区"}, {label: "恩平市"}, {label: "台山市"}, {label: "开平市"}, {label: "鹤山市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "湛江",
					children: [{label: "请选择"}, {label: "赤坎区"}, {label: "霞山区"}, {label: "坡头区"}, {label: "麻章区"}, {label: "吴川市"}, {label: "廉江市"}, {label: "雷州市"}, {label: "遂溪县"}, {label: "徐闻县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "茂名",
					children: [{label: "请选择"}, {label: "茂南区"}, {label: "茂港区"}, {label: "化州市"}, {label: "信宜市"}, {label: "高州市"}, {label: "电白县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "肇庆",
					children: [{label: "请选择"}, {label: "端州区"}, {label: "鼎湖区"}, {label: "高要市"}, {label: "四会市"}, {label: "广宁县"}, {label: "怀集县"}, {label: "封开县"}, {label: "德庆县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "惠州",
					children: [{label: "请选择"}, {label: "惠城区"}, {label: "惠阳区"}, {label: "博罗县"}, {label: "惠东县"}, {label: "龙门县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "梅州",
					children: [{label: "请选择"}, {label: "梅江区"}, {label: "兴宁市"}, {label: "梅县"}, {label: "大埔县"}, {label: "丰顺县"}, {label: "五华县"}, {label: "平远县"}, {label: "蕉岭县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "汕尾",
					children: [{label: "请选择"}, {label: "城区"}, {label: "陆丰市"}, {label: "海丰县"}, {label: "陆河县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "河源",
					children: [{label: "请选择"}, {label: "源城区"}, {label: "紫金县"}, {label: "龙川县"}, {label: "连平县"}, {label: "和平县"}, {label: "东源县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "阳江",
					children: [{label: "请选择"}, {label: "江城区"}, {label: "阳春市"}, {label: "阳西县"}, {label: "阳东县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "清远",
					children: [{label: "请选择"}, {label: "清城区"}, {label: "英德市"}, {label: "连州市"}, {label: "佛冈县"}, {label: "阳山县"}, {label: "清新县"}, {label: "连山壮族瑶族自治县"}, {label: "连南瑶族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "东莞",
					children: [],
					type: 0
				},
				{
					label: "中山",
					children: [],
					type: 0
				},
				{
					label: "潮州",
					children: [{label: "请选择"}, {label: "湘桥区"}, {label: "潮安县"}, {label: "饶平县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "揭阳",
					children: [{label: "请选择"}, {label: "榕城区"}, {label: "普宁市"}, {label: "揭东县"}, {label: "揭西县"}, {label: "惠来县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "云浮",
					children: [{label: "请选择"}, {label: "云城区"}, {label: "罗定市"}, {label: "云安县"}, {label: "新兴县"}, {label: "郁南县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "上海",
			children: [{label: "请选择", children: []},
				{
					label: "上海",
					children: [{label: "请选择"}, {label: "黄浦区"}, {label: "卢湾区"}, {label: "徐汇区"}, {label: "长宁区"}, {label: "静安区"}, {label: "普陀区"}, {label: "闸北区"}, {label: "虹口区"}, {label: "杨浦区"}, {label: "宝山区"}, {label: "闵行区"}, {label: "嘉定区"}, {label: "松江区"}, {label: "金山区"}, {label: "青浦区"}, {label: "南汇区"}, {label: "奉贤区"}, {label: "浦东新区"}, {label: "崇明县"}, {label: "其他"}],
					type: 0
				}], type: 1
		},
		{
			label: "天津",
			children: [{label: "请选择", children: []},
				{
					label: "天津",
					children: [{label: "请选择"}, {label: "和平区"}, {label: "河东区"}, {label: "河西区"}, {label: "南开区"}, {label: "河北区"}, {label: "红桥区"}, {label: "塘沽区"}, {label: "汉沽区"}, {label: "大港区"}, {label: "东丽区"}, {label: "西青区"}, {label: "北辰区"}, {label: "津南区"}, {label: "武清区"}, {label: "宝坻区"}, {label: "静海县"}, {label: "宁河县"}, {label: "蓟县"}, {label: "其他"}],
					type: 0
				}], type: 1
		},
		{
			label: "重庆",
			children: [{label: "请选择", children: []},
				{
					label: "重庆",
					children: [{label: "请选择"}, {label: "渝中区"}, {label: "大渡口区"}, {label: "江北区"}, {label: "南岸区"}, {label: "北碚区"}, {label: "渝北区"}, {label: "巴南区"}, {label: "长寿区"}, {label: "双桥区"}, {label: "沙坪坝区"}, {label: "万盛区"}, {label: "万州区"}, {label: "涪陵区"}, {label: "黔江区"}, {label: "永川区"}, {label: "合川区"}, {label: "江津区"}, {label: "九龙坡区"}, {label: "南川区"}, {label: "綦江县"}, {label: "潼南县"}, {label: "荣昌县"}, {label: "璧山县"}, {label: "大足县"}, {label: "铜梁县"}, {label: "梁平县"}, {label: "开县"}, {label: "忠县"}, {label: "城口县"}, {label: "垫江县"}, {label: "武隆县"}, {label: "丰都县"}, {label: "奉节县"}, {label: "云阳县"}, {label: "巫溪县"}, {label: "巫山县"}, {label: "石柱土家族自治县"}, {label: "秀山土家族苗族自治县"}, {label: "酉阳土家族苗族自治县"}, {label: "彭水苗族土家族自治县"}, {label: "其他"}],
					type: 0
				}], type: 1
		},
		{
			label: "辽宁",
			children: [{label: "请选择", children: []},
				{
					label: "沈阳",
					children: [{label: "请选择"}, {label: "沈河区"}, {label: "皇姑区"}, {label: "和平区"}, {label: "大东区"}, {label: "铁西区"}, {label: "苏家屯区"}, {label: "东陵区"}, {label: "于洪区"}, {label: "新民市"}, {label: "法库县"}, {label: "辽中县"}, {label: "康平县"}, {label: "新城子区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "大连",
					children: [{label: "请选择"}, {label: "西岗区"}, {label: "中山区"}, {label: "沙河口区"}, {label: "甘井子区"}, {label: "旅顺口区"}, {label: "金州区"}, {label: "瓦房店市"}, {label: "普兰店市"}, {label: "庄河市"}, {label: "长海县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "鞍山",
					children: [{label: "请选择"}, {label: "铁东区"}, {label: "铁西区"}, {label: "立山区"}, {label: "千山区"}, {label: "海城市"}, {label: "台安县"}, {label: "岫岩满族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "抚顺",
					children: [{label: "请选择"}, {label: "顺城区"}, {label: "新抚区"}, {label: "东洲区"}, {label: "望花区"}, {label: "抚顺县"}, {label: "清原满族自治县"}, {label: "新宾满族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "本溪",
					children: [{label: "请选择"}, {label: "平山区"}, {label: "明山区"}, {label: "溪湖区"}, {label: "南芬区"}, {label: "本溪满族自治县"}, {label: "桓仁满族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "丹东",
					children: [{label: "请选择"}, {label: "振兴区"}, {label: "元宝区"}, {label: "振安区"}, {label: "东港市"}, {label: "凤城市"}, {label: "宽甸满族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "锦州",
					children: [{label: "请选择"}, {label: "太和区"}, {label: "古塔区"}, {label: "凌河区"}, {label: "凌海市"}, {label: "黑山县"}, {label: "义县"}, {label: "北宁市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "营口",
					children: [{label: "请选择"}, {label: "站前区"}, {label: "西市区"}, {label: "鲅鱼圈区"}, {label: "老边区"}, {label: "大石桥市"}, {label: "盖州市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "阜新",
					children: [{label: "请选择"}, {label: "海州区"}, {label: "新邱区"}, {label: "太平区"}, {label: "清河门区"}, {label: "细河区"}, {label: "彰武县"}, {label: "阜新蒙古族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "辽阳",
					children: [{label: "请选择"}, {label: "白塔区"}, {label: "文圣区"}, {label: "宏伟区"}, {label: "太子河区"}, {label: "弓长岭区"}, {label: "灯塔市"}, {label: "辽阳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "盘锦",
					children: [{label: "请选择"}, {label: "双台子区"}, {label: "兴隆台区"}, {label: "盘山县"}, {label: "大洼县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "铁岭",
					children: [{label: "请选择"}, {label: "银州区"}, {label: "清河区"}, {label: "调兵山市"}, {label: "开原市"}, {label: "铁岭县"}, {label: "昌图县"}, {label: "西丰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "朝阳",
					children: [{label: "请选择"}, {label: "双塔区"}, {label: "龙城区"}, {label: "凌源市"}, {label: "北票市"}, {label: "朝阳县"}, {label: "建平县"}, {label: "喀喇沁左翼蒙古族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "葫芦岛",
					children: [{label: "请选择"}, {label: "龙港区"}, {label: "南票区"}, {label: "连山区"}, {label: "兴城市"}, {label: "绥中县"}, {label: "建昌县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "江苏",
			children: [{label: "请选择", children: []},
				{
					label: "南京",
					children: [{label: "请选择"}, {label: "玄武区"}, {label: "白下区"}, {label: "秦淮区"}, {label: "建邺区"}, {label: "鼓楼区"}, {label: "下关区"}, {label: "栖霞区"}, {label: "雨花台区"}, {label: "浦口区"}, {label: "江宁区"}, {label: "六合区"}, {label: "溧水县"}, {label: "高淳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "苏州",
					children: [{label: "请选择"}, {label: "金阊区"}, {label: "平江区"}, {label: "沧浪区"}, {label: "虎丘区"}, {label: "吴中区"}, {label: "相城区"}, {label: "常熟市"}, {label: "张家港市"}, {label: "昆山市"}, {label: "吴江市"}, {label: "太仓市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "无锡",
					children: [{label: "请选择"}, {label: "崇安区"}, {label: "南长区"}, {label: "北塘区"}, {label: "滨湖区"}, {label: "锡山区"}, {label: "惠山区"}, {label: "江阴市"}, {label: "宜兴市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "常州",
					children: [{label: "请选择"}, {label: "钟楼区"}, {label: "天宁区"}, {label: "戚墅堰区"}, {label: "新北区"}, {label: "武进区"}, {label: "金坛市"}, {label: "溧阳市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "镇江",
					children: [{label: "请选择"}, {label: "京口区"}, {label: "润州区"}, {label: "丹徒区"}, {label: "丹阳市"}, {label: "扬中市"}, {label: "句容市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "南通",
					children: [{label: "请选择"}, {label: "崇川区"}, {label: "港闸区"}, {label: "通州市"}, {label: "如皋市"}, {label: "海门市"}, {label: "启东市"}, {label: "海安县"}, {label: "如东县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "泰州",
					children: [{label: "请选择"}, {label: "海陵区"}, {label: "高港区"}, {label: "姜堰市"}, {label: "泰兴市"}, {label: "靖江市"}, {label: "兴化市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "扬州",
					children: [{label: "请选择"}, {label: "广陵区"}, {label: "维扬区"}, {label: "邗江区"}, {label: "江都市"}, {label: "仪征市"}, {label: "高邮市"}, {label: "宝应县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "盐城",
					children: [{label: "请选择"}, {label: "亭湖区"}, {label: "盐都区"}, {label: "大丰市"}, {label: "东台市"}, {label: "建湖县"}, {label: "射阳县"}, {label: "阜宁县"}, {label: "滨海县"}, {label: "响水县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "连云港",
					children: [{label: "请选择"}, {label: "新浦区"}, {label: "海州区"}, {label: "连云区"}, {label: "东海县"}, {label: "灌云县"}, {label: "赣榆县"}, {label: "灌南县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "徐州",
					children: [{label: "请选择"}, {label: "云龙区"}, {label: "鼓楼区"}, {label: "九里区"}, {label: "泉山区"}, {label: "贾汪区"}, {label: "邳州市"}, {label: "新沂市"}, {label: "铜山县"}, {label: "睢宁县"}, {label: "沛县"}, {label: "丰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "淮安",
					children: [{label: "请选择"}, {label: "清河区"}, {label: "清浦区"}, {label: "楚州区"}, {label: "淮阴区"}, {label: "涟水县"}, {label: "洪泽县"}, {label: "金湖县"}, {label: "盱眙县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宿迁",
					children: [{label: "请选择"}, {label: "宿城区"}, {label: "宿豫区"}, {label: "沭阳县"}, {label: "泗阳县"}, {label: "泗洪县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "湖北",
			children: [{label: "请选择", children: []},
				{
					label: "武汉",
					children: [{label: "请选择"}, {label: "江岸区"}, {label: "武昌区"}, {label: "江汉区"}, {label: "硚口区"}, {label: "汉阳区"}, {label: "青山区"}, {label: "洪山区"}, {label: "东西湖区"}, {label: "汉南区"}, {label: "蔡甸区"}, {label: "江夏区"}, {label: "黄陂区"}, {label: "新洲区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "黄石",
					children: [{label: "请选择"}, {label: "黄石港区"}, {label: "西塞山区"}, {label: "下陆区"}, {label: "铁山区"}, {label: "大冶市"}, {label: "阳新县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "十堰",
					children: [{label: "请选择"}, {label: "张湾区"}, {label: "茅箭区"}, {label: "丹江口市"}, {label: "郧县"}, {label: "竹山县"}, {label: "房县"}, {label: "郧西县"}, {label: "竹溪县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "荆州",
					children: [{label: "请选择"}, {label: "沙市区"}, {label: "荆州区"}, {label: "洪湖市"}, {label: "石首市"}, {label: "松滋市"}, {label: "监利县"}, {label: "公安县"}, {label: "江陵县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宜昌",
					children: [{label: "请选择"}, {label: "西陵区"}, {label: "伍家岗区"}, {label: "点军区"}, {label: "猇亭区"}, {label: "夷陵区"}, {label: "宜都市"}, {label: "当阳市"}, {label: "枝江市"}, {label: "秭归县"}, {label: "远安县"}, {label: "兴山县"}, {label: "五峰土家族自治县"}, {label: "长阳土家族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "襄樊",
					children: [{label: "请选择"}, {label: "襄城区"}, {label: "樊城区"}, {label: "襄阳区"}, {label: "老河口市"}, {label: "枣阳市"}, {label: "宜城市"}, {label: "南漳县"}, {label: "谷城县"}, {label: "保康县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "鄂州",
					children: [{label: "请选择"}, {label: "鄂城区"}, {label: "华容区"}, {label: "梁子湖区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "荆门",
					children: [{label: "请选择"}, {label: "东宝区"}, {label: "掇刀区"}, {label: "钟祥市"}, {label: "京山县"}, {label: "沙洋县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "孝感",
					children: [{label: "请选择"}, {label: "孝南区"}, {label: "应城市"}, {label: "安陆市"}, {label: "汉川市"}, {label: "云梦县"}, {label: "大悟县"}, {label: "孝昌县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "黄冈",
					children: [{label: "请选择"}, {label: "黄州区"}, {label: "麻城市"}, {label: "武穴市"}, {label: "红安县"}, {label: "罗田县"}, {label: "浠水县"}, {label: "蕲春县"}, {label: "黄梅县"}, {label: "英山县"}, {label: "团风县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "咸宁",
					children: [{label: "请选择"}, {label: "咸安区"}, {label: "赤壁市"}, {label: "嘉鱼县"}, {label: "通山县"}, {label: "崇阳县"}, {label: "通城县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "随州",
					children: [{label: "请选择"}, {label: "曾都区"}, {label: "广水市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "恩施土家族苗族自治州",
					children: [{label: "请选择"}, {label: "恩施市"}, {label: "利川市"}, {label: "建始县"}, {label: "来凤县"}, {label: "巴东县"}, {label: "鹤峰县"}, {label: "宣恩县"}, {label: "咸丰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "仙桃",
					children: [],
					type: 0
				},
				{
					label: "天门",
					children: [],
					type: 0
				},
				{
					label: "潜江",
					children: [],
					type: 0
				},
				{
					label: "神农架林区",
					children: [],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "四川",
			children: [{label: "请选择", children: []},
				{
					label: "成都",
					children: [{label: "请选择"}, {label: "青羊区"}, {label: "锦江区"}, {label: "金牛区"}, {label: "武侯区"}, {label: "成华区"}, {label: "龙泉驿区"}, {label: "青白江区"}, {label: "新都区"}, {label: "温江区"}, {label: "都江堰市"}, {label: "彭州市"}, {label: "邛崃市"}, {label: "崇州市"}, {label: "金堂县"}, {label: "郫县"}, {label: "新津县"}, {label: "双流县"}, {label: "蒲江县"}, {label: "大邑县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "自贡",
					children: [{label: "请选择"}, {label: "大安区"}, {label: "自流井区"}, {label: "贡井区"}, {label: "沿滩区"}, {label: "荣县"}, {label: "富顺县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "攀枝花",
					children: [{label: "请选择"}, {label: "仁和区"}, {label: "米易县"}, {label: "盐边县"}, {label: "东区"}, {label: "西区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "泸州",
					children: [{label: "请选择"}, {label: "江阳区"}, {label: "纳溪区"}, {label: "龙马潭区"}, {label: "泸县"}, {label: "合江县"}, {label: "叙永县"}, {label: "古蔺县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "德阳",
					children: [{label: "请选择"}, {label: "旌阳区"}, {label: "广汉市"}, {label: "什邡市"}, {label: "绵竹市"}, {label: "罗江县"}, {label: "中江县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "绵阳",
					children: [{label: "请选择"}, {label: "涪城区"}, {label: "游仙区"}, {label: "江油市"}, {label: "盐亭县"}, {label: "三台县"}, {label: "平武县"}, {label: "安县"}, {label: "梓潼县"}, {label: "北川羌族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "广元",
					children: [{label: "请选择"}, {label: "元坝区"}, {label: "朝天区"}, {label: "青川县"}, {label: "旺苍县"}, {label: "剑阁县"}, {label: "苍溪县"}, {label: "市中区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "遂宁",
					children: [{label: "请选择"}, {label: "船山区"}, {label: "安居区"}, {label: "射洪县"}, {label: "蓬溪县"}, {label: "大英县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "内江",
					children: [{label: "请选择"}, {label: "市中区"}, {label: "东兴区"}, {label: "资中县"}, {label: "隆昌县"}, {label: "威远县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "乐山",
					children: [{label: "请选择"}, {label: "市中区"}, {label: "五通桥区"}, {label: "沙湾区"}, {label: "金口河区"}, {label: "峨眉山市"}, {label: "夹江县"}, {label: "井研县"}, {label: "犍为县"}, {label: "沐川县"}, {label: "马边彝族自治县"}, {label: "峨边彝族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "南充",
					children: [{label: "请选择"}, {label: "顺庆区"}, {label: "高坪区"}, {label: "嘉陵区"}, {label: "阆中市"}, {label: "营山县"}, {label: "蓬安县"}, {label: "仪陇县"}, {label: "南部县"}, {label: "西充县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "眉山",
					children: [{label: "请选择"}, {label: "东坡区"}, {label: "仁寿县"}, {label: "彭山县"}, {label: "洪雅县"}, {label: "丹棱县"}, {label: "青神县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宜宾",
					children: [{label: "请选择"}, {label: "翠屏区"}, {label: "宜宾县"}, {label: "兴文县"}, {label: "南溪县"}, {label: "珙县"}, {label: "长宁县"}, {label: "高县"}, {label: "江安县"}, {label: "筠连县"}, {label: "屏山县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "广安",
					children: [{label: "请选择"}, {label: "广安区"}, {label: "华蓥市"}, {label: "岳池县"}, {label: "邻水县"}, {label: "武胜县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "达州",
					children: [{label: "请选择"}, {label: "通川区"}, {label: "万源市"}, {label: "达县"}, {label: "渠县"}, {label: "宣汉县"}, {label: "开江县"}, {label: "大竹县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "雅安",
					children: [{label: "请选择"}, {label: "雨城区"}, {label: "芦山县"}, {label: "石棉县"}, {label: "名山县"}, {label: "天全县"}, {label: "荥经县"}, {label: "宝兴县"}, {label: "汉源县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "巴中",
					children: [{label: "请选择"}, {label: "巴州区"}, {label: "南江县"}, {label: "平昌县"}, {label: "通江县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "资阳",
					children: [{label: "请选择"}, {label: "雁江区"}, {label: "简阳市"}, {label: "安岳县"}, {label: "乐至县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "阿坝藏族羌族自治州",
					children: [{label: "请选择"}, {label: "马尔康县"}, {label: "九寨沟县"}, {label: "红原县"}, {label: "汶川县"}, {label: "阿坝县"}, {label: "理县"}, {label: "若尔盖县"}, {label: "小金县"}, {label: "黑水县"}, {label: "金川县"}, {label: "松潘县"}, {label: "壤塘县"}, {label: "茂县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "甘孜藏族自治州",
					children: [{label: "请选择"}, {label: "康定县"}, {label: "丹巴县"}, {label: "炉霍县"}, {label: "九龙县"}, {label: "甘孜县"}, {label: "雅江县"}, {label: "新龙县"}, {label: "道孚县"}, {label: "白玉县"}, {label: "理塘县"}, {label: "德格县"}, {label: "乡城县"}, {label: "石渠县"}, {label: "稻城县"}, {label: "色达县"}, {label: "巴塘县"}, {label: "泸定县"}, {label: "得荣县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "凉山彝族自治州",
					children: [{label: "请选择"}, {label: "西昌市"}, {label: "美姑县"}, {label: "昭觉县"}, {label: "金阳县"}, {label: "甘洛县"}, {label: "布拖县"}, {label: "雷波县"}, {label: "普格县"}, {label: "宁南县"}, {label: "喜德县"}, {label: "会东县"}, {label: "越西县"}, {label: "会理县"}, {label: "盐源县"}, {label: "德昌县"}, {label: "冕宁县"}, {label: "木里藏族自治县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "陕西",
			children: [{label: "请选择", children: []},
				{
					label: "西安",
					children: [{label: "请选择"}, {label: "莲湖区"}, {label: "新城区"}, {label: "碑林区"}, {label: "雁塔区"}, {label: "灞桥区"}, {label: "未央区"}, {label: "阎良区"}, {label: "临潼区"}, {label: "长安区"}, {label: "高陵县"}, {label: "蓝田县"}, {label: "户县"}, {label: "周至县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "铜川",
					children: [{label: "请选择"}, {label: "耀州区"}, {label: "王益区"}, {label: "印台区"}, {label: "宜君县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宝鸡",
					children: [{label: "请选择"}, {label: "渭滨区"}, {label: "金台区"}, {label: "陈仓区"}, {label: "岐山县"}, {label: "凤翔县"}, {label: "陇县"}, {label: "太白县"}, {label: "麟游县"}, {label: "扶风县"}, {label: "千阳县"}, {label: "眉县"}, {label: "凤县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "咸阳",
					children: [{label: "请选择"}, {label: "秦都区"}, {label: "渭城区"}, {label: "杨陵区"}, {label: "兴平市"}, {label: "礼泉县"}, {label: "泾阳县"}, {label: "永寿县"}, {label: "三原县"}, {label: "彬县"}, {label: "旬邑县"}, {label: "长武县"}, {label: "乾县"}, {label: "武功县"}, {label: "淳化县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "渭南",
					children: [{label: "请选择"}, {label: "临渭区"}, {label: "韩城市"}, {label: "华阴市"}, {label: "蒲城县"}, {label: "潼关县"}, {label: "白水县"}, {label: "澄城县"}, {label: "华县"}, {label: "合阳县"}, {label: "富平县"}, {label: "大荔县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "延安",
					children: [{label: "请选择"}, {label: "宝塔区"}, {label: "安塞县"}, {label: "洛川县"}, {label: "子长县"}, {label: "黄陵县"}, {label: "延川县"}, {label: "富县"}, {label: "延长县"}, {label: "甘泉县"}, {label: "宜川县"}, {label: "志丹县"}, {label: "黄龙县"}, {label: "吴起县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "汉中",
					children: [{label: "请选择"}, {label: "汉台区"}, {label: "留坝县"}, {label: "镇巴县"}, {label: "城固县"}, {label: "南郑县"}, {label: "洋县"}, {label: "宁强县"}, {label: "佛坪县"}, {label: "勉县"}, {label: "西乡县"}, {label: "略阳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "榆林",
					children: [{label: "请选择"}, {label: "榆阳区"}, {label: "清涧县"}, {label: "绥德县"}, {label: "神木县"}, {label: "佳县"}, {label: "府谷县"}, {label: "子洲县"}, {label: "靖边县"}, {label: "横山县"}, {label: "米脂县"}, {label: "吴堡县"}, {label: "定边县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "安康",
					children: [{label: "请选择"}, {label: "汉滨区"}, {label: "紫阳县"}, {label: "岚皋县"}, {label: "旬阳县"}, {label: "镇坪县"}, {label: "平利县"}, {label: "石泉县"}, {label: "宁陕县"}, {label: "白河县"}, {label: "汉阴县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "商洛",
					children: [{label: "请选择"}, {label: "商州区"}, {label: "镇安县"}, {label: "山阳县"}, {label: "洛南县"}, {label: "商南县"}, {label: "丹凤县"}, {label: "柞水县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "河北",
			children: [{label: "请选择", children: []},
				{
					label: "石家庄",
					children: [{label: "请选择"}, {label: "长安区"}, {label: "桥东区"}, {label: "桥西区"}, {label: "新华区"}, {label: "裕华区"}, {label: "井陉矿区"}, {label: "鹿泉市"}, {label: "辛集市"}, {label: "藁城市"}, {label: "晋州市"}, {label: "新乐市"}, {label: "深泽县"}, {label: "无极县"}, {label: "赵县"}, {label: "灵寿县"}, {label: "高邑县"}, {label: "元氏县"}, {label: "赞皇县"}, {label: "平山县"}, {label: "井陉县"}, {label: "栾城县"}, {label: "正定县"}, {label: "行唐县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "唐山",
					children: [{label: "请选择"}, {label: "路北区"}, {label: "路南区"}, {label: "古冶区"}, {label: "开平区"}, {label: "丰南区"}, {label: "丰润区"}, {label: "遵化市"}, {label: "迁安市"}, {label: "迁西县"}, {label: "滦南县"}, {label: "玉田县"}, {label: "唐海县"}, {label: "乐亭县"}, {label: "滦县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "秦皇岛",
					children: [{label: "请选择"}, {label: "海港区"}, {label: "山海关区"}, {label: "北戴河区"}, {label: "昌黎县"}, {label: "抚宁县"}, {label: "卢龙县"}, {label: "青龙满族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "邯郸",
					children: [{label: "请选择"}, {label: "邯山区"}, {label: "丛台区"}, {label: "复兴区"}, {label: "峰峰矿区"}, {label: "武安市"}, {label: "邱县"}, {label: "大名县"}, {label: "魏县"}, {label: "曲周县"}, {label: "鸡泽县"}, {label: "肥乡县"}, {label: "广平县"}, {label: "成安县"}, {label: "临漳县"}, {label: "磁县"}, {label: "涉县"}, {label: "永年县"}, {label: "馆陶县"}, {label: "邯郸县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "邢台",
					children: [{label: "请选择"}, {label: "桥东区"}, {label: "桥西区"}, {label: "南宫市"}, {label: "沙河市"}, {label: "临城县"}, {label: "内丘县"}, {label: "柏乡县"}, {label: "隆尧县"}, {label: "任县"}, {label: "南和县"}, {label: "宁晋县"}, {label: "巨鹿县"}, {label: "新河县"}, {label: "广宗县"}, {label: "平乡县"}, {label: "威县"}, {label: "清河县"}, {label: "临西县"}, {label: "邢台县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "保定",
					children: [{label: "请选择"}, {label: "新市区"}, {label: "北市区"}, {label: "南市区"}, {label: "定州市"}, {label: "涿州市"}, {label: "安国市"}, {label: "高碑店市"}, {label: "易县"}, {label: "徐水县"}, {label: "涞源县"}, {label: "顺平县"}, {label: "唐县"}, {label: "望都县"}, {label: "涞水县"}, {label: "高阳县"}, {label: "安新县"}, {label: "雄县"}, {label: "容城县"}, {label: "蠡县"}, {label: "曲阳县"}, {label: "阜平县"}, {label: "博野县"}, {label: "满城县"}, {label: "清苑县"}, {label: "定兴县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "张家口",
					children: [{label: "请选择"}, {label: "桥东区"}, {label: "桥西区"}, {label: "宣化区"}, {label: "下花园区"}, {label: "张北县"}, {label: "康保县"}, {label: "沽源县"}, {label: "尚义县"}, {label: "蔚县"}, {label: "阳原县"}, {label: "怀安县"}, {label: "万全县"}, {label: "怀来县"}, {label: "赤城县"}, {label: "崇礼县"}, {label: "宣化县"}, {label: "涿鹿县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "承德",
					children: [{label: "请选择"}, {label: "双桥区"}, {label: "双滦区"}, {label: "鹰手营子矿区"}, {label: "兴隆县"}, {label: "平泉县"}, {label: "滦平县"}, {label: "隆化县"}, {label: "承德县"}, {label: "丰宁满族自治县"}, {label: "宽城满族自治县"}, {label: "围场满族蒙古族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "沧州",
					children: [{label: "请选择"}, {label: "新华区"}, {label: "运河区"}, {label: "泊头市"}, {label: "任丘市"}, {label: "黄骅市"}, {label: "河间市"}, {label: "献县"}, {label: "吴桥县"}, {label: "沧县"}, {label: "东光县"}, {label: "肃宁县"}, {label: "南皮县"}, {label: "盐山县"}, {label: "青县"}, {label: "海兴县"}, {label: "孟村回族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "廊坊",
					children: [{label: "请选择"}, {label: "安次区"}, {label: "广阳区"}, {label: "霸州市"}, {label: "三河市"}, {label: "香河县"}, {label: "永清县"}, {label: "固安县"}, {label: "文安县"}, {label: "大城县"}, {label: "大厂回族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "衡水",
					children: [{label: "请选择"}, {label: "桃城区"}, {label: "冀州市"}, {label: "深州市"}, {label: "枣强县"}, {label: "武邑县"}, {label: "武强县"}, {label: "饶阳县"}, {label: "安平县"}, {label: "故城县"}, {label: "景县"}, {label: "阜城县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "山西",
			children: [{label: "请选择", children: []},
				{
					label: "太原",
					children: [{label: "请选择"}, {label: "杏花岭区"}, {label: "小店区"}, {label: "迎泽区"}, {label: "尖草坪区"}, {label: "万柏林区"}, {label: "晋源区"}, {label: "古交市"}, {label: "阳曲县"}, {label: "清徐县"}, {label: "娄烦县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "大同",
					children: [{label: "请选择"}, {label: "城区"}, {label: "矿区"}, {label: "南郊区"}, {label: "新荣区"}, {label: "大同县"}, {label: "天镇县"}, {label: "灵丘县"}, {label: "阳高县"}, {label: "左云县"}, {label: "广灵县"}, {label: "浑源县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "阳泉",
					children: [{label: "请选择"}, {label: "城区"}, {label: "矿区"}, {label: "郊区"}, {label: "平定县"}, {label: "盂县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "长治",
					children: [{label: "请选择"}, {label: "城区"}, {label: "郊区"}, {label: "潞城市"}, {label: "长治县"}, {label: "长子县"}, {label: "平顺县"}, {label: "襄垣县"}, {label: "沁源县"}, {label: "屯留县"}, {label: "黎城县"}, {label: "武乡县"}, {label: "沁县"}, {label: "壶关县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "晋城",
					children: [{label: "请选择"}, {label: "城区"}, {label: "高平市"}, {label: "泽州县"}, {label: "陵川县"}, {label: "阳城县"}, {label: "沁水县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "朔州",
					children: [{label: "请选择"}, {label: "朔城区"}, {label: "平鲁区"}, {label: "山阴县"}, {label: "右玉县"}, {label: "应县"}, {label: "怀仁县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "晋中",
					children: [{label: "请选择"}, {label: "榆次区"}, {label: "介休市"}, {label: "昔阳县"}, {label: "灵石县"}, {label: "祁县"}, {label: "左权县"}, {label: "寿阳县"}, {label: "太谷县"}, {label: "和顺县"}, {label: "平遥县"}, {label: "榆社县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "运城",
					children: [{label: "请选择"}, {label: "盐湖区"}, {label: "河津市"}, {label: "永济市"}, {label: "闻喜县"}, {label: "新绛县"}, {label: "平陆县"}, {label: "垣曲县"}, {label: "绛县"}, {label: "稷山县"}, {label: "芮城县"}, {label: "夏县"}, {label: "万荣县"}, {label: "临猗县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "忻州",
					children: [{label: "请选择"}, {label: "忻府区"}, {label: "原平市"}, {label: "代县"}, {label: "神池县"}, {label: "五寨县"}, {label: "五台县"}, {label: "偏关县"}, {label: "宁武县"}, {label: "静乐县"}, {label: "繁峙县"}, {label: "河曲县"}, {label: "保德县"}, {label: "定襄县"}, {label: "岢岚县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "临汾",
					children: [{label: "请选择"}, {label: "尧都区"}, {label: "侯马市"}, {label: "霍州市"}, {label: "汾西县"}, {label: "吉县"}, {label: "安泽县"}, {label: "大宁县"}, {label: "浮山县"}, {label: "古县"}, {label: "隰县"}, {label: "襄汾县"}, {label: "翼城县"}, {label: "永和县"}, {label: "乡宁县"}, {label: "曲沃县"}, {label: "洪洞县"}, {label: "蒲县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "吕梁",
					children: [{label: "请选择"}, {label: "离石区"}, {label: "孝义市"}, {label: "汾阳市"}, {label: "文水县"}, {label: "中阳县"}, {label: "兴县"}, {label: "临县"}, {label: "方山县"}, {label: "柳林县"}, {label: "岚县"}, {label: "交口县"}, {label: "交城县"}, {label: "石楼县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "河南",
			children: [{label: "请选择", children: []},
				{
					label: "郑州",
					children: [{label: "请选择"}, {label: "中原区"}, {label: "金水区"}, {label: "二七区"}, {label: "管城回族区"}, {label: "上街区"}, {label: "惠济区"}, {label: "巩义市"}, {label: "新郑市"}, {label: "新密市"}, {label: "登封市"}, {label: "荥阳市"}, {label: "中牟县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "开封",
					children: [{label: "请选择"}, {label: "鼓楼区"}, {label: "龙亭区"}, {label: "顺河回族区"}, {label: "禹王台区"}, {label: "金明区"}, {label: "开封县"}, {label: "尉氏县"}, {label: "兰考县"}, {label: "杞县"}, {label: "通许县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "洛阳",
					children: [{label: "请选择"}, {label: "西工区"}, {label: "老城区"}, {label: "涧西区"}, {label: "瀍河回族区"}, {label: "洛龙区"}, {label: "吉利区"}, {label: "偃师市"}, {label: "孟津县"}, {label: "汝阳县"}, {label: "伊川县"}, {label: "洛宁县"}, {label: "嵩县"}, {label: "宜阳县"}, {label: "新安县"}, {label: "栾川县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "平顶山",
					children: [{label: "请选择"}, {label: "新华区"}, {label: "卫东区"}, {label: "湛河区"}, {label: "石龙区"}, {label: "汝州市"}, {label: "舞钢市"}, {label: "宝丰县"}, {label: "叶县"}, {label: "郏县"}, {label: "鲁山县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "安阳",
					children: [{label: "请选择"}, {label: "北关区"}, {label: "文峰区"}, {label: "殷都区"}, {label: "龙安区"}, {label: "林州市"}, {label: "安阳县"}, {label: "滑县"}, {label: "内黄县"}, {label: "汤阴县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "鹤壁",
					children: [{label: "请选择"}, {label: "淇滨区"}, {label: "山城区"}, {label: "鹤山区"}, {label: "浚县"}, {label: "淇县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "新乡",
					children: [{label: "请选择"}, {label: "卫滨区"}, {label: "红旗区"}, {label: "凤泉区"}, {label: "牧野区"}, {label: "卫辉市"}, {label: "辉县市"}, {label: "新乡县"}, {label: "获嘉县"}, {label: "原阳县"}, {label: "长垣县"}, {label: "封丘县"}, {label: "延津县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "焦作",
					children: [{label: "请选择"}, {label: "解放区"}, {label: "中站区"}, {label: "马村区"}, {label: "山阳区"}, {label: "沁阳市"}, {label: "孟州市"}, {label: "修武县"}, {label: "温县"}, {label: "武陟县"}, {label: "博爱县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "濮阳",
					children: [{label: "请选择"}, {label: "华龙区"}, {label: "濮阳县"}, {label: "南乐县"}, {label: "台前县"}, {label: "清丰县"}, {label: "范县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "许昌",
					children: [{label: "请选择"}, {label: "魏都区"}, {label: "禹州市"}, {label: "长葛市"}, {label: "许昌县"}, {label: "鄢陵县"}, {label: "襄城县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "漯河",
					children: [{label: "请选择"}, {label: "源汇区"}, {label: "郾城区"}, {label: "召陵区"}, {label: "临颍县"}, {label: "舞阳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "三门峡",
					children: [{label: "请选择"}, {label: "湖滨区"}, {label: "义马市"}, {label: "灵宝市"}, {label: "渑池县"}, {label: "卢氏县"}, {label: "陕县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "南阳",
					children: [{label: "请选择"}, {label: "卧龙区"}, {label: "宛城区"}, {label: "邓州市"}, {label: "桐柏县"}, {label: "方城县"}, {label: "淅川县"}, {label: "镇平县"}, {label: "唐河县"}, {label: "南召县"}, {label: "内乡县"}, {label: "新野县"}, {label: "社旗县"}, {label: "西峡县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "商丘",
					children: [{label: "请选择"}, {label: "梁园区"}, {label: "睢阳区"}, {label: "永城市"}, {label: "宁陵县"}, {label: "虞城县"}, {label: "民权县"}, {label: "夏邑县"}, {label: "柘城县"}, {label: "睢县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "信阳",
					children: [{label: "请选择"}, {label: "浉河区"}, {label: "平桥区"}, {label: "潢川县"}, {label: "淮滨县"}, {label: "息县"}, {label: "新县"}, {label: "商城县"}, {label: "固始县"}, {label: "罗山县"}, {label: "光山县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "周口",
					children: [{label: "请选择"}, {label: "川汇区"}, {label: "项城市"}, {label: "商水县"}, {label: "淮阳县"}, {label: "太康县"}, {label: "鹿邑县"}, {label: "西华县"}, {label: "扶沟县"}, {label: "沈丘县"}, {label: "郸城县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "驻马店",
					children: [{label: "请选择"}, {label: "驿城区"}, {label: "确山县"}, {label: "新蔡县"}, {label: "上蔡县"}, {label: "西平县"}, {label: "泌阳县"}, {label: "平舆县"}, {label: "汝南县"}, {label: "遂平县"}, {label: "正阳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "焦作",
					children: [{label: "请选择"}, {label: "济源市"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "吉林",
			children: [{label: "请选择", children: []},
				{
					label: "长春",
					children: [{label: "请选择"}, {label: "朝阳区"}, {label: "宽城区"}, {label: "二道区"}, {label: "南关区"}, {label: "绿园区"}, {label: "双阳区"}, {label: "九台市"}, {label: "榆树市"}, {label: "德惠市"}, {label: "农安县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "吉林",
					children: [{label: "请选择"}, {label: "船营区"}, {label: "昌邑区"}, {label: "龙潭区"}, {label: "丰满区"}, {label: "舒兰市"}, {label: "桦甸市"}, {label: "蛟河市"}, {label: "磐石市"}, {label: "永吉县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "四平",
					children: [{label: "请选择"}, {label: "铁西区"}, {label: "铁东区"}, {label: "公主岭市"}, {label: "双辽市"}, {label: "梨树县"}, {label: "伊通满族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "辽源",
					children: [{label: "请选择"}, {label: "龙山区"}, {label: "西安区"}, {label: "东辽县"}, {label: "东丰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "通化",
					children: [{label: "请选择"}, {label: "东昌区"}, {label: "二道江区"}, {label: "梅河口市"}, {label: "集安市"}, {label: "通化县"}, {label: "辉南县"}, {label: "柳河县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "白山",
					children: [{label: "请选择"}, {label: "八道江区"}, {label: "江源区"}, {label: "临江市"}, {label: "靖宇县"}, {label: "抚松县"}, {label: "长白朝鲜族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "松原",
					children: [{label: "请选择"}, {label: "宁江区"}, {label: "乾安县"}, {label: "长岭县"}, {label: "扶余县"}, {label: "前郭尔罗斯蒙古族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "白城",
					children: [{label: "请选择"}, {label: "洮北区"}, {label: "大安市"}, {label: "洮南市"}, {label: "镇赉县"}, {label: "通榆县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "延边朝鲜族自治州",
					children: [{label: "请选择"}, {label: "延吉市"}, {label: "图们市"}, {label: "敦化市"}, {label: "龙井市"}, {label: "珲春市"}, {label: "和龙市"}, {label: "安图县"}, {label: "汪清县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "黑龙江",
			children: [{label: "请选择", children: []},
				{
					label: "哈尔滨",
					children: [{label: "请选择"}, {label: "松北区"}, {label: "道里区"}, {label: "南岗区"}, {label: "平房区"}, {label: "香坊区"}, {label: "道外区"}, {label: "呼兰区"}, {label: "阿城区"}, {label: "双城市"}, {label: "尚志市"}, {label: "五常市"}, {label: "宾县"}, {label: "方正县"}, {label: "通河县"}, {label: "巴彦县"}, {label: "延寿县"}, {label: "木兰县"}, {label: "依兰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "齐齐哈尔",
					children: [{label: "请选择"}, {label: "龙沙区"}, {label: "昂昂溪区"}, {label: "铁锋区"}, {label: "建华区"}, {label: "富拉尔基区"}, {label: "碾子山区"}, {label: "梅里斯达斡尔族区"}, {label: "讷河市"}, {label: "富裕县"}, {label: "拜泉县"}, {label: "甘南县"}, {label: "依安县"}, {label: "克山县"}, {label: "泰来县"}, {label: "克东县"}, {label: "龙江县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "鹤岗",
					children: [{label: "请选择"}, {label: "兴山区"}, {label: "工农区"}, {label: "南山区"}, {label: "兴安区"}, {label: "向阳区"}, {label: "东山区"}, {label: "萝北县"}, {label: "绥滨县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "双鸭山",
					children: [{label: "请选择"}, {label: "尖山区"}, {label: "岭东区"}, {label: "四方台区"}, {label: "宝山区"}, {label: "集贤县"}, {label: "宝清县"}, {label: "友谊县"}, {label: "饶河县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "鸡西",
					children: [{label: "请选择"}, {label: "鸡冠区"}, {label: "恒山区"}, {label: "城子河区"}, {label: "滴道区"}, {label: "梨树区"}, {label: "麻山区"}, {label: "密山市"}, {label: "虎林市"}, {label: "鸡东县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "大庆",
					children: [{label: "请选择"}, {label: "萨尔图区"}, {label: "红岗区"}, {label: "龙凤区"}, {label: "让胡路区"}, {label: "大同区"}, {label: "林甸县"}, {label: "肇州县"}, {label: "肇源县"}, {label: "杜尔伯特蒙古族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "伊春",
					children: [{label: "请选择"}, {label: "伊春区"}, {label: "带岭区"}, {label: "南岔区"}, {label: "金山屯区"}, {label: "西林区"}, {label: "美溪区"}, {label: "乌马河区"}, {label: "翠峦区"}, {label: "友好区"}, {label: "上甘岭区"}, {label: "五营区"}, {label: "红星区"}, {label: "新青区"}, {label: "汤旺河区"}, {label: "乌伊岭区"}, {label: "铁力市"}, {label: "嘉荫县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "牡丹江",
					children: [{label: "请选择"}, {label: "爱民区"}, {label: "东安区"}, {label: "阳明区"}, {label: "西安区"}, {label: "绥芬河市"}, {label: "宁安市"}, {label: "海林市"}, {label: "穆棱市"}, {label: "林口县"}, {label: "东宁县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "佳木斯",
					children: [{label: "请选择"}, {label: "向阳区"}, {label: "前进区"}, {label: "东风区"}, {label: "郊区"}, {label: "同江市"}, {label: "富锦市"}, {label: "桦川县"}, {label: "抚远县"}, {label: "桦南县"}, {label: "汤原县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "七台河",
					children: [{label: "请选择"}, {label: "桃山区"}, {label: "新兴区"}, {label: "茄子河区"}, {label: "勃利县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "黑河",
					children: [{label: "请选择"}, {label: "爱辉区"}, {label: "北安市"}, {label: "五大连池市"}, {label: "逊克县"}, {label: "嫩江县"}, {label: "孙吴县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "绥化",
					children: [{label: "请选择"}, {label: "北林区"}, {label: "安达市"}, {label: "肇东市"}, {label: "海伦市"}, {label: "绥棱县"}, {label: "兰西县"}, {label: "明水县"}, {label: "青冈县"}, {label: "庆安县"}, {label: "望奎县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "大兴安岭地区",
					children: [{label: "请选择"}, {label: "呼玛县"}, {label: "塔河县"}, {label: "漠河县"}, {label: "大兴安岭辖区"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "内蒙古",
			children: [{label: "请选择", children: []},
				{
					label: "呼和浩特",
					children: [{label: "请选择"}, {label: "回民区"}, {label: "玉泉区"}, {label: "新城区"}, {label: "赛罕区"}, {label: "托克托县"}, {label: "清水河县"}, {label: "武川县"}, {label: "和林格尔县"}, {label: "土默特左旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "包头",
					children: [{label: "请选择"}, {label: "昆都仑区"}, {label: "青山区"}, {label: "东河区"}, {label: "九原区"}, {label: "石拐区"}, {label: "白云矿区"}, {label: "固阳县"}, {label: "土默特右旗"}, {label: "达尔罕茂明安联合旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "乌海",
					children: [{label: "请选择"}, {label: "海勃湾区"}, {label: "乌达区"}, {label: "海南区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "赤峰",
					children: [{label: "请选择"}, {label: "红山区"}, {label: "元宝山区"}, {label: "松山区"}, {label: "宁城县"}, {label: "林西县"}, {label: "喀喇沁旗"}, {label: "巴林左旗"}, {label: "敖汉旗"}, {label: "阿鲁科尔沁旗"}, {label: "翁牛特旗"}, {label: "克什克腾旗"}, {label: "巴林右旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "通辽",
					children: [{label: "请选择"}, {label: "科尔沁区"}, {label: "霍林郭勒市"}, {label: "开鲁县"}, {label: "科尔沁左翼中旗"}, {label: "科尔沁左翼后旗"}, {label: "库伦旗"}, {label: "奈曼旗"}, {label: "扎鲁特旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "鄂尔多斯",
					children: [{label: "请选择"}, {label: "东胜区"}, {label: "准格尔旗"}, {label: "乌审旗"}, {label: "伊金霍洛旗"}, {label: "鄂托克旗"}, {label: "鄂托克前旗"}, {label: "杭锦旗"}, {label: "达拉特旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "呼伦贝尔",
					children: [{label: "请选择"}, {label: "海拉尔区"}, {label: "满洲里市"}, {label: "牙克石市"}, {label: "扎兰屯市"}, {label: "根河市"}, {label: "额尔古纳市"}, {label: "陈巴尔虎旗"}, {label: "阿荣旗"}, {label: "新巴尔虎左旗"}, {label: "新巴尔虎右旗"}, {label: "鄂伦春自治旗"}, {label: "莫力达瓦达斡尔族自治旗"}, {label: "鄂温克族自治旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "巴彦淖尔",
					children: [{label: "请选择"}, {label: "临河区"}, {label: "五原县"}, {label: "磴口县"}, {label: "杭锦后旗"}, {label: "乌拉特中旗"}, {label: "乌拉特前旗"}, {label: "乌拉特后旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "乌兰察布",
					children: [{label: "请选择"}, {label: "集宁区"}, {label: "丰镇市"}, {label: "兴和县"}, {label: "卓资县"}, {label: "商都县"}, {label: "凉城县"}, {label: "化德县"}, {label: "四子王旗"}, {label: "察哈尔右翼前旗"}, {label: "察哈尔右翼中旗"}, {label: "察哈尔右翼后旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "锡林郭勒盟",
					children: [{label: "请选择"}, {label: "锡林浩特市"}, {label: "二连浩特市"}, {label: "多伦县"}, {label: "阿巴嘎旗"}, {label: "西乌珠穆沁旗"}, {label: "东乌珠穆沁旗"}, {label: "苏尼特左旗"}, {label: "苏尼特右旗"}, {label: "太仆寺旗"}, {label: "正镶白旗"}, {label: "正蓝旗"}, {label: "镶黄旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "兴安盟",
					children: [{label: "请选择"}, {label: "乌兰浩特市"}, {label: "阿尔山市"}, {label: "突泉县"}, {label: "扎赉特旗"}, {label: "科尔沁右翼前旗"}, {label: "科尔沁右翼中旗"}, {label: "其他"}],
					type: 0
				},
				{
					label: "阿拉善盟",
					children: [{label: "请选择"}, {label: "阿拉善左旗"}, {label: "阿拉善右旗"}, {label: "额济纳旗"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "山东",
			children: [{label: "请选择", children: []},
				{
					label: "济南",
					children: [{label: "请选择"}, {label: "市中区"}, {label: "历下区"}, {label: "天桥区"}, {label: "槐荫区"}, {label: "历城区"}, {label: "长清区"}, {label: "章丘市"}, {label: "平阴县"}, {label: "济阳县"}, {label: "商河县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "青岛",
					children: [{label: "请选择"}, {label: "市南区"}, {label: "市北区"}, {label: "城阳区"}, {label: "四方区"}, {label: "李沧区"}, {label: "黄岛区"}, {label: "崂山区"}, {label: "胶南市"}, {label: "胶州市"}, {label: "平度市"}, {label: "莱西市"}, {label: "即墨市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "淄博",
					children: [{label: "请选择"}, {label: "张店区"}, {label: "临淄区"}, {label: "淄川区"}, {label: "博山区"}, {label: "周村区"}, {label: "桓台县"}, {label: "高青县"}, {label: "沂源县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "枣庄",
					children: [{label: "请选择"}, {label: "市中区"}, {label: "山亭区"}, {label: "峄城区"}, {label: "台儿庄区"}, {label: "薛城区"}, {label: "滕州市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "东营",
					children: [{label: "请选择"}, {label: "东营区"}, {label: "河口区"}, {label: "垦利县"}, {label: "广饶县"}, {label: "利津县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "烟台",
					children: [{label: "请选择"}, {label: "芝罘区"}, {label: "福山区"}, {label: "牟平区"}, {label: "莱山区"}, {label: "龙口市"}, {label: "莱阳市"}, {label: "莱州市"}, {label: "招远市"}, {label: "蓬莱市"}, {label: "栖霞市"}, {label: "海阳市"}, {label: "长岛县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "潍坊",
					children: [{label: "请选择"}, {label: "潍城区"}, {label: "寒亭区"}, {label: "坊子区"}, {label: "奎文区"}, {label: "青州市"}, {label: "诸城市"}, {label: "寿光市"}, {label: "安丘市"}, {label: "高密市"}, {label: "昌邑市"}, {label: "昌乐县"}, {label: "临朐县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "济宁",
					children: [{label: "请选择"}, {label: "市中区"}, {label: "任城区"}, {label: "曲阜市"}, {label: "兖州市"}, {label: "邹城市"}, {label: "鱼台县"}, {label: "金乡县"}, {label: "嘉祥县"}, {label: "微山县"}, {label: "汶上县"}, {label: "泗水县"}, {label: "梁山县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "泰安",
					children: [{label: "请选择"}, {label: "泰山区"}, {label: "岱岳区"}, {label: "新泰市"}, {label: "肥城市"}, {label: "宁阳县"}, {label: "东平县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "威海",
					children: [{label: "请选择"}, {label: "环翠区"}, {label: "乳山市"}, {label: "文登市"}, {label: "荣成市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "日照",
					children: [{label: "请选择"}, {label: "东港区"}, {label: "岚山区"}, {label: "五莲县"}, {label: "莒县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "莱芜",
					children: [{label: "请选择"}, {label: "莱城区"}, {label: "钢城区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "临沂",
					children: [{label: "请选择"}, {label: "兰山区"}, {label: "罗庄区"}, {label: "河东区"}, {label: "沂南县"}, {label: "郯城县"}, {label: "沂水县"}, {label: "苍山县"}, {label: "费县"}, {label: "平邑县"}, {label: "莒南县"}, {label: "蒙阴县"}, {label: "临沭县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "德州",
					children: [{label: "请选择"}, {label: "德城区"}, {label: "乐陵市"}, {label: "禹城市"}, {label: "陵县"}, {label: "宁津县"}, {label: "齐河县"}, {label: "武城县"}, {label: "庆云县"}, {label: "平原县"}, {label: "夏津县"}, {label: "临邑县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "聊城",
					children: [{label: "请选择"}, {label: "东昌府区"}, {label: "临清市"}, {label: "高唐县"}, {label: "阳谷县"}, {label: "茌平县"}, {label: "莘县"}, {label: "东阿县"}, {label: "冠县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "滨州",
					children: [{label: "请选择"}, {label: "滨城区"}, {label: "邹平县"}, {label: "沾化县"}, {label: "惠民县"}, {label: "博兴县"}, {label: "阳信县"}, {label: "无棣县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "菏泽",
					children: [{label: "请选择"}, {label: "牡丹区"}, {label: "鄄城县"}, {label: "单县"}, {label: "郓城县"}, {label: "曹县"}, {label: "定陶县"}, {label: "巨野县"}, {label: "东明县"}, {label: "成武县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "安徽",
			children: [{label: "请选择", children: []},
				{
					label: "合肥",
					children: [{label: "请选择"}, {label: "庐阳区"}, {label: "瑶海区"}, {label: "蜀山区"}, {label: "包河区"}, {label: "长丰县"}, {label: "肥东县"}, {label: "肥西县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "芜湖",
					children: [{label: "请选择"}, {label: "镜湖区"}, {label: "弋江区"}, {label: "鸠江区"}, {label: "三山区"}, {label: "芜湖县"}, {label: "南陵县"}, {label: "繁昌县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "蚌埠",
					children: [{label: "请选择"}, {label: "蚌山区"}, {label: "龙子湖区"}, {label: "禹会区"}, {label: "淮上区"}, {label: "怀远县"}, {label: "固镇县"}, {label: "五河县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "淮南",
					children: [{label: "请选择"}, {label: "田家庵区"}, {label: "大通区"}, {label: "谢家集区"}, {label: "八公山区"}, {label: "潘集区"}, {label: "凤台县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "马鞍山",
					children: [{label: "请选择"}, {label: "雨山区"}, {label: "花山区"}, {label: "金家庄区"}, {label: "当涂县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "淮北",
					children: [{label: "请选择"}, {label: "相山区"}, {label: "杜集区"}, {label: "烈山区"}, {label: "濉溪县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "铜陵",
					children: [{label: "请选择"}, {label: "铜官山区"}, {label: "狮子山区"}, {label: "郊区"}, {label: "铜陵县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "安庆",
					children: [{label: "请选择"}, {label: "迎江区"}, {label: "大观区"}, {label: "宜秀区"}, {label: "桐城市"}, {label: "宿松县"}, {label: "枞阳县"}, {label: "太湖县"}, {label: "怀宁县"}, {label: "岳西县"}, {label: "望江县"}, {label: "潜山县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "黄山",
					children: [{label: "请选择"}, {label: "屯溪区"}, {label: "黄山区"}, {label: "徽州区"}, {label: "休宁县"}, {label: "歙县"}, {label: "祁门县"}, {label: "黟县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "滁州",
					children: [{label: "请选择"}, {label: "琅琊区"}, {label: "南谯区"}, {label: "天长市"}, {label: "明光市"}, {label: "全椒县"}, {label: "来安县"}, {label: "定远县"}, {label: "凤阳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "阜阳",
					children: [{label: "请选择"}, {label: "颍州区"}, {label: "颍东区"}, {label: "颍泉区"}, {label: "界首市"}, {label: "临泉县"}, {label: "颍上县"}, {label: "阜南县"}, {label: "太和县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宿州",
					children: [{label: "请选择"}, {label: "埇桥区"}, {label: "萧县"}, {label: "泗县"}, {label: "砀山县"}, {label: "灵璧县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "巢湖",
					children: [{label: "请选择"}, {label: "居巢区"}, {label: "含山县"}, {label: "无为县"}, {label: "庐江县"}, {label: "和县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "六安",
					children: [{label: "请选择"}, {label: "金安区"}, {label: "裕安区"}, {label: "寿县"}, {label: "霍山县"}, {label: "霍邱县"}, {label: "舒城县"}, {label: "金寨县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "亳州",
					children: [{label: "请选择"}, {label: "谯城区"}, {label: "利辛县"}, {label: "涡阳县"}, {label: "蒙城县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "池州",
					children: [{label: "请选择"}, {label: "贵池区"}, {label: "东至县"}, {label: "石台县"}, {label: "青阳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宣城",
					children: [{label: "请选择"}, {label: "宣州区"}, {label: "宁国市"}, {label: "广德县"}, {label: "郎溪县"}, {label: "泾县"}, {label: "旌德县"}, {label: "绩溪县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "浙江",
			children: [{label: "请选择", children: []},
				{
					label: "杭州",
					children: [{label: "请选择"}, {label: "拱墅区"}, {label: "西湖区"}, {label: "上城区"}, {label: "下城区"}, {label: "江干区"}, {label: "滨江区"}, {label: "余杭区"}, {label: "萧山区"}, {label: "建德市"}, {label: "富阳市"}, {label: "临安市"}, {label: "桐庐县"}, {label: "淳安县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宁波",
					children: [{label: "请选择"}, {label: "海曙区"}, {label: "江东区"}, {label: "江北区"}, {label: "镇海区"}, {label: "北仑区"}, {label: "鄞州区"}, {label: "余姚市"}, {label: "慈溪市"}, {label: "奉化市"}, {label: "宁海县"}, {label: "象山县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "温州",
					children: [{label: "请选择"}, {label: "鹿城区"}, {label: "龙湾区"}, {label: "瓯海区"}, {label: "瑞安市"}, {label: "乐清市"}, {label: "永嘉县"}, {label: "洞头县"}, {label: "平阳县"}, {label: "苍南县"}, {label: "文成县"}, {label: "泰顺县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "嘉兴",
					children: [{label: "请选择"}, {label: "秀城区"}, {label: "秀洲区"}, {label: "海宁市"}, {label: "平湖市"}, {label: "桐乡市"}, {label: "嘉善县"}, {label: "海盐县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "湖州",
					children: [{label: "请选择"}, {label: "吴兴区"}, {label: "南浔区"}, {label: "长兴县"}, {label: "德清县"}, {label: "安吉县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "绍兴",
					children: [{label: "请选择"}, {label: "越城区"}, {label: "诸暨市"}, {label: "上虞市"}, {label: "嵊州市"}, {label: "绍兴县"}, {label: "新昌县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "金华",
					children: [{label: "请选择"}, {label: "婺城区"}, {label: "金东区"}, {label: "兰溪市"}, {label: "义乌市"}, {label: "东阳市"}, {label: "永康市"}, {label: "武义县"}, {label: "浦江县"}, {label: "磐安县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "衢州",
					children: [{label: "请选择"}, {label: "柯城区"}, {label: "衢江区"}, {label: "江山市"}, {label: "龙游县"}, {label: "常山县"}, {label: "开化县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "舟山",
					children: [{label: "请选择"}, {label: "定海区"}, {label: "普陀区"}, {label: "岱山县"}, {label: "嵊泗县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "台州",
					children: [{label: "请选择"}, {label: "椒江区"}, {label: "黄岩区"}, {label: "路桥区"}, {label: "临海市"}, {label: "温岭市"}, {label: "玉环县"}, {label: "天台县"}, {label: "仙居县"}, {label: "三门县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "丽水",
					children: [{label: "请选择"}, {label: "莲都区"}, {label: "龙泉市"}, {label: "缙云县"}, {label: "青田县"}, {label: "云和县"}, {label: "遂昌县"}, {label: "松阳县"}, {label: "庆元县"}, {label: "景宁畲族自治县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "福建",
			children: [{label: "请选择", children: []},
				{
					label: "福州",
					children: [{label: "请选择"}, {label: "鼓楼区"}, {label: "台江区"}, {label: "仓山区"}, {label: "马尾区"}, {label: "晋安区"}, {label: "福清市"}, {label: "长乐市"}, {label: "闽侯县"}, {label: "闽清县"}, {label: "永泰县"}, {label: "连江县"}, {label: "罗源县"}, {label: "平潭县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "厦门",
					children: [{label: "请选择"}, {label: "思明区"}, {label: "海沧区"}, {label: "湖里区"}, {label: "集美区"}, {label: "同安区"}, {label: "翔安区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "莆田",
					children: [{label: "请选择"}, {label: "城厢区"}, {label: "涵江区"}, {label: "荔城区"}, {label: "秀屿区"}, {label: "仙游县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "三明",
					children: [{label: "请选择"}, {label: "梅列区"}, {label: "三元区"}, {label: "永安市"}, {label: "明溪县"}, {label: "将乐县"}, {label: "大田县"}, {label: "宁化县"}, {label: "建宁县"}, {label: "沙县"}, {label: "尤溪县"}, {label: "清流县"}, {label: "泰宁县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "泉州",
					children: [{label: "请选择"}, {label: "鲤城区"}, {label: "丰泽区"}, {label: "洛江区"}, {label: "泉港区"}, {label: "石狮市"}, {label: "晋江市"}, {label: "南安市"}, {label: "惠安县"}, {label: "永春县"}, {label: "安溪县"}, {label: "德化县"}, {label: "金门县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "漳州",
					children: [{label: "请选择"}, {label: "芗城区"}, {label: "龙文区"}, {label: "龙海市"}, {label: "平和县"}, {label: "南靖县"}, {label: "诏安县"}, {label: "漳浦县"}, {label: "华安县"}, {label: "东山县"}, {label: "长泰县"}, {label: "云霄县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "南平",
					children: [{label: "请选择"}, {label: "延平区"}, {label: "建瓯市"}, {label: "邵武市"}, {label: "武夷山市"}, {label: "建阳市"}, {label: "松溪县"}, {label: "光泽县"}, {label: "顺昌县"}, {label: "浦城县"}, {label: "政和县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "龙岩",
					children: [{label: "请选择"}, {label: "新罗区"}, {label: "漳平市"}, {label: "长汀县"}, {label: "武平县"}, {label: "上杭县"}, {label: "永定县"}, {label: "连城县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宁德",
					children: [{label: "请选择"}, {label: "蕉城区"}, {label: "福安市"}, {label: "福鼎市"}, {label: "寿宁县"}, {label: "霞浦县"}, {label: "柘荣县"}, {label: "屏南县"}, {label: "古田县"}, {label: "周宁县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "湖南",
			children: [{label: "请选择", children: []},
				{
					label: "长沙",
					children: [{label: "请选择"}, {label: "岳麓区"}, {label: "芙蓉区"}, {label: "天心区"}, {label: "开福区"}, {label: "雨花区"}, {label: "浏阳市"}, {label: "长沙县"}, {label: "望城县"}, {label: "宁乡县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "株洲",
					children: [{label: "请选择"}, {label: "天元区"}, {label: "荷塘区"}, {label: "芦淞区"}, {label: "石峰区"}, {label: "醴陵市"}, {label: "株洲县"}, {label: "炎陵县"}, {label: "茶陵县"}, {label: "攸县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "湘潭",
					children: [{label: "请选择"}, {label: "岳塘区"}, {label: "雨湖区"}, {label: "湘乡市"}, {label: "韶山市"}, {label: "湘潭县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "衡阳",
					children: [{label: "请选择"}, {label: "雁峰区"}, {label: "珠晖区"}, {label: "石鼓区"}, {label: "蒸湘区"}, {label: "南岳区"}, {label: "耒阳市"}, {label: "常宁市"}, {label: "衡阳县"}, {label: "衡东县"}, {label: "衡山县"}, {label: "衡南县"}, {label: "祁东县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "邵阳",
					children: [{label: "请选择"}, {label: "双清区"}, {label: "大祥区"}, {label: "北塔区"}, {label: "武冈市"}, {label: "邵东县"}, {label: "洞口县"}, {label: "新邵县"}, {label: "绥宁县"}, {label: "新宁县"}, {label: "邵阳县"}, {label: "隆回县"}, {label: "城步苗族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "岳阳",
					children: [{label: "请选择"}, {label: "岳阳楼区"}, {label: "云溪区"}, {label: "君山区"}, {label: "临湘市"}, {label: "汨罗市"}, {label: "岳阳县"}, {label: "湘阴县"}, {label: "平江县"}, {label: "华容县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "常德",
					children: [{label: "请选择"}, {label: "武陵区"}, {label: "鼎城区"}, {label: "津市市"}, {label: "澧县"}, {label: "临澧县"}, {label: "桃源县"}, {label: "汉寿县"}, {label: "安乡县"}, {label: "石门县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "张家界",
					children: [{label: "请选择"}, {label: "永定区"}, {label: "武陵源区"}, {label: "慈利县"}, {label: "桑植县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "益阳",
					children: [{label: "请选择"}, {label: "赫山区"}, {label: "资阳区"}, {label: "沅江市"}, {label: "桃江县"}, {label: "南县"}, {label: "安化县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "郴州",
					children: [{label: "请选择"}, {label: "北湖区"}, {label: "苏仙区"}, {label: "资兴市"}, {label: "宜章县"}, {label: "汝城县"}, {label: "安仁县"}, {label: "嘉禾县"}, {label: "临武县"}, {label: "桂东县"}, {label: "永兴县"}, {label: "桂阳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "永州",
					children: [{label: "请选择"}, {label: "冷水滩区"}, {label: "零陵区"}, {label: "祁阳县"}, {label: "蓝山县"}, {label: "宁远县"}, {label: "新田县"}, {label: "东安县"}, {label: "江永县"}, {label: "道县"}, {label: "双牌县"}, {label: "江华瑶族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "怀化",
					children: [{label: "请选择"}, {label: "鹤城区"}, {label: "洪江市"}, {label: "会同县"}, {label: "沅陵县"}, {label: "辰溪县"}, {label: "溆浦县"}, {label: "中方县"}, {label: "新晃侗族自治县"}, {label: "芷江侗族自治县"}, {label: "通道侗族自治县"}, {label: "靖州苗族侗族自治县"}, {label: "麻阳苗族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "娄底",
					children: [{label: "请选择"}, {label: "娄星区"}, {label: "冷水江市"}, {label: "涟源市"}, {label: "新化县"}, {label: "双峰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "湘西土家族苗族自治州",
					children: [{label: "请选择"}, {label: "吉首市"}, {label: "古丈县"}, {label: "龙山县"}, {label: "永顺县"}, {label: "凤凰县"}, {label: "泸溪县"}, {label: "保靖县"}, {label: "花垣县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "广西",
			children: [{label: "请选择", children: []},
				{
					label: "南宁",
					children: [{label: "请选择"}, {label: "青秀区"}, {label: "兴宁区"}, {label: "西乡塘区"}, {label: "良庆区"}, {label: "江南区"}, {label: "邕宁区"}, {label: "武鸣县"}, {label: "隆安县"}, {label: "马山县"}, {label: "上林县"}, {label: "宾阳县"}, {label: "横县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "柳州",
					children: [{label: "请选择"}, {label: "城中区"}, {label: "鱼峰区"}, {label: "柳北区"}, {label: "柳南区"}, {label: "柳江县"}, {label: "柳城县"}, {label: "鹿寨县"}, {label: "融安县"}, {label: "融水苗族自治县"}, {label: "三江侗族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "桂林",
					children: [{label: "请选择"}, {label: "象山区"}, {label: "秀峰区"}, {label: "叠彩区"}, {label: "七星区"}, {label: "雁山区"}, {label: "阳朔县"}, {label: "临桂县"}, {label: "灵川县"}, {label: "全州县"}, {label: "平乐县"}, {label: "兴安县"}, {label: "灌阳县"}, {label: "荔浦县"}, {label: "资源县"}, {label: "永福县"}, {label: "龙胜各族自治县"}, {label: "恭城瑶族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "梧州",
					children: [{label: "请选择"}, {label: "万秀区"}, {label: "蝶山区"}, {label: "长洲区"}, {label: "岑溪市"}, {label: "苍梧县"}, {label: "藤县"}, {label: "蒙山县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "北海",
					children: [{label: "请选择"}, {label: "海城区"}, {label: "银海区"}, {label: "铁山港区"}, {label: "合浦县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "防城港",
					children: [{label: "请选择"}, {label: "港口区"}, {label: "防城区"}, {label: "东兴市"}, {label: "上思县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "钦州",
					children: [{label: "请选择"}, {label: "钦南区"}, {label: "钦北区"}, {label: "灵山县"}, {label: "浦北县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "贵港",
					children: [{label: "请选择"}, {label: "港北区"}, {label: "港南区"}, {label: "覃塘区"}, {label: "桂平市"}, {label: "平南县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "玉林",
					children: [{label: "请选择"}, {label: "玉州区"}, {label: "北流市"}, {label: "容县"}, {label: "陆川县"}, {label: "博白县"}, {label: "兴业县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "百色",
					children: [{label: "请选择"}, {label: "右江区"}, {label: "凌云县"}, {label: "平果县"}, {label: "西林县"}, {label: "乐业县"}, {label: "德保县"}, {label: "田林县"}, {label: "田阳县"}, {label: "靖西县"}, {label: "田东县"}, {label: "那坡县"}, {label: "隆林各族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "贺州",
					children: [{label: "请选择"}, {label: "八步区"}, {label: "钟山县"}, {label: "昭平县"}, {label: "富川瑶族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "河池",
					children: [{label: "请选择"}, {label: "金城江区"}, {label: "宜州市"}, {label: "天峨县"}, {label: "凤山县"}, {label: "南丹县"}, {label: "东兰县"}, {label: "都安瑶族自治县"}, {label: "罗城仫佬族自治县"}, {label: "巴马瑶族自治县"}, {label: "环江毛南族自治县"}, {label: "大化瑶族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "来宾",
					children: [{label: "请选择"}, {label: "兴宾区"}, {label: "合山市"}, {label: "象州县"}, {label: "武宣县"}, {label: "忻城县"}, {label: "金秀瑶族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "崇左",
					children: [{label: "请选择"}, {label: "江州区"}, {label: "凭祥市"}, {label: "宁明县"}, {label: "扶绥县"}, {label: "龙州县"}, {label: "大新县"}, {label: "天等县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "江西",
			children: [{label: "请选择", children: []},
				{
					label: "南昌",
					children: [{label: "请选择"}, {label: "东湖区"}, {label: "西湖区"}, {label: "青云谱区"}, {label: "湾里区"}, {label: "青山湖区"}, {label: "新建县"}, {label: "南昌县"}, {label: "进贤县"}, {label: "安义县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "景德镇",
					children: [{label: "请选择"}, {label: "珠山区"}, {label: "昌江区"}, {label: "乐平市"}, {label: "浮梁县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "萍乡",
					children: [{label: "请选择"}, {label: "安源区"}, {label: "湘东区"}, {label: "莲花县"}, {label: "上栗县"}, {label: "芦溪县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "九江",
					children: [{label: "请选择"}, {label: "浔阳区"}, {label: "庐山区"}, {label: "瑞昌市"}, {label: "九江县"}, {label: "星子县"}, {label: "武宁县"}, {label: "彭泽县"}, {label: "永修县"}, {label: "修水县"}, {label: "湖口县"}, {label: "德安县"}, {label: "都昌县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "新余",
					children: [{label: "请选择"}, {label: "渝水区"}, {label: "分宜县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "鹰潭",
					children: [{label: "请选择"}, {label: "月湖区"}, {label: "贵溪市"}, {label: "余江县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "赣州",
					children: [{label: "请选择"}, {label: "章贡区"}, {label: "瑞金市"}, {label: "南康市"}, {label: "石城县"}, {label: "安远县"}, {label: "赣县"}, {label: "宁都县"}, {label: "寻乌县"}, {label: "兴国县"}, {label: "定南县"}, {label: "上犹县"}, {label: "于都县"}, {label: "龙南县"}, {label: "崇义县"}, {label: "信丰县"}, {label: "全南县"}, {label: "大余县"}, {label: "会昌县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "吉安",
					children: [{label: "请选择"}, {label: "吉州区"}, {label: "青原区"}, {label: "井冈山市"}, {label: "吉安县"}, {label: "永丰县"}, {label: "永新县"}, {label: "新干县"}, {label: "泰和县"}, {label: "峡江县"}, {label: "遂川县"}, {label: "安福县"}, {label: "吉水县"}, {label: "万安县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "宜春",
					children: [{label: "请选择"}, {label: "袁州区"}, {label: "丰城市"}, {label: "樟树市"}, {label: "高安市"}, {label: "铜鼓县"}, {label: "靖安县"}, {label: "宜丰县"}, {label: "奉新县"}, {label: "万载县"}, {label: "上高县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "抚州",
					children: [{label: "请选择"}, {label: "临川区"}, {label: "南丰县"}, {label: "乐安县"}, {label: "金溪县"}, {label: "南城县"}, {label: "东乡县"}, {label: "资溪县"}, {label: "宜黄县"}, {label: "广昌县"}, {label: "黎川县"}, {label: "崇仁县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "上饶",
					children: [{label: "请选择"}, {label: "信州区"}, {label: "德兴市"}, {label: "上饶县"}, {label: "广丰县"}, {label: "鄱阳县"}, {label: "婺源县"}, {label: "铅山县"}, {label: "余干县"}, {label: "横峰县"}, {label: "弋阳县"}, {label: "玉山县"}, {label: "万年县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "贵州",
			children: [{label: "请选择", children: []},
				{
					label: "贵阳",
					children: [{label: "请选择"}, {label: "南明区"}, {label: "云岩区"}, {label: "花溪区"}, {label: "乌当区"}, {label: "白云区"}, {label: "小河区"}, {label: "清镇市"}, {label: "开阳县"}, {label: "修文县"}, {label: "息烽县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "六盘水",
					children: [{label: "请选择"}, {label: "钟山区"}, {label: "水城县"}, {label: "盘县"}, {label: "六枝特区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "遵义",
					children: [{label: "请选择"}, {label: "红花岗区"}, {label: "汇川区"}, {label: "赤水市"}, {label: "仁怀市"}, {label: "遵义县"}, {label: "绥阳县"}, {label: "桐梓县"}, {label: "习水县"}, {label: "凤冈县"}, {label: "正安县"}, {label: "余庆县"}, {label: "湄潭县"}, {label: "道真仡佬族苗族自治县"}, {label: "务川仡佬族苗族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "安顺",
					children: [{label: "请选择"}, {label: "西秀区"}, {label: "普定县"}, {label: "平坝县"}, {label: "镇宁布依族苗族自治县"}, {label: "紫云苗族布依族自治县"}, {label: "关岭布依族苗族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "铜仁地区",
					children: [{label: "请选择"}, {label: "铜仁市"}, {label: "德江县"}, {label: "江口县"}, {label: "思南县"}, {label: "石阡县"}, {label: "玉屏侗族自治县"}, {label: "松桃苗族自治县"}, {label: "印江土家族苗族自治县"}, {label: "沿河土家族自治县"}, {label: "万山特区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "毕节地区",
					children: [{label: "请选择"}, {label: "毕节市"}, {label: "黔西县"}, {label: "大方县"}, {label: "织金县"}, {label: "金沙县"}, {label: "赫章县"}, {label: "纳雍县"}, {label: "威宁彝族回族苗族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "黔西南布依族苗族自治州",
					children: [{label: "请选择"}, {label: "兴义市"}, {label: "望谟县"}, {label: "兴仁县"}, {label: "普安县"}, {label: "册亨县"}, {label: "晴隆县"}, {label: "贞丰县"}, {label: "安龙县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "黔东南苗族侗族自治州",
					children: [{label: "请选择"}, {label: "凯里市"}, {label: "施秉县"}, {label: "从江县"}, {label: "锦屏县"}, {label: "镇远县"}, {label: "麻江县"}, {label: "台江县"}, {label: "天柱县"}, {label: "黄平县"}, {label: "榕江县"}, {label: "剑河县"}, {label: "三穗县"}, {label: "雷山县"}, {label: "黎平县"}, {label: "岑巩县"}, {label: "丹寨县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "黔南布依族苗族自治州",
					children: [{label: "请选择"}, {label: "都匀市"}, {label: "福泉市"}, {label: "贵定县"}, {label: "惠水县"}, {label: "罗甸县"}, {label: "瓮安县"}, {label: "荔波县"}, {label: "龙里县"}, {label: "平塘县"}, {label: "长顺县"}, {label: "独山县"}, {label: "三都水族自治县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "云南",
			children: [{label: "请选择", children: []},
				{
					label: "昆明",
					children: [{label: "请选择"}, {label: "盘龙区"}, {label: "五华区"}, {label: "官渡区"}, {label: "西山区"}, {label: "东川区"}, {label: "安宁市"}, {label: "呈贡县"}, {label: "晋宁县"}, {label: "富民县"}, {label: "宜良县"}, {label: "嵩明县"}, {label: "石林彝族自治县"}, {label: "禄劝彝族苗族自治县"}, {label: "寻甸回族彝族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "曲靖",
					children: [{label: "请选择"}, {label: "麒麟区"}, {label: "宣威市"}, {label: "马龙县"}, {label: "沾益县"}, {label: "富源县"}, {label: "罗平县"}, {label: "师宗县"}, {label: "陆良县"}, {label: "会泽县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "玉溪",
					children: [{label: "请选择"}, {label: "红塔区"}, {label: "江川县"}, {label: "澄江县"}, {label: "通海县"}, {label: "华宁县"}, {label: "易门县"}, {label: "峨山彝族自治县"}, {label: "新平彝族傣族自治县"}, {label: "元江哈尼族彝族傣族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "保山",
					children: [{label: "请选择"}, {label: "隆阳区"}, {label: "施甸县"}, {label: "腾冲县"}, {label: "龙陵县"}, {label: "昌宁县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "昭通",
					children: [{label: "请选择"}, {label: "昭阳区"}, {label: "鲁甸县"}, {label: "巧家县"}, {label: "盐津县"}, {label: "大关县"}, {label: "永善县"}, {label: "绥江县"}, {label: "镇雄县"}, {label: "彝良县"}, {label: "威信县"}, {label: "水富县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "丽江",
					children: [{label: "请选择"}, {label: "古城区"}, {label: "永胜县"}, {label: "华坪县"}, {label: "玉龙纳西族自治县"}, {label: "宁蒗彝族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "普洱",
					children: [{label: "请选择"}, {label: "思茅区"}, {label: "普洱哈尼族彝族自治县"}, {label: "墨江哈尼族自治县"}, {label: "景东彝族自治县"}, {label: "景谷傣族彝族自治县"}, {label: "镇沅彝族哈尼族拉祜族自治县"}, {label: "江城哈尼族彝族自治县"}, {label: "孟连傣族拉祜族佤族自治县"}, {label: "澜沧拉祜族自治县"}, {label: "西盟佤族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "临沧",
					children: [{label: "请选择"}, {label: "临翔区"}, {label: "凤庆县"}, {label: "云县"}, {label: "永德县"}, {label: "镇康县"}, {label: "双江拉祜族佤族布朗族傣族自治县"}, {label: "耿马傣族佤族自治县"}, {label: "沧源佤族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "德宏傣族景颇族自治州",
					children: [{label: "请选择"}, {label: "潞西市"}, {label: "瑞丽市"}, {label: "梁河县"}, {label: "盈江县"}, {label: "陇川县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "怒江傈僳族自治州",
					children: [{label: "请选择"}, {label: "泸水县"}, {label: "福贡县"}, {label: "贡山独龙族怒族自治县"}, {label: "兰坪白族普米族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "迪庆藏族自治州",
					children: [{label: "请选择"}, {label: "香格里拉县"}, {label: "德钦县"}, {label: "维西傈僳族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "大理白族自治州",
					children: [{label: "请选择"}, {label: "大理市"}, {label: "祥云县"}, {label: "宾川县"}, {label: "弥渡县"}, {label: "永平县"}, {label: "云龙县"}, {label: "洱源县"}, {label: "剑川县"}, {label: "鹤庆县"}, {label: "漾濞彝族自治县"}, {label: "南涧彝族自治县"}, {label: "巍山彝族回族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "楚雄彝族自治州",
					children: [{label: "请选择"}, {label: "楚雄市"}, {label: "双柏县"}, {label: "牟定县"}, {label: "南华县"}, {label: "姚安县"}, {label: "大姚县"}, {label: "永仁县"}, {label: "元谋县"}, {label: "武定县"}, {label: "禄丰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "红河哈尼族彝族自治州",
					children: [{label: "请选择"}, {label: "蒙自县"}, {label: "个旧市"}, {label: "开远市"}, {label: "绿春县"}, {label: "建水县"}, {label: "石屏县"}, {label: "弥勒县"}, {label: "泸西县"}, {label: "元阳县"}, {label: "红河县"}, {label: "金平苗族瑶族傣族自治县"}, {label: "河口瑶族自治县"}, {label: "屏边苗族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "文山壮族苗族自治州",
					children: [{label: "请选择"}, {label: "文山县"}, {label: "砚山县"}, {label: "西畴县"}, {label: "麻栗坡县"}, {label: "马关县"}, {label: "丘北县"}, {label: "广南县"}, {label: "富宁县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "西双版纳傣族自治州",
					children: [{label: "请选择"}, {label: "景洪市"}, {label: "勐海县"}, {label: "勐腊县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "西藏",
			children: [{label: "请选择", children: []},
				{
					label: "拉萨",
					children: [{label: "请选择"}, {label: "城关区"}, {label: "林周县"}, {label: "当雄县"}, {label: "尼木县"}, {label: "曲水县"}, {label: "堆龙德庆县"}, {label: "达孜县"}, {label: "墨竹工卡县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "那曲地区",
					children: [{label: "请选择"}, {label: "那曲县"}, {label: "嘉黎县"}, {label: "比如县"}, {label: "聂荣县"}, {label: "安多县"}, {label: "申扎县"}, {label: "索县"}, {label: "班戈县"}, {label: "巴青县"}, {label: "尼玛县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "昌都地区",
					children: [{label: "请选择"}, {label: "昌都县"}, {label: "江达县"}, {label: "贡觉县"}, {label: "类乌齐县"}, {label: "丁青县"}, {label: "察雅县"}, {label: "八宿县"}, {label: "左贡县"}, {label: "芒康县"}, {label: "洛隆县"}, {label: "边坝县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "林芝地区",
					children: [{label: "请选择"}, {label: "林芝县"}, {label: "工布江达县"}, {label: "米林县"}, {label: "墨脱县"}, {label: "波密县"}, {label: "察隅县"}, {label: "朗县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "山南地区",
					children: [{label: "请选择"}, {label: "乃东县"}, {label: "扎囊县"}, {label: "贡嘎县"}, {label: "桑日县"}, {label: "琼结县"}, {label: "曲松县"}, {label: "措美县"}, {label: "洛扎县"}, {label: "加查县"}, {label: "隆子县"}, {label: "错那县"}, {label: "浪卡子县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "日喀则地区",
					children: [{label: "请选择"}, {label: "日喀则市"}, {label: "南木林县"}, {label: "江孜县"}, {label: "定日县"}, {label: "萨迦县"}, {label: "拉孜县"}, {label: "昂仁县"}, {label: "谢通门县"}, {label: "白朗县"}, {label: "仁布县"}, {label: "康马县"}, {label: "定结县"}, {label: "仲巴县"}, {label: "亚东县"}, {label: "吉隆县"}, {label: "聂拉木县"}, {label: "萨嘎县"}, {label: "岗巴县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "阿里地区",
					children: [{label: "请选择"}, {label: "噶尔县"}, {label: "普兰县"}, {label: "札达县"}, {label: "日土县"}, {label: "革吉县"}, {label: "改则县"}, {label: "措勤县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "海南",
			children: [{label: "请选择", children: []},
				{
					label: "海口",
					children: [{label: "请选择"}, {label: "龙华区"}, {label: "秀英区"}, {label: "琼山区"}, {label: "美兰区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "三亚",
					children: [{label: "请选择"}, {label: "三亚市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "五指山",
					children: [],
					type: 0
				},
				{
					label: "琼海",
					children: [],
					type: 0
				},
				{
					label: "儋州",
					children: [],
					type: 0
				},
				{
					label: "文昌",
					children: [],
					type: 0
				},
				{
					label: "万宁",
					children: [],
					type: 0
				},
				{
					label: "东方",
					children: [],
					type: 0
				},
				{
					label: "澄迈县",
					children: [],
					type: 0
				},
				{
					label: "定安县",
					children: [],
					type: 0
				},
				{
					label: "屯昌县",
					children: [],
					type: 0
				},
				{
					label: "临高县",
					children: [],
					type: 0
				},
				{
					label: "白沙黎族自治县",
					children: [],
					type: 0
				},
				{
					label: "昌江黎族自治县",
					children: [],
					type: 0
				},
				{
					label: "乐东黎族自治县",
					children: [],
					type: 0
				},
				{
					label: "陵水黎族自治县",
					children: [],
					type: 0
				},
				{
					label: "保亭黎族苗族自治县",
					children: [],
					type: 0
				},
				{
					label: "琼中黎族苗族自治县",
					children: [],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "甘肃",
			children: [{label: "请选择", children: []},
				{
					label: "兰州",
					children: [{label: "请选择"}, {label: "城关区"}, {label: "七里河区"}, {label: "西固区"}, {label: "安宁区"}, {label: "红古区"}, {label: "永登县"}, {label: "皋兰县"}, {label: "榆中县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "嘉峪关",
					children: [{label: "请选择"}, {label: "嘉峪关市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "金昌",
					children: [{label: "请选择"}, {label: "金川区"}, {label: "永昌县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "白银",
					children: [{label: "请选择"}, {label: "白银区"}, {label: "平川区"}, {label: "靖远县"}, {label: "会宁县"}, {label: "景泰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "天水",
					children: [{label: "请选择"}, {label: "清水县"}, {label: "秦安县"}, {label: "甘谷县"}, {label: "武山县"}, {label: "张家川回族自治县"}, {label: "北道区"}, {label: "秦城区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "武威",
					children: [{label: "请选择"}, {label: "凉州区"}, {label: "民勤县"}, {label: "古浪县"}, {label: "天祝藏族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "酒泉",
					children: [{label: "请选择"}, {label: "肃州区"}, {label: "玉门市"}, {label: "敦煌市"}, {label: "金塔县"}, {label: "肃北蒙古族自治县"}, {label: "阿克塞哈萨克族自治县"}, {label: "安西县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "张掖",
					children: [{label: "请选择"}, {label: "甘州区"}, {label: "民乐县"}, {label: "临泽县"}, {label: "高台县"}, {label: "山丹县"}, {label: "肃南裕固族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "庆阳",
					children: [{label: "请选择"}, {label: "西峰区"}, {label: "庆城县"}, {label: "环县"}, {label: "华池县"}, {label: "合水县"}, {label: "正宁县"}, {label: "宁县"}, {label: "镇原县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "平凉",
					children: [{label: "请选择"}, {label: "崆峒区"}, {label: "泾川县"}, {label: "灵台县"}, {label: "崇信县"}, {label: "华亭县"}, {label: "庄浪县"}, {label: "静宁县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "定西",
					children: [{label: "请选择"}, {label: "安定区"}, {label: "通渭县"}, {label: "临洮县"}, {label: "漳县"}, {label: "岷县"}, {label: "渭源县"}, {label: "陇西县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "陇南",
					children: [{label: "请选择"}, {label: "武都区"}, {label: "成县"}, {label: "宕昌县"}, {label: "康县"}, {label: "文县"}, {label: "西和县"}, {label: "礼县"}, {label: "两当县"}, {label: "徽县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "临夏回族自治州",
					children: [{label: "请选择"}, {label: "临夏市"}, {label: "临夏县"}, {label: "康乐县"}, {label: "永靖县"}, {label: "广河县"}, {label: "和政县"}, {label: "东乡族自治县"}, {label: "积石山保安族东乡族撒拉族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "甘南藏族自治州",
					children: [{label: "请选择"}, {label: "合作市"}, {label: "临潭县"}, {label: "卓尼县"}, {label: "舟曲县"}, {label: "迭部县"}, {label: "玛曲县"}, {label: "碌曲县"}, {label: "夏河县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "宁夏",
			children: [{label: "请选择", children: []},
				{
					label: "银川",
					children: [{label: "请选择"}, {label: "兴庆区"}, {label: "西夏区"}, {label: "金凤区"}, {label: "灵武市"}, {label: "永宁县"}, {label: "贺兰县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "石嘴山",
					children: [{label: "请选择"}, {label: "大武口区"}, {label: "惠农区"}, {label: "平罗县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "吴忠",
					children: [{label: "请选择"}, {label: "利通区"}, {label: "青铜峡市"}, {label: "盐池县"}, {label: "同心县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "固原",
					children: [{label: "请选择"}, {label: "原州区"}, {label: "西吉县"}, {label: "隆德县"}, {label: "泾源县"}, {label: "彭阳县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "中卫",
					children: [{label: "请选择"}, {label: "沙坡头区"}, {label: "中宁县"}, {label: "海原县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "青海",
			children: [{label: "请选择", children: []},
				{
					label: "西宁",
					children: [{label: "请选择"}, {label: "城中区"}, {label: "城东区"}, {label: "城西区"}, {label: "城北区"}, {label: "湟源县"}, {label: "湟中县"}, {label: "大通回族土族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "海东地区",
					children: [{label: "请选择"}, {label: "平安县"}, {label: "乐都县"}, {label: "民和回族土族自治县"}, {label: "互助土族自治县"}, {label: "化隆回族自治县"}, {label: "循化撒拉族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "海北藏族自治州",
					children: [{label: "请选择"}, {label: "海晏县"}, {label: "祁连县"}, {label: "刚察县"}, {label: "门源回族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "海南藏族自治州",
					children: [{label: "请选择"}, {label: "共和县"}, {label: "同德县"}, {label: "贵德县"}, {label: "兴海县"}, {label: "贵南县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "黄南藏族自治州",
					children: [{label: "请选择"}, {label: "同仁县"}, {label: "尖扎县"}, {label: "泽库县"}, {label: "河南蒙古族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "果洛藏族自治州",
					children: [{label: "请选择"}, {label: "玛沁县"}, {label: "班玛县"}, {label: "甘德县"}, {label: "达日县"}, {label: "久治县"}, {label: "玛多县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "玉树藏族自治州",
					children: [{label: "请选择"}, {label: "玉树县"}, {label: "杂多县"}, {label: "称多县"}, {label: "治多县"}, {label: "囊谦县"}, {label: "曲麻莱县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "海西蒙古族藏族自治州",
					children: [{label: "请选择"}, {label: "德令哈市"}, {label: "格尔木市"}, {label: "乌兰县"}, {label: "都兰县"}, {label: "天峻县"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "新疆",
			children: [{label: "请选择", children: []},
				{
					label: "乌鲁木齐",
					children: [{label: "请选择"}, {label: "天山区"}, {label: "沙依巴克区"}, {label: "新市区"}, {label: "水磨沟区"}, {label: "头屯河区"}, {label: "达坂城区"}, {label: "东山区"}, {label: "乌鲁木齐县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "克拉玛依",
					children: [{label: "请选择"}, {label: "克拉玛依区"}, {label: "独山子区"}, {label: "白碱滩区"}, {label: "乌尔禾区"}, {label: "其他"}],
					type: 0
				},
				{
					label: "吐鲁番地区",
					children: [{label: "请选择"}, {label: "吐鲁番市"}, {label: "托克逊县"}, {label: "鄯善县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "哈密地区",
					children: [{label: "请选择"}, {label: "哈密市"}, {label: "伊吾县"}, {label: "巴里坤哈萨克自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "和田地区",
					children: [{label: "请选择"}, {label: "和田市"}, {label: "和田县"}, {label: "洛浦县"}, {label: "民丰县"}, {label: "皮山县"}, {label: "策勒县"}, {label: "于田县"}, {label: "墨玉县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "阿克苏地区",
					children: [{label: "请选择"}, {label: "阿克苏市"}, {label: "温宿县"}, {label: "沙雅县"}, {label: "拜城县"}, {label: "阿瓦提县"}, {label: "库车县"}, {label: "柯坪县"}, {label: "新和县"}, {label: "乌什县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "喀什地区",
					children: [{label: "请选择"}, {label: "喀什市"}, {label: "巴楚县"}, {label: "泽普县"}, {label: "伽师县"}, {label: "叶城县"}, {label: "岳普湖县"}, {label: "疏勒县"}, {label: "麦盖提县"}, {label: "英吉沙县"}, {label: "莎车县"}, {label: "疏附县"}, {label: "塔什库尔干塔吉克自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "克孜勒苏柯尔克孜自治州",
					children: [{label: "请选择"}, {label: "阿图什市"}, {label: "阿合奇县"}, {label: "乌恰县"}, {label: "阿克陶县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "巴音郭楞蒙古自治州",
					children: [{label: "请选择"}, {label: "库尔勒市"}, {label: "和静县"}, {label: "尉犁县"}, {label: "和硕县"}, {label: "且末县"}, {label: "博湖县"}, {label: "轮台县"}, {label: "若羌县"}, {label: "焉耆回族自治县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "昌吉回族自治州",
					children: [{label: "请选择"}, {label: "昌吉市"}, {label: "阜康市"}, {label: "奇台县"}, {label: "玛纳斯县"}, {label: "吉木萨尔县"}, {label: "呼图壁县"}, {label: "木垒哈萨克自治县"}, {label: "米泉市"}, {label: "其他"}],
					type: 0
				},
				{
					label: "博尔塔拉蒙古自治州",
					children: [{label: "请选择"}, {label: "博乐市"}, {label: "精河县"}, {label: "温泉县"}, {label: "其他"}],
					type: 0
				},
				{
					label: "石河子",
					children: [],
					type: 0
				},
				{
					label: "阿拉尔",
					children: [],
					type: 0
				},
				{
					label: "图木舒克",
					children: [],
					type: 0
				},
				{
					label: "五家渠",
					children: [],
					type: 0
				},
				{
					label: "伊犁哈萨克自治州",
					children: [{label: "请选择"}, {label: "伊宁市"}, {label: "奎屯市"}, {label: "伊宁县"}, {label: "特克斯县"}, {label: "尼勒克县"}, {label: "昭苏县"}, {label: "新源县"}, {label: "霍城县"}, {label: "巩留县"}, {label: "察布查尔锡伯自治县"}, {label: "塔城地区"}, {label: "阿勒泰地区"}, {label: "其他"}],
					type: 0
				},
				{label: "其他"}],
			type: 1
		},
		{
			label: "香港",
			children: [{label: "请选择"}, {label: "中西区"}, {label: "湾仔区"}, {label: "东区"}, {label: "南区"}, {label: "深水埗区"}, {label: "油尖旺区"}, {label: "九龙城区"}, {label: "黄大仙区"}, {label: "观塘区"}, {label: "北区"}, {label: "大埔区"}, {label: "沙田区"}, {label: "西贡区"}, {label: "元朗区"}, {label: "屯门区"}, {label: "荃湾区"}, {label: "葵青区"}, {label: "离岛区"}, {label: "其他"}],
			type: 0
		},
		{
			label: "澳门",
			children: [{label: "请选择"}, {label: "花地玛堂区"}, {label: "圣安多尼堂区"}, {label: "大堂区"}, {label: "望德堂区"}, {label: "风顺堂区"}, {label: "嘉模堂区"}, {label: "圣方济各堂区"}, {label: "路凼"}, {label: "其他"}],
			type: 0
		},
		{
			label: "台湾",
			children: [{label: "请选择"}, {label: "台北市"}, {label: "高雄市"}, {label: "台北县"}, {label: "桃园县"}, {label: "新竹县"}, {label: "苗栗县"}, {label: "台中县"}, {label: "彰化县"}, {label: "南投县"}, {label: "云林县"}, {label: "嘉义县"}, {label: "台南县"}, {label: "高雄县"}, {label: "屏东县"}, {label: "宜兰县"}, {label: "花莲县"}, {label: "台东县"}, {label: "澎湖县"}, {label: "基隆市"}, {label: "新竹市"}, {label: "台中市"}, {label: "嘉义市"}, {label: "台南市"}, {label: "其他"}],
			type: 0
		},
		{
			label: "海外",
			children: [{label: "请选择"}, {label: "其他"}],
			type: 0
		},
		{label: "其他"}
	];
	


export let SSQdata = arrAll
