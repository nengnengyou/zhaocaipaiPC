/* * @Author: Chenxu * @Date: 2019-07-29 16:36:12 * @Last Modified by: Chenxu * @Last Modified time: 2019-07-29
16:36:12 */
<template>
	<div id="person-wallet">
		<!-- <div v-html="alipayWap" ref="alipayWap"></div> -->
		<!-- 提现model -->
		<el-dialog :close-on-press-escape="false" :show-close="false" :destroy-on-close="false"
			:close-on-click-modal="false" title="二维码" align="center" :visible.sync="erCodeShow">
			<qrcode-vue style="padding:100px;" :size="256" :value="link" bgcolor="#fff" fgColor="#000"></qrcode-vue>
			<span slot="footer" class="dialog-footer">

				<el-button type="primary" @click="erCodeShow = false">关 闭</el-button>
			</span>
		</el-dialog>

		<!-- 余额提现 -->
		<el-dialog title="余额提现" :visible.sync="jineTixian" width="30%">
			<el-form ref="form" :model="yue" label-width="80px">
				<el-form-item label="提现金额">
					<el-input v-model="yue.pay_num" @input="actual"></el-input>
					<span v-if="yueTransForm">预计到账：{{yueTransForm}}。（以实际到账为准）</span>
				</el-form-item>

				<el-form-item label="真实名称">
					<el-input v-model="yue.real_name" placeholder="需与收款账号姓名一致!"></el-input>
				</el-form-item>
				<el-form-item label="收款账号">
					<el-input v-model="yue.account"></el-input>
				</el-form-item>
				<el-form-item v-if="yue.type == 2" label="开户行">
					<el-input v-model="yue.open_bank"></el-input>
				</el-form-item>
				<el-form-item width="100%" label="账户类型">
					<el-select v-model="yue.type" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="jineTixian = false">取 消</el-button>
				<el-button type="primary" @click="drawBalance">提 现</el-button>
			</span>
		</el-dialog>

		<!-- 保证金 model -->
		<el-dialog title="保证金提现" :visible.sync="baozhengjin" width="30%">
			<el-form ref="form" :model="bzj" label-width="80px">
				<el-form-item label="提现金额">
					<el-input v-model="bzj.pay_num"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="baozhengjin = false">取 消</el-button>
				<el-button type="primary" @click="bondDraw">提 现</el-button>
			</span>
		</el-dialog>

		<!-- 月充值Model -->
		<el-dialog title="余额充值" :visible.sync="yuePayShow" width="30%">
			<el-form ref="form" :model="yuePayData" label-width="80px">
				<el-form-item label="充值金额">
					<el-input v-model="yuePayData.pay_num"></el-input>
				</el-form-item>
				<el-form-item width="100%" label="账户类型">
					<el-select v-model="yuePayData.type" placeholder="请选择">
						<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="yuePayShow = false">取 消</el-button>
				<el-button type="primary" @click="yuePay">充 值</el-button>
			</span>
		</el-dialog>

		<!-- 保证金充值Model -->
		<el-dialog title="保证金充值" :visible.sync="bzjPayShow" width="30%">
			<el-form ref="form" :model="bzjPayData" label-width="80px">
				<el-form-item label="充值金额">
					<el-input v-model="bzjPayData.pay_num"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="bzjPayShow = false">取 消</el-button>
				<el-button type="primary" @click="bzjPay">充 值</el-button>
			</span>
		</el-dialog>

		<!-- 招财币兑换 -->
		<el-dialog title="招财币兑换" :visible.sync="zhaocai" v-if="zhaocai" width="460px">
			<el-form ref="form" :model="zhaocaidata" label-width="120px">
				<el-form-item label="兑换金额(元)">
					<el-input v-model="zhaocaidata.cost" placeholder="输入要兑换金额"></el-input>
				</el-form-item>
			</el-form>
			<p style="margin-left: 120px;">兑换比例：1元=10招财币</p>
			<span slot="footer" class="dialog-footer">
				<el-button @click="zhaocai = false">取 消</el-button>
				<el-button type="primary" @click="duihuanbi">兑 换</el-button>
			</span>
		</el-dialog>

		<p class="person-big-title" v-if="type == 'balance'">钱包余额</p>
		<p class="person-big-title" v-if="type == 'pledge'">保证金</p>
		<p class="person-big-title" v-if="type == 'zhaocai'">招财币</p>
		<p class="person-big-title" v-if="type == 'log'">钱包明细</p>
		<p class="person-big-title" v-if="type == 'xiugaisj'">修改手机号</p>
		<p class="person-big-title" v-if="type == 'xiugaimima'">修改登录密码</p>
		<p class="person-big-title" v-if="type == 'xiugai'">修改支付密码</p>
		<p class="person-big-title" v-if="type == 'xiugaidiqu'">修改资料</p>
		<el-divider></el-divider>
		<div v-if="type == 'balance'">
			<div class="banner">
				<div class="left">
					<p class="title">钱包余额/元</p>
					<p class="num">{{userInfo.money}}</p>
					<!--          <span class="shu"></span>-->
					<el-button class="left-btn" type="primary" style="color:#fff;margin-right: 40px"
						@click="yuePayShow = true">充值</el-button>
					<el-button class="tixian" id="right-btn-tixian" type="primary" style="color:#fff;"
						@click="jineTixian = true">提现</el-button>
				</div>
				<!--        <div class="right">-->
				<!--          <p class="title">可提现金额/元</p>-->
				<!--          <p class="num">{{userInfo.extract_num}}</p>-->
				<!--        </div>-->
				<!--        <el-button class="tixian" type="text" style="color:#fff;" @click="jineTixian = true">提现</el-button>-->
			</div>
			<p class="person-small-title">钱包使用说明</p>
			<div class="intro">
				<div class="int-content">
					<p v-html="walletInfo" class="int-content-text"></p>
				</div>
			</div>

			<div>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="充值记录" name="2">
						<el-table :data="chongzhi" border stripe style="width: 100%">
							<el-table-column prop="create_time" label="创建时间" align="center"></el-table-column>
							<el-table-column prop="pay_time" label="支付时间" align="center">
							</el-table-column>
							<el-table-column prop="status_text" label="交易状态" align="center"></el-table-column>
							<el-table-column prop="type_text" label="类型" align="center"></el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="提现记录" name="3">
						<el-table :data="tixian" border stripe style="width: 100%">
							<el-table-column prop="create_time" label="创建时间" align="center"></el-table-column>
							<el-table-column prop="pay_num" label="提现金额" align="center">
							</el-table-column>
							<el-table-column prop="status_text" label="审核状态" align="center"></el-table-column>
							<el-table-column prop="cause" label="退款原因" align="center"></el-table-column>
							<el-table-column prop="type_text" label="提现类型" align="center"></el-table-column>

						</el-table>
					</el-tab-pane>
				</el-tabs>
			</div>

		</div>
		<div v-if="type == 'pledge'">
			<div class="banner">
				<div class="left">
					<p class="title">可用保证金/元</p>
					<p class="num">{{userInfo.bond}}</p>
					<span class="shu"></span>
					<el-button class="left-btn1" type="text" style="color:#fff;" @click="bzjPayShow = true">充值
					</el-button>
					<el-button class="left-btn" type="text" style="color:#fff;" @click="baozhengjin = true">提现
					</el-button>
				</div>
				<div class="right">
					<p class="title">已冻结保证金/元</p>
					<p class="num">{{userInfo.free_bond}}</p>
				</div>
				<!-- <el-button class="tixian" type="text" style="color:#fff;" @click="bondThaw">申请解冻</el-button> -->
			</div>
			<p class="person-small-title">保证金使用说明</p>
			<div class="intro">
				<div class="int-title">
					<span class="dot"></span>
					交易保证金
				</div>

				<div class="int-content">
					<p v-html="bzjshuoming" class="int-content-text"></p>
				</div>
			</div>
		</div>

		<div v-if="type == 'zhaocai'">
			<div class="banner">
				<div class="left">
					<p class="title">招财币/个</p>
					<p class="num">{{userInfo.score}}</p>
					<el-button class="left-btn" type="primary" style="color:#fff;margin-right: 40px"
						@click="zhaocai = true">兑换</el-button>
					<!-- <el-button class="left-btn1" type="text" style="color:#fff;" @click="zhaocai = true">兑换</el-button> -->
					<!-- <span class="shu"></span> -->
				</div>
				<!-- <div class="right">
					<p class="title">可提现/元</p>
					<p class="num">{{userInfo.no_extract_num}}</p>
				</div> -->
				<!-- <el-button class="tixian" type="text" style="color:#fff;" @click="onSubmit">提现</el-button> -->
			</div>
			<!-- <p class="person-small-title">招财币使用说明</p> -->
			<p class="person-small-title">招财币兑换记录</p>

			<el-table :data="zhaocaiLogData" border stripe style="width: 100%">
				<el-table-column prop="createtime" label="创建时间" width="180">
				</el-table-column>
				<el-table-column prop="amount" label="招财币" width="180">
				</el-table-column>
				<el-table-column prop="text" label="备注">
				</el-table-column>
			</el-table>
			<!-- <div class="intro">
				<div class="int-title">
					<span class="dot"></span>
					招财币
				</div>

				<div class="int-content">
					<p v-html="xieyis[5].content" class="int-content-text"></p>
				</div>
			</div> -->
		</div>

		<div v-if="type == 'log'">

			<el-table :data="moneyLogData" border stripe style="width: 100%">
				<el-table-column prop="createtime" label="创建时间" width="180">
				</el-table-column>
				<el-table-column prop="amount" label="金额" width="180">
				</el-table-column>
				<el-table-column prop="text" label="使用明细">
				</el-table-column>
			</el-table>


		</div>

		<!-- 修改手机号 -->
		<div v-if="type == 'xiugaisj'" style="width: 587px;">
			<el-form label-position="修改手机号" label-width="80px" :model="formLabe">
				<!-- <el-form-item label="手机号">
					<el-input v-model="formLabelAlign.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item> -->
				<el-form-item label="新手机号">
					<el-input v-model="formLabe.mobile" placeholder="请输入新手机号"></el-input>
				</el-form-item>

				<el-form-item label="验证码">
					<el-input v-model="formLabe.captcha" placeholder="请输入验证码"></el-input>
					<div style=" position: absolute;right: 5px;top: 0;">
						<el-button type="text" @click="getyzm('changemobile')">{{timeTips}}</el-button>
					</div>
				</el-form-item>
				<el-form-item label="">
					<el-button type="primary" @click="tijiao2">确认</el-button>
				</el-form-item>
			</el-form>
		</div>

		<!-- 修改登录密码 -->
		<div v-if="type == 'xiugaimima'" style="width: 587px;">
			<el-form label-position="修改登录密码" label-width="80px" :model="formLabe">
				<!-- <el-form-item label="手机号">
					<el-input v-model="formLabelAlign.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item> -->
				<el-form-item label="新密码">
					<el-input v-model="formmima.password" placeholder="请输入新密码" show-password></el-input>
				</el-form-item>

				<el-form-item label="确认密码">
					<el-input v-model="formmima.newpassword" placeholder="确认密码" show-password></el-input>
				</el-form-item>

				<el-form-item label="验证码">
					<el-input v-model="formmima.captcha" placeholder="请输入验证码"></el-input>
					<div style=" position: absolute;right: 5px;top: 0;">
						<el-button type="text" @click="getyzm('resetpwd')">{{timeTips}}</el-button>
					</div>
				</el-form-item>
				<el-form-item label="">
					<el-button type="primary" @click="tijiao3">确认</el-button>
				</el-form-item>
			</el-form>
		</div>

		<!-- 修改支付密码 -->
		<div v-if="type == 'xiugai'" style="width: 587px;">
			<el-form label-position="修改支付密码" label-width="80px" :model="formZF">
				<!-- <el-form-item label="手机号">
					<el-input v-model="formLabelAlign.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item> -->
				<el-form-item label="支付密码">
					<el-input v-model="formZF.password" placeholder="请输入密码" show-password></el-input>
				</el-form-item>
				<el-form-item label="确认密码">
					<el-input v-model="formZF.repassword" placeholder="请再次输入密码" show-password></el-input>
				</el-form-item>
				<el-form-item label="验证码">
					<el-input v-model="formZF.code" placeholder="请输入验证码"></el-input>
					<div style=" position: absolute;right: 5px;top: 0;">
						<el-button type="text" @click="getyzm('resetppwd')">{{timeTips}}</el-button>
					</div>
				</el-form-item>
				<el-form-item label="">
					<el-button type="primary" @click="tijiao">确认</el-button>
				</el-form-item>
			</el-form>
		</div>

		<!-- 修改地区 -->
		<div v-if="type == 'xiugaidiqu'" style="width: 587px;">
			<el-form label-position="修改资料" label-width="80px" :model="formLabe">
				<!-- <el-form-item label="手机号">
					<el-input v-model="formLabelAlign.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item> -->				
				<el-form-item label="姓名">
					<el-input v-model="xiugainicheng"></el-input>
				</el-form-item>
				
				<el-form-item label="选择地区">
					<el-cascader style="width: 90%;" :value="diqu" :props="areaProp"></el-cascader>
				</el-form-item>
				
				<el-form-item label="主营模块">
					<el-checkbox-group v-model="zhuying">
						<el-checkbox :label="item.name" name="type" v-for='item in mokuai' :key="item.id"></el-checkbox>					      
					</el-checkbox-group>
				</el-form-item>
				

				</el-form-item>
				<el-form-item label="">
					<el-button type="primary" @click="tijiao4">确认</el-button>
				</el-form-item>
			</el-form>
		</div>




	</div>
