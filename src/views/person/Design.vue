<template>
	<div id="person-design">
		<p class="person-big-title">我的店铺</p>
		<el-divider></el-divider>

		<el-form :inline="true" label-width="150px" ref="form" :model="form">
			<el-form-item label="标题：">
				<el-input style="width:265px" v-model="form.title"></el-input>
			</el-form-item>
			<el-form-item style="float:left" label="起拍价(元)：">
				<el-input style="width:265px" v-model="form.start_price"></el-input>
			</el-form-item>
			<el-form-item label="品牌：">
				<el-input style="width:265px" v-model="form.brand_info"></el-input>
				<!-- <el-select v-model="form.category" placeholder="请选择" style="width:265px" :filterable='true'>
					<el-option v-for="item in cartxt.category" :key="item.id" :label="item.name" :value="item.name">
					</el-option>
				</el-select> -->
			</el-form-item>
			<el-form-item label="车牌号：">
				<el-input style="width:265px" v-model="form.car_number"></el-input>
			</el-form-item>
			<el-form-item label="发动机号：">
				<el-input style="width:265px" v-model="form.engine_number"></el-input>
			</el-form-item>
			<el-form-item label="车架号：">
				<el-input style="width:265px" v-model="form.frame_number"></el-input>
			</el-form-item>
			
			
			<el-form-item style="float:left" label="表显里程：">
				<el-input style="width:265px" v-model="form.mileage_number"></el-input>
				<!-- <el-select v-model="form.mileage" placeholder="请选择" style="width:265px">
					<el-option v-for="item in cartxt.mileage" :key="item.id" :label="item.name" :value="item.name">
					</el-option>
				</el-select> -->
			</el-form-item>
			<el-form-item label="上牌时间：">
				       <el-input style="width:265px" type="date" v-model="form.get_card_time"></el-input>
			
				<!-- <el-date-picker v-model="form.get_card_time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
				</el-date-picker> -->
			</el-form-item>
			<el-form-item style="float:left" label="车辆颜色：">
				<el-input style="width:265px" v-model="form.car_color"></el-input>
			</el-form-item>
			<el-form-item style="float:left" label="车辆分类：">
				<!-- <el-input style="width:265px" v-model="form.catid"></el-input> -->
				<el-select v-model="form.catid" placeholder="">
					<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="能否过户：">
				<el-select v-model="form.is_change" placeholder="">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="行驶证：">
				<el-select v-model="form.is_driving_license" placeholder="">
					<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="钥匙：">
				<el-select v-model="form.is_key" placeholder="">
					<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="正常启动：">
				<el-select v-model="form.is_normal" placeholder="">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="车辆登记证明：">
				<el-select v-model="form.is_registration_cert" placeholder="">
					<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>			
			
			<el-form-item label="结清证明：">
				<el-select v-model="form.is_settlement_proof" placeholder="">
					<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="解压委托书：">
				<el-select v-model="form.is_decompression_letter" placeholder="">
					<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="营业执照：">
				<el-select v-model="form.is_business_license" placeholder="">
					<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="抵押登记申请：">
				<el-select v-model="form.is_mortgage" placeholder="">
					<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="债权转让协议：">
				<el-select v-model="form.is_transfer_agreement" placeholder="">
					<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="提车地：">
				<el-input style="width:265px" v-model="form.car_place_info"></el-input>
			</el-form-item>
			<el-form-item label="竞拍天数：">
				<el-input type="number" style="width:80px" v-model="form.days"></el-input>天
			</el-form-item>
			<!-- <el-form-item style="float:left" label="牌照归属地：">
				<el-input style="width:265px" v-model="form.ascription"></el-input>
			</el-form-item>
			<el-form-item label="强险到期时间："> -->
				<!--        <el-input style="width:265px" v-model="form.force_end_time"></el-input>-->
				<!-- <el-date-picker v-model="form.force_end_time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item style="float:left" label="排放标准："> -->
				<!-- <el-input style="width:265px" v-model="form.paifang"></el-input> -->
				<!-- <el-select v-model="form.paifang" placeholder="请选择" style="width:265px">
					<el-option v-for="item in cartxt.paifang" :key="item.id" :label="item.name" :value="item.name">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="车身颜色："> -->
				<!-- <el-input style="width:265px" v-model="form.color"></el-input> -->
				<!-- <el-select v-model="form.color" placeholder="请选择" style="width:265px">
					<el-option v-for="item in cartxt.color" :key="item.id" :label="item.name" :value="item.name">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item style="float:left" label="排量/变速："> -->
				<!-- <el-input style="width:265px" v-model="form.pailiang"></el-input> -->
				<!-- <el-select v-model="form.pailiang" placeholder="请选择" style="width:265px">
					<el-option v-for="item in cartxt.pailiang" :key="item.id" :label="item.name" :value="item.name">
					</el-option>
				</el-select>
			</el-form-item> -->
			
			<!-- <el-form-item label="车辆属性：" style="float:left"> -->
				<!-- <el-input style="width:265px;" v-model="form.attribute"></el-input> -->
				<!-- <el-select v-model="form.attribute" placeholder="请选择" style="width:265px;">
					<el-option v-for="item in cartxt.attribute" :key="item.id" :label="item.name" :value="item.name"></el-option>
				</el-select>
			</el-form-item> -->

			<!-- <el-form-item label="车辆所在城市：">
				<el-cascader v-model="city" :props="areaProp" clearable :filterable='true'></el-cascader>
			</el-form-item> -->
			<div>
				<el-upload accept='.pdf' :limit='1' name="file" class="upload-demo" :action="baseURL+'api/common/upload'" multiple :on-success="fileSuccess2"
				 :on-remove="fileRemove2" :file-list="fileList2" :on-preview="lookimg2">
					<el-button class="photo" type="primary">上传检验报告</el-button>
				</el-upload>
			</div>
			<div style="height: 20px;">
				
			</div>
			<div>
				<el-upload name="file" class="upload-demo" :action="baseURL+'api/common/upload'" multiple :on-success="fileSuccess"
				 :on-remove="fileRemove" :file-list="fileList" :on-preview="lookimg">
					<el-button class="photo" type="primary">上传汽车照片</el-button>
				</el-upload>
			</div>
			<!-- <el-form-item>
				<el-upload name="file" class="upload-demo" :action="baseURL+'api/common/upload'" multiple :on-success="fileSuccess"
				 :on-remove="fileRemove" :file-list="fileList" :on-preview="lookimg">
					<el-button class="photo" type="primary">上传汽车照片</el-button>
				</el-upload>
			</el-form-item> -->

			<el-form-item style="text-align:center; margin-top:10px;">
				<el-button v-if="$route.query.cartxt" class="save" type="primary" @click="onSubmit">编辑商品</el-button>
				<el-button v-if="!$route.query.cartxt" class="save" type="primary" @click="onSubmit">发布商品</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import {
		baseURL
	} from "@/service/axiosConfig.js";
	export default {
		data() {
			return {
				areaProp: {
					checkStrictly: true,
					lazy: true,
					lazyLoad: async function(node, resolve) {
						const {
							level
						} = node;
						try {
							const nodes = await this.getAreasp(node.data.tempValue)
							resolve(nodes)
						} catch (error) {
							const nodes = await this.getAreasp()
							resolve(nodes)
						}
					}.bind(this)
				},
				baseURL: baseURL,
				storeInfo: {},
				options: [{
					value: '否',
					label: '否'
				}, {
					value: '是',
					label: '是'
				}],
				
				options2: [{
					value: '无',
					label: '无'
				}, {
					value: '有',
					label: '有'
				}],
				
				options3: [{
					value: '二手车',
					label: '二手车'
				}, {
					value: '债权车',
					label: '债权车'
				}, {
					value: '事故车',
					label: '事故车'
				}, {
					value: '商用车',
					label: '商用车'
				}, {
					value: '公共资源',
					label: '公共资源'
				}, {
					value: '新车直供',
					label: '新车直供'
				}, {
					value: '新能源',
					label: '新能源'
				}],

				//车辆信息
				cartxt: {
					attribute: [],
					category: [],
					color: [],
					mileage: [],
					paifang: [],
					pailiang: [],
				},

				//车辆图片
				fileList: [],
				fileList2: [],

				city: [],

				form: {
					//image: '',
					title: '',
					start_price: '',
					brand_info: '',
					frame_number: '',
					car_number: '',
					engine_number: '',
					mileage_number: '',
					get_card_time: '',
					car_color: '',
					catid: '',
					is_change: '',
					is_driving_license: '',
					is_key: '',
					is_normal: '',
					is_registration_cert: '',
					is_settlement_proof: '',
					is_decompression_letter: '',
					is_business_license: '',
					is_mortgage: '',
					is_transfer_agreement: '',
					car_place_info: '',
					images: '',
					days: '',
					check_report_path:','
				},
				carInfo: {}
			}
		},
		created() {
			this.shopIndex();
			// this.getCarTxt();
			// if (this.$route.query.cartxt) {
			// 	this.getCarinfo()
			// }else{
				//console.log(1111)
				//this.resetForm()
			//}
		},
		methods: {

			resetForm() {
				this.form = {
					title: '',
					start_price: '',
					brand_info: '',
					frame_number: '',
					car_number: '',
					engine_number: '',
					mileage_number: '',
					get_card_time: '',
					car_color: '',
					catid: '',
					is_change: '',
					is_driving_license: '',
					is_key: '',
					is_normal: '',
					is_registration_cert: '',
					is_settlement_proof: '',
					is_decompression_letter: '',
					is_business_license: '',
					is_mortgage: '',
					is_transfer_agreement: '',
					car_place_info: '',
					images: '',
					days: '',
				}
			},

			getCarinfo() {
				/* 	this.$api.carInfo({
						car_id: this.$route.query.id
					}).then(res => {
						for (const key in this.form) {
							if (this.form.hasOwnProperty(key)) {
								this.form[key] = res.data[key]
							}
						}
					}) */
				//this.form=this.$route.query.cartxt;
				let i = this.$route.query.cartxt
				//console.log(a)
				this.$api.usercar_info({id:i}).then(res=>{
					let a=res.data
					// this.form=res.data
					//console.log(this.$route.query.cartxt)
					//console.log(a.card_time)
					this.form.id = a.id
					this.form.title = a.title
					this.form.start_price = a.start_price
					this.form.brand_info = a.brand_info
					this.form.frame_number=a.frame_number
					this.form.car_number = a.car_number
					this.form.engine_number = a.engine_number
					this.form.mileage_number = a.mileage_number
					this.form.get_card_time = a.get_card_time
					// this.form.year_end_time = this.countTime(a.year_end_time)
					// this.form.force_end_time = this.countTime(a.force_end_time)
					this.form.car_color = a.car_color
					this.form.catid = a.catid
					this.form.is_change = a.is_change
					this.form.is_driving_license = a.is_driving_license
					//this.city = [a.province, a.city, a.area]				
					this.form.is_key = a.is_key
					this.form.is_normal = a.is_normal
					this.form.is_registration_cert = a.is_registration_cert
					this.form.is_settlement_proof = a.is_settlement_proof
					this.form.is_decompression_letter = a.is_decompression_letter
					this.form.is_business_license = a.is_business_license
					this.form.is_mortgage = a.is_mortgage
					this.form.is_transfer_agreement = a.is_transfer_agreement
					this.form.car_place_info = a.car_place_info
					this.form.images = a.images
					this.form.days = a.days
					this.form.get_card_time = this.countTime(this.form.get_card_time)
					
					this.form.images=this.form.images.split(',')
					
					for (let i = 0; i < this.form.images.length; i++) {
						this.fileList.push({
							uid: i,
							name: this.form.images[i],
							url: this.form.images[i]
						})
					}
				})
				// console.log(this.$route.query.cartxt)
				// console.log(a.card_time)
				// this.form.id = a.id
				// this.form.title = a.title
				// this.form.start_price = a.start_price
				// this.form.brand_info = a.brand_info
				// this.form.frame_number=a.frame_number
				// this.form.car_number = a.car_number
				// this.form.engine_number = a.engine_number
				// this.form.mileage_number = a.mileage_number
				// this.form.get_card_time = a.get_card_time
				// // this.form.year_end_time = this.countTime(a.year_end_time)
				// // this.form.force_end_time = this.countTime(a.force_end_time)
				// this.form.car_color = a.car_color
				// this.form.catid = a.catid
				// this.form.is_change = a.is_change
				// this.form.is_driving_license = a.is_driving_license
				// //this.city = [a.province, a.city, a.area]				
				// this.form.is_key = a.is_key
				// this.form.is_normal = a.is_normal
				// this.form.is_registration_cert = a.is_registration_cert
				// this.form.is_settlement_proof = a.is_settlement_proof
				// this.form.is_decompression_letter = a.is_decompression_letter
				// this.form.is_business_license = a.is_business_license
				// this.form.is_mortgage = a.is_mortgage
				// this.form.is_transfer_agreement = a.is_transfer_agreement
				// this.form.car_place_info = a.car_place_info
				// //this.form.images = a.images
				// this.form.days = a.days
				
				

				console.log(this.form)


			},


			/* 文件处理 */
			fileRemove(file, fileList) {
				console.log(file)
				//console.log(fileList)
				for (let i = 0; i < this.fileList.length; i++) {
					if (this.fileList[i].url == file.url) {
						console.log(i)
						this.fileList.splice(i, 1);
						break;
					}
				}
				console.log(this.fileList)
			},
			
			fileRemove2(file, fileList) {
				this.fileList2.length=0
			},

			fileSuccess(response, file, fileList) {
				// if(this.form.image==''){
				// 	this.form.image = response.data.url
				// }else {
				// 	this.form.image = this.form.image+','+response.data.url
				// }
				console.log(file.uid)
				this.fileList.push({
					uid: file.uid,
					name: file.name,
					url: file.response.data.url
				})
				this.fileList.push()
				console.log(this.fileList)
			},
			
			fileSuccess2(response, file, fileList) {
				console.log(file)
				this.fileList2.push({
					uid: file.uid,
					name: file.name,
					url:file.response.data.url
				})
			},
			
			//点击上传列表文件钩子
			lookimg(file){
				console.log(file)
				window.open(file.url,"_black")
			},
			lookimg2(file){
				console.log(file)
				window.open(file.url,"_black")
			},
			onSubmit() {
				/* 省 市 区 分开 */
				// if (this.city.length > 0) {
				// 	this.form.province = this.city[0]
				// 	this.form.city = this.city[1]
				// 	this.form.area = this.city[2]
				// }
				console.log(this.form)
				
				if(this.fileList2.length!=0){
					this.form.check_report_path=this.fileList2[0].url
				}

				this.form.images = '';
				if (this.fileList.length > 0) {
					this.fileList.forEach(item => {
						if (this.form.images == '') {
							this.form.images = item.url
						} else {
							this.form.images = this.form.images + ',' + item.url
						}

					})

				}

				//this.form.id = this.storeInfo.id

				this.$api.edit_car(this.form).then(res => {
					if(res.code==1){
						this.$message.success(res.msg)
						//console.log('data')
					}else {this.$message.error(res.msg)}
					
					if (res.code == 1) {
						this.resetForm()
						this.city='';
						this.fileList=[]
						return;
					}
				})
			},
			onSubmitEdit() {
				/* 省 市 区 分开 */

				if (this.form.city.length > 0) {
					this.form.province = this.city[0]
					this.form.city = this.city[1]
					this.form.area = this.city[2]
				}
				this.form.shop_id = this.storeInfo.id
				this.form.car_id = this.$route.query.id


				this.$api.carEdit(this.form).then(res => {
					this.$message.success(res.msg)
					if (res.code == 1) {
						this.resetForm()
					}
				})
			},
			/* 三级联动 */
			async getAreasp(id) {
				var tempArr = []
				let res = await this.$api.getAreas({
					id: id
				})
				res.data.forEach(item => {
					tempArr.push({
						tempValue: item.id,
						value: item.name,
						label: item.name
					})
				});
				return tempArr
			},

			//获取车辆选择属性
			getCarTxt() {
				this.$api.getCarAttribute().then(res => {
					this.cartxt.attribute = res.data
				})
				this.$api.getCarCategory().then(res => {
					this.cartxt.category = res.data
				})
				this.$api.getCarColor().then(res => {
					this.cartxt.color = res.data
				})
				this.$api.getCarMileage().then(res => {
					this.cartxt.mileage = res.data
				})
				this.$api.getCarPaifang().then(res => {
					this.cartxt.paifang = res.data
				})
				this.$api.getCarPailiang().then(res => {
					this.cartxt.pailiang = res.data
				})
			},


			shopIndex() {
				this.$api.fapaishenqing().then(res => {
					console.log(res)
					if(res.code==1){
						if ( res.data == null || res.data.check_status != 1) {
							// if(res.data.check_status == 2){
								
							// }
						// if (res.data == null) {
							this.$router.push('/sell')
						} else {
							this.storeInfo = res.data						
						}
					}else{
						this.$router.push('/sell')
						
					}
					
				})
			},

			//计算时间戳
			countTime(nowTimea) {
				var date = new Date(nowTimea * 1000);

				let y = date.getFullYear(); // 年
				let MM = date.getMonth() + 1; // 月
				//MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate(); // 日
				return y + '-' + MM + '-' + d
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	#person-design {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.person-big-title {
		padding-bottom: 0px;
	}

	.design-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	.save {
		width: 163px;
		height: 45px;
		// background: rgba(191, 191, 191, 1);
		border-radius: 4px;

		font-size: 17px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: -10px;
		padding: 0;
	}

	/deep/.el-button+.el-button {
		margin: 0;
	}

	/deep/ .el-form-item__label,
	/deep/ .el-checkbox__label {
		font-size: 16px;
	}

	/deep/ .el-table thead {
		background: rgba(247, 247, 247, 1) !important;
		font-size: 15px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		// line-height:43px;
	}

	/deep/ .el-table th,
	.el-table tr {
		background: rgba(247, 247, 247, 1) !important;
	}

	/deep/.el-table {
		color: #333 !important;
	}
</style>
