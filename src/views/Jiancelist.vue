<template>

	<div class="jiance">
		<div>
			<el-upload name="file" class="upload-demo" :action="baseURL+'api/common/upload'" multiple :on-success="fileSuccess"
			 :on-remove="fileRemove" :file-list="fileList">
				<el-button class="photo" type="primary">批量上传</el-button>
			</el-upload>
		</div>
		<div>

			<div class="option-body his-list">

				<el-tabs style="width: 100%;" v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="" name="2">
						<el-table :data="jclist" border stripe style="width: 100%">
							<el-table-column prop="pgbh" label="编号" align="center"></el-table-column>
							<el-table-column prop="cph" label="车牌号" align="center"></el-table-column>
							<el-table-column prop="cltfd" label="停放地" align="center"></el-table-column>
							
							<el-table-column align="center" label="操作" >
								<template slot-scope="scope">
									<el-button @click="chakan(scope.row)" type="text" size="small">查看</el-button>
									<el-button @click="bianji(scope.row)" type="text" size="small">编辑</el-button>
									<el-button @click="chaxun(scope.row,0)" type="text" size="small">查维保</el-button>
									<el-button @click="chaxun(scope.row,1)" type="text" size="small">查出险</el-button>
								</template>
							</el-table-column>

						</el-table>
					</el-tab-pane>
				</el-tabs>



			</div>


		</div>


	</div>

</template>


<script>
	import {
		baseURL
	} from "@/service/axiosConfig.js";
	export default {
		name: 'jiancelist',
		data() {
			return {
				baseURL: baseURL,
				activeName: '2',
				jclist: [],
				fileList: [],
			}
		},
		
		created() {
			this.getlist()
		},

		mounted() {
		},

		methods: {
			
			chaxun(data,t){
				console.log(data)
				if(t==0){
					this.$api.chaweibao({
						pgbh:data.pgbh
					}).then(res => {
						if(res.code==1){
							this.$message.success(res.msg)
						}else{
							this.$message.error(res.msg)
						}
					})
				}else{
					this.$api.chachuxian({
						pgbh:data.pgbh
					}).then(res => {
						if(res.code==1){
							this.$message.success(res.msg)
						}else{
							this.$message.error(res.msg)
						}
					})
				}
				
			},
			
			
			chakan(data){
				window.open('#/jiance?pgbh='+data.pgbh,'_blank')
			},
			bianji(data){
				window.open('#/jiancexg?pgbh='+data.pgbh,'_blank')
			},

			getlist() {
				this.$api.getjiancelist().then(res => {
					this.jclist = res.data
					console.log(this.jclist)
				})
			},

			fileSuccess(response, file, fileList) {
				console.log(response, file, fileList)
				this.$api.piliangdaoru({
					file: response.data.url
				}).then(res => {
					console.log(res)
					if(res.code==1){
						this.$message.success('上传成功')
						
					}else{
						this.$message.error(res.msg)
					}
				})

			},

			fileRemove(file, fileList) {
				console.log(file, fileList)

			},

			handleClick(tab, event) {
				console.log(tab, event)
			},
		}




	}
</script>

<style lang="less" scoped>
	@import '../assets/jiance/shigu1.css';

	.jiance {
		// background-image: url(../assets/images/jiance/悠享好车.png);
		background-image: url(../assets/images/jiance/suiyin.png);
		background-size: 185px;
		// width: 1100px;
		width: 210mm;
		margin: 0 auto;
		position: relative;
		// padding-top: 10px;
		padding: 14px;
		//height: 297mm;
	}

	.tou {
		position: relative;
		text-align: center;
	}

	.logo {
		position: absolute;
		left: 0;
		width: 100px;
	}

	.tou .text {
		padding-top: 30px;
	}

	.tou .text p {
		font-size: 21px;
	}

	.chekuang {
		margin-top: 40px;
		text-align: center;
		opacity: 0.8;
	}

	.cn-table {
		//width: 865px;
		/*float: left;*/
		margin-top: 25px;
	}

	.cn-table table {
		//width: 865px;
		font-size: 16px;
		margin-bottom: 15px;
		background-color: #ccc;
	}

	.cn-table td {
		//width: 16%;
		text-align: center;
		height: 35px;
		background-color: #fff;
		font-size: 18px;
	}

	.cn-table td font {
		font-size: 12px;
	}

	.cx-n-box .cn-note {
		font-size: 17px;
		width: 95%;
		margin: 55px auto 0 auto;
		//margin-top: 70px;
	}


	.jiben {
		// width: 1060px;
		width: 775px;
		// margin: 32px auto 0 auto;
		// margin: 50px auto 0 auto;
		margin: 20px auto 0 auto;
		opacity: 0.8;
	}

	.cx-n-box {
		//margin-bottom: 50px;
		clear: both;
		width: 100%;
		overflow: hidden;
	}

	.cn-tit {
		width: 100%;
		height: 35px;
		font-size: 18px;
		line-height: 35px;
		border-bottom: 1px solid #ccc;
		border-left: 4px solid #1f9bde;
		padding-left: 15px;
		margin-bottom: 25px;
		background-color: #e8e4e4b3;
		float: left;
	}

	.cx-n-box .cn-note {
		font-size: 17px;
		width: 95%;
		// margin: 70px auto 0 auto;
		margin: 60px auto 0 auto;

	}

	.td {
		// width: 240px;
		width: 175px;
	}


	.box2 {
		position: relative;
		height: 310px;
		//margin-top: 70px;
	}

	.box2 .text {
		position: absolute;
		z-index: 1;
		height: 390px;
	}
</style>
