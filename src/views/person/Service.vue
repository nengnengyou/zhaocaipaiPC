<template>
	<div id="person-service">
		
		
		<!-- 尊享服务升级失败框 -->
		
		<el-dialog title="请先绑定手机号" v-if="bdsjh" :visible.sync="bdsjh" :modal="false" width="455px">		
			<el-form>
			
				<el-form-item label="手机号">
					<el-input type="text" v-model="bangding.mobile"></el-input>
				</el-form-item>
		
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="bdsjh = false">取 消</el-button>
				<el-button type="primary" @click="upVip">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 协议 -->
		<el-dialog title="" :visible.sync="dialogVisible" width="50%">
			<div style="max-height: 500px; overflow: auto;">
				<p v-html="xieyi"></p>
			</div>
			<span slot="footer" class="dialog-footer">
				<!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>

		<div class="person-s-div">
			<p class="person-big-title">尊享服务</p>
			<p style="position: relative;cursor: pointer;
    bottom: -28px;
    height: 28px;
    font-size: 20px;
    border-bottom: 1.5px solid;"
			 @click="tuibaozhengjin">申请退回保证金</p>
		</div>
		<el-divider></el-divider>

		<el-dialog title="输入支付密码" v-if="bzjPayShow" :visible.sync="bzjPayShow" width="30%">
			<el-form label-width="80px">
				<el-form-item label="支付密码">
					<el-input type="password" v-model="form.paypassword"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="bzjPayShow = false">取 消</el-button>
				<el-button type="primary" @click="upVip">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog title="设置支付密码" :visible.sync="setpassShow" width="30%">
			<el-form label-width="80px">
				<el-form-item label="支付密码">
					<el-input type="password" v-model="setpaypassword"></el-input>
				</el-form-item>
				<el-form-item label="确认密码">
					<el-input type="password" v-model="setrepaypassword"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="setpassShow = false">取 消</el-button>
				<el-button type="primary" @click="setPass">确 定</el-button>
			</span>
		</el-dialog>

		<!-- <div class="cards">
      <div v-for="(item,index) in list" :key="item.level" class="card" :class="'c'+index">
        <div class="top clearfloat">
          <span v-if="item.level==0" class="title">普通用户</span>
          <span v-if="item.level==1" class="title">黄金会员</span>
          <span v-if="item.level==2" class="title">白金会员</span>
          <span v-if="item.level==3" class="title">钻石会员</span>
          <span class="tag">元/年</span>
          <span class="price">{{item.money}}</span>
        </div>
        <p class="content">{{item.content}}</p>
        <button
          @click="showUpVip(item.level,item.money)"
          v-if="item.level!=0"
          class="buy"
          :class="'c'+index"
        >购买</button>
      </div>
    </div> -->

		<div class="cards">
			<div v-for="(item,index) in list" :key="item.level" class="card" :class="'c'+index">
				<div class="top clearfloat">
					<span class="title">{{item.name}}</span>
					<span class="tag"></span>
					<span class="price">{{item.money}}</span>
				</div>
				<p class="content">{{item.info}}</p>
				<button @click="showUpVip(item.level,item.money,item.name)" 
				v-if="!(uservip==item.level&&sq!=2)" class="buy" :class="'c'+index" v-text="uservip<item.level?'升级':uservip==item.level&&sq=='2'?'不再续期':uservip==item.level&&sq!='2'?'':'不可降级'" ></button>
			</div>
		</div>



	</div>