</template>
<script>
	import qrcodeVue from 'qrcode-vue'
	export default {
		components: {
			qrcodeVue
		},
		data() {
			return {
				areaProp: {
					checkStrictly: false,
					lazy: true,
					lazyLoad: async function(node, resolve) {
						console.log(node)
						const {
							level
						} = node;

						try {
							console.log(node.data.value)
							switch (level) {
								case 1:
									this.province_id = node.data.value
									break;
								case 2:
									this.city_id = node.data.value
									break;
								case 3:
									this.district_id = node.data.value
									break;
							}

							const nodes = await this.getAreasp(node.data.tempValue)
							resolve(nodes)
						} catch (error) {
							const nodes = await this.getAreasp()
							resolve(nodes)
						}

					}.bind(this)
				},
				diqu: '',
				timeTips: '获取验证码',
				time: 60,

				bzjshuoming: '',

				formLabe: {
					mobile: "",
					captcha: "",
				},

				formmima: {
					mobile: '',
					password: '',
					newpassword: '',
					captcha: '',
				},


				zhaocaiLogData: [],

				formZF: {
					mobile: "",
					password: "",
					repassword: "",
					code: "",
				},
				zhaocai: false,
				zhaocaidata: {
					cost: '',
				},
				province_id: '',
				city_id: '',
				district_id: '',
				xiugainicheng: "",

				imageUrl: '',

				walletInfo: '',
				xieyis: [],
				type: 'balance',
				userInfo: {},
				baozhengjin: false,
				bzjPayShow: false,
				jineTixian: false,
				yuePayShow: false,
				link: '',
				erCodeShow: false,
				yueTransForm: '', //预计到账余额
				moneyLogData: [],
				bzj: {
					pay_num: ''
				},
				bzjPayData: {
					pay_num: ''
				},
				yuePayData: {
					pay_num: '',
					ordertype: 'chongzhi',
					type: 0,
					met: 'scan',
				},
				options: [{
					value: 0,
					label: '微信'
				}, {
					value: 1,
					label: '支付宝'
				}, {
					value: 2,
					label: '银行'
				}],
				options1: [{
					value: 0,
					label: '微信'
				}, {
					value: 1,
					label: '支付宝'
				}],
				yue: {
					pay_num: '',
					type: 0,
					real_name: '',
					account: '',
					open_bank: ''
				},
				activeName: '2',
				tixian: [],
				chongzhi: [],
				mokuai:[],
				name:'',
				zhuying:[],
			}
		},
		created() {
			this.type = this.$route.params.type
			this.getUserInfo()
			this.chaxuntixian()
			this.chaxunchongzhi()

			this.getMoneybagAgreement()
			//this.getXieyi()
			this.getbzjsm()
			this.moneyLog()
			this.getzhaocaiLog()
			this.getmokuai()
		},
		beforeRouteUpdate(to, from, next) {
			this.type = to.params.type
			next()
		},
		methods: {
			
			getmokuai(){
				this.$api.getmokuai().then(res=>{
					this.mokuai=res.data
				})
			},

			chaxuntixian() {
				this.$api.tixianjilu().then(res => {
					this.tixian = res.data
					console.log(this.tixian);
				})
			},
			chaxunchongzhi() {
				this.$api.chongzhijilu().then(res => {
					this.chongzhi = res.data
					console.log(this.chongzhi);
				})
			},

			handleClick(tab, event) {
				console.log(tab, event);
			},
			getnickname() {
				this.$api.userzx().then(res => {
					//console.log(res)
					this.nickname = res.data.welcome
					this.xiugainicheng = res.data.welcome
					if (res.data.welcome == '' || res.data.welcome == null) {
						this.xiugainicheng = '尾号' + this.userInfo.mobile.substring(7, this.userInfo.mobile.length)
						//console.log(this.xiugainicheng)
						//this.xigai()
					}
				})
			},

			async getAreasp(id) {
				var tempArr = []
				let res = await this.$api.getAreas({
					id: id
				})
				res.data.forEach(item => {
					tempArr.push({
						tempValue: item.id,
						value: item.id,
						label: item.name
					})
				});
				return tempArr
			},
			//获取招财币兑换记录
			getzhaocaiLog() {
				this.$api.getzhaocailog().then(res => {
					if (res.code == 1) {
						this.zhaocaiLogData = res.data
						this.zhaocaiLogData.forEach(item => {
							item.createtime = this.timestampToTime(item.createtime)
						})
					}
				})
			},

			//兑换招财币
			duihuanbi() {
				this.$api.duihuanbi({
					cost: this.zhaocaidata.cost
				}).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
						this.zhaocai = false
						this.getUserInfo()
					} else {
						this.$message.error(res.msg)
					}

				})
			},

			//提交修改支付密码
			tijiao() {
				this.formZF.mobile = this.userInfo.mobile
				this.$api.setpaypass(this.formZF).then(res => {
					if (res.code == 1) {
						this.$message.success(res.data)
						this.$router.push('/person')
					} else {
						this.$message.error(res.msg)
					}
				})
			},

			//提交修改手机号
			tijiao2() {
				//this.formLabelAlign.mobile=this.userInfo.mobile
				this.$api.xiugaiMobile(this.formLabe).then(res => {
					if (res.code == 1) {
						this.$message.success("修改成功")
						window.localStorage.clear()
						this.$store.commit('clear')
						this.$router.push('/login')
					} else {
						this.$message.error(res.msg)
					}
				})
			},

			//提交修改密码
			tijiao3() {
				this.formmima.mobile = this.userInfo.mobile
				this.$api.forget(this.formmima).then(res => {
					if (res.code == 1) {
						this.$message.success("修改成功")
						this.$router.push('/person')
						//window.localStorage.clear()
						//this.$store.commit('clear')
						//this.$router.push('/login')
					} else {
						this.$message.error(res.msg)
					}
				})
			},

			//修改地区
			tijiao4() {			
				let main_module=''
				this.zhuying.forEach(item=>{
					main_module=main_module+item+','
				})
				main_module=main_module.slice(0,main_module.length-1)
				this.$api.editAvatar({
					username: this.userInfo.username,
					avatar: this.imageUrl,
					nickname: this.xiugainicheng,
					bio: '',
					province_id: this.province_id,
					city_id: this.city_id,
					district_id: this.district_id,					
					main_module:main_module
				}).then(res => {
					if (res.code == 1) {
						this.nicheng = false
						this.$message.success(res.msg)
					} else {
						this.$message.error(res.msg)
					}

				})
			},

			//获取验证码
			getyzm(event) {
				var user = this.formZF.mobile;
				console.log(user);
				// if (user == null) {
				// 	this.$message.error("请输入正确的手机号");
				// 	return;
				// }
				if (user.length == 11) {
					this.$api.duanxin({
						mobile: user,
						event: event
					}).then(res => {
						if (res.code == 1) {
							this.$message.success('验证码发送成功！')

							this.timeDown();
						} else {
							this.$message.error('验证码发送失败！')
						}
					})

				} else this.$message.error("请输入正确的手机号");
				//this.timeDown();
			},

			//验证倒计时
			timeDown() {
				let _this = this
				this.clickCode = true
				let timer = setInterval(() => {
					if (this.time > 0) {
						this.time--;
						this.timeTips = '已发送（' + this.time + ')'
					} else {
						this.clickCode = false
						this.time = 60
						this.timeTips = '重新获取验证码'
						clearInterval(timer)
					}
				}, 1000)
			},

			moneyLog() {
				this.$api.getMoneyLog().then(res => {
					if (res.code == 1) {
						this.moneyLogData = res.data;
					}

				})
			},
			actual() {


				if (this.yue.type == 0 || this.yue.type == 1) {
					this.yueTransForm = (this.yue.pay_num - this.yue.pay_num * 0.006).toFixed(2)
				} else {
					this.yueTransForm = this.yue.pay_num
				}

			},


			/* 获取协议信息 */
			getXieyi() {
				this.$api.getXieyi().then(res => {
					this.xieyis = res.data
				})
			},
			/* 获取钱包信息 */
			getMoneybagAgreement() {
				this.$api.getMoneybagAgreement().then(res => {
					this.walletInfo = res.msg.content
					//console.log(res, this.walletInfo);
				})
			},

			/* 获取订单状态 */
			checkyuepass(no) {
				let params = {
					out_trade_no: no
				}
				return this.$api.checkyuepass(params)
			},
			/* 二维码 */
			qrShow(data) {
				this.link = data
			},
			// 微信支付
			WxpayInfo(res) {
				let params = {
					body: res.data.body,
					out_trade_no: res.data.out_trade_no,
					total_fee: res.data.pay_num,
					device: 'pc'
				}
				this.$api.WxpayInfo(params).then(res => {
					this.qrShow(res.data.mweb_url)
					this.erCodeShow = true
					this.yuePayShow = false
				})
			},


			// zhifubao支付
			AliPayInfo(res) {
				// let params =
				// 	`http://zcp.zhaocaipaipai.com/api/moneybag/AliPayPc?body=${res.data.body}&total_amount=${res.data.pay_num}&out_trade_no=${res.data.out_trade_no}&subject=余额充值&return_url=http://zhaocaipaipai.com/person/wallet/balance`
				// window.open(params)

				window.open('https://www.zhaocaipaipai.com/PC/mulu/alipay.html?form=' + res)


			},


			/* 金额充值 */
			// yuePay() {
			// 	this.$api.setMoneybagIndent(this.yuePayData).then(res => {
			// 		this.$message.success(res.msg)
			// 		/* 对接微信支付接口 */
			// 		if (this.yuePayData.type == 0) {
			// 			this.qrShow(res.data.wx)
			// 			let timeOut = setInterval(async () => {
			// 				let status = await this.checkyuepass(res.data.out_trade_no)
			// 				if (status.data.status == 1) {
			// 					clearTimeout(timeOut)
			// 					this.erCodeShow = false
			// 					//this.yuePayShow = false
			// 					this.qrShow(res.data.wx)
			// 					//this.erCodeShow = true
			// 					this.getUserInfo()
			// 				}
			// 			}, 3000);
			// 			//this.WxpayInfo(res)
			// 		} else if (this.yuePayData.type == 1) {
			// 			/* 对接支付宝的 */
			// 			this.AliPayInfo(res)
			// 		}
			// 	})
			// },

			// /* 金额充值 */
			yuePay() {

				if (this.yuePayData.type == 1) {
					this.yuePayData.met = 'web'
				} else {
					this.yuePayData.met = 'scan'
				}

				this.$api.setMoneybagIndent(this.yuePayData).then(res => {
					//this.$message.success(res.msg)
					/* 对接微信支付接口 */
					if (res.code == 0) {
						this.$message.success(res.msg)
						return;
					}

					if (this.yuePayData.type == 0) {
						console.log(res.data)
						this.qrShow(res.data.wx)
						this.erCodeShow = true
						this.yuePayShow = false
						let timeOut = setInterval(() => {
							this.$api.checkyuepass({
								out_trade_no: res.data.out_trade_no
							}).then(res2 => {
								console.log(res)
								if (res2.code == 1) {
									clearTimeout(timeOut)
									this.erCodeShow = false
									this.$message.success('充值成功！请刷新本页面')
									// this.$route.push(0)
									this.$router.go(0)
									// router.go(0)
									//window.open('/person/wallet/balance')
									//this.$api.getUserInfo()
								}

							})

						}, 3000)

						//this.WxpayInfo(res)
					} else if (this.yuePayData.type == 1) {
						/* 对接支付宝的 */
						console.log(res)

						this.AliPayInfo(res)

					}
				})
			},


			/* 保证金充值 */
			bzjPay() {
				this.$api.bondRecharge({
					pay_num: this.bzjPayData.pay_num
				}).then(res => {
					this.bzjPayShow = false
					this.$message.success(res.msg)
					this.getUserInfo()
				})
			},

			/*获取保证金说明*/

			getbzjsm() {
				this.$api.getFuwuxieyi({
					name: 'baozheng'
				}).then(res => {
					this.bzjshuoming = res.data.content
				})

			},


			/* 解冻 */
			bondThaw() {
				this.$api.bondThaw().then(res => {
					this.$message.success(res.msg)
					this.getUserInfo()
				})
			},
			/* 保证金体现 */
			bondDraw() {
				this.$api.bondDraw(this.bzj).then(res => {
					this.$message.success(res.msg)
					this.getUserInfo()
					this.baozhengjin = false
				})
			},
			/* 现金提现 */
			drawBalance() {
				this.$api.drawBalance(this.yue).then(res => {
					this.$message.success(res.msg)
					this.getUserInfo()
					this.jineTixian = false
				})
			},
			getUserInfo() {
				this.$api.getUserInfo().then(res => {
					this.userInfo = res.data
					this.formZF.mobile = res.data.mobile
					this.diqu = res.data.province_name + '/' + res.data.city_name + '/' + res.data.district_name
					this.zhuying=res.data.main_module.split(',')
					// console.log(this.zhuying);
					// console.log(this.diqu)
					this.getnickname()
				})
			},

			//时间戳转换
			timestampToTime(timestamp) {
				var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
				var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
				var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
				return Y + M + D + h + m + s;
			},
		},

	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");


	#right-btn-tixian {
		right: -14px;
		bottom: 0;
	}

	#person-wallet {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.person-big-title {
		padding-bottom: 0px;
	}

	.wallet-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	.banner {
		height: 133px;
		/*background: rgba(51, 133, 255, 1);*/
		background-color: #1e76f7;
		margin-bottom: 20px;
		position: relative;
		padding: 22px 22px;
	}

	.left {
		position: relative;
		float: left;
		width: 410px;
		height: 100%;
	}

	.right {
		float: left;
		margin-left: 42px;
	}

	.num {
		font-size: 46px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(247, 247, 247, 1);
		// line-height: 293px;
	}

	.title {
		padding-bottom: 30px;
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(247, 247, 247, 1);
		// line-height:90px;
	}

	.shu {
		width: 2px;
		height: 90px;
		background-color: rgba(230, 230, 230, 1);
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(0, -50%);
	}

	.left-btn {
		position: absolute;
		bottom: 0;
		right: 30px;
	}

	.left-btn1 {
		position: absolute;
		bottom: 0;
		right: 80px;
	}

	.tixian {
		position: absolute;
		bottom: 20px;
		right: 20px;
	}

	.intro {
		.dot {
			display: inline-block;
			vertical-align: middle;
			width: 8px;
			height: 8px;
			background-color: #000;
			border-radius: 50%;
		}

		.int-title {
			font-size: 18px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			// line-height:90px;
		}

		.int-content-text {
			font-size: 16px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(102, 102, 102, 1);
			line-height: 28px;
			padding-top: 15px;
			padding-bottom: 10px;
		}
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

	#qrCode {
		position: fixed;
		top: 50%;
		left: 50%;
	}
</style>