</template>
<script>
	export default {
		data() {
			return {
				bdsjh:false,
				dialogVisible: true,
				xieyi: "",
				list: [],
				bzjPayShow: false,
				setpassShow: false,
				setpaypassword: '',
				setrepaypassword: '',
				form: {
					level: 0,
					money: 0,
					paypassword: ''
				},
				
				uservip:1,
				sq:0,
			}
		},
		created() {
			this.getuser()
			this.vipList()
			this.getxieyi()			
		},
		methods: {
			
			getuser(){
				this.$api.getUserInfo().then(res=>{
					this.uservip=res.data.level
					this.sq=res.data.sq
				})
			},


			getxieyi() {
				this.$api.getFuwuxieyi({
					name: 'zunxiang'
				}).then(res => {
					this.xieyi = res.data.content
				})

			},

			showUpVip(level, money, name) {
				//this.form.level = level
				//this.form.money = money
				//this.bzjPayShow = true
				if(this.sq!=2&&this.uservip==level){
					this.$alert('不可操作','提示')
					return
				}else if(this.sq==2&&this.uservip==level){
					this.$confirm('确定不再续期?', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					}).then(() => {
						this.$api.Vipsq().then(res=>{
							this.$alert(res.msg,'提示')
							this.sq=0
						})	
					}).catch(() => {
					
					})
					
					return
				}
				
				if(this.uservip>level){
					this.$alert('不可进行降级操作','提示')
					return
				}else if(this.uservip==level){
					this.$confirm('确定以冻结  ' + money + '元  保证金方式获得  ' + name, '确定冻结', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					}).then(() => {
						this.$api.xufeiVip().then(res=>{
							if(res.code==1){
								// this.$message.success(res.msg)
								this.$confirm(res.msg)
							}else{
								this.$confirm(res.msg)
								// this.$message.error(res.msg)								
							}
						})
					}).catch(() => {
					
					})
					
					return
				}

				this.$confirm('确定以冻结  ' + money + '元  保证金方式获得  ' + name, '确定冻结', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(() => {
					this.$api.upVip({
						upLevel:level,
						//checkLevelOnly:true
					}).then(res=>{
						if(res.code==1){
							// this.$message.success('升级成功')
							this.$confirm(res.msg)
						}else{
							// this.$message.error(res.msg)
							this.$confirm(res.msg)							
						}
					})
				}).catch(() => {

				})

			},

			setPass() {
				this.$api.setpaypass({
					password: this.setpaypassword,
					repassword: this.setrepaypassword
				}).then(res => {
					this.$message.success('支付密码设置成功')
					this.setpassShow = false
				})
			},
			upVip() {
				this.$api.upVip(this.form).then(res => {
					this.$message.success(res.msg)
				}).catch(err => {
					this.bzjPayShow = false
					if (err.msg == '支付密码未设置!') {
						this.bzjPayShow = false
						this.setpassShow = true
					}
				})
			},

			vipList() {
				this.$api.vipList().then(res => {
					this.list = res.data
				})
			},

			//申请退保证金
			tuibaozhengjin() {
				this.$api.tuibaozhengjin().then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
					} else {
						this.$message.error(res.msg)
					}
				})
			},

		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	.person-s-div {
		display: flex;
		justify-content: space-between;
		//border-bottom: 1px solid #e6e6e6;
	}

	#person-service {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.person-big-title {
		padding-bottom: 0;
	}

	.service-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	.cards {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		padding: 0 35px;
	}

	.card {
		font-size: 16px;
		// float: left;
		margin-bottom: 30px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(247, 247, 247, 1);
		text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.17);
		padding: 28px 28px 16px 33px;
		width: 441px;
		height: 241px;
		box-sizing: border-box;
		background: linear-gradient(129deg,
			rgba(91, 161, 250, 1),
			rgba(124, 181, 253, 1));
		border: 1px solid rgba(230, 230, 230, 1);
		border-radius: 10px;
	}

	.title {
		font-size: 32px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.17);
		float: left;
		padding-bottom: 25px;
	}

	.content {
		line-height: 25px;
		width: 300px;
		height: 100px;
	}

	.price {
		float: right;
		font-size: 36px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(247, 247, 247, 1);
		text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.17);
	}

	.tag {
		padding-top: 16px;
		float: right;
	}

	.buy {
		cursor: pointer;
		float: right;
		margin-right: 0px;
		width: 80px;
		height: 37px;
		background: rgba(56, 144, 255, 1);
		border-radius: 19px;

		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(247, 247, 247, 1);
		// line-height: 52px;
	}

	/* 不同颜色 */
	.c2 {
		background: linear-gradient(129deg,
			rgba(255, 180, 0, 1),
			rgba(234, 189, 113, 1));
	}

	.c3 {
		background: linear-gradient(130deg,
			rgba(46, 171, 179, 1),
			rgba(110, 199, 205, 1));
	}

	.c4 {
		background: rgba(181, 181, 197, 1);
	}

	.b2 {
		background: rgba(225, 142, 0, 1);
	}

	.b3 {
		background: rgba(38, 158, 166, 1);
	}

	.b4 {
		background: rgba(127, 135, 155, 1);
	}

	/deep/.el-button+.el-button {
		margin: 0;
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
