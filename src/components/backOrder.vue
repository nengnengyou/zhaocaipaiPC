<template>
	<div class="query">
		<!-- 填写信息 -->
		<el-dialog title="退款" :visible.sync="dialogVisible" :before-close="handleClose" width="45%">
			<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="退款原因" prop="pass">
					<el-input type="text" v-model="ruleForm.reason" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="填写金额" prop="checkPass">
					<el-input type="number" v-model="ruleForm.money" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="退款说明" prop="age">
					<el-input type="text" v-model="ruleForm.msg" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="图片" prop="age">

				</el-form-item>				
					<el-form-item label="">
						<el-upload action="http://192.168.5.32/api/common/upload" name="file" list-type="picture-card" :on-preview="handlePictureCardPreview"
						 :on-remove="handleRemove" :on-success="updata">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible2">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>

					
				</el-form-item>

			</el-form>

			<span slot="footer" class="dialog-footer">
				<el-button @click="sendBeforeBack" type="primary">提 交</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'query',
		props: ['dialogVisible', 'id'],
		data() {
			return {
				//评价图片上传
				dialogImageUrl: '',
				dialogVisible2: false,
				fileList: [], //图片列表
				//评价图片上传  结束

				dialogVisiblea: true,
				ruleForm: {
					id: '',
					reason: '',
					money: '',
					msg: '',
					img: ''
				}
			}
		},
		methods: {

			//评价图片上传
			handleRemove(file, fileList) {
				console.log(file)
				//console.log(fileList)
				for (let i = 0; i < this.fileList.length; i++) {
					if (this.fileList[i].url == file.response.data.url) {
						console.log(i)
						this.fileList.splice(i, 1);
						break;
					}
				}
				console.log(this.fileList)
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible2 = true;
				console.log(this.dialogImageUrl)
			},

			updata(response, file, fileList) {

				this.fileList.push({
					uid: file.uid,
					name: file.name,
					url: file.response.data.url
				})
				console.log(this.fileList)

			},
			//评价图片上传 结束


			handleClose() {
				this.$emit('closea')
			},
			sendBeforeBack() {
				let images = ""
				for (let i = 0; i < this.fileList.length; i++) {
					if (images == "") {
						images = this.fileList[i].url 
					} else {
						images = images +  "," +this.fileList[i].url 
					}
				}
				this.ruleForm.img=images
				console.log(this.ruleForm)
				this.ruleForm.id = this.id
				this.$api.sendBeforeBack(this.ruleForm).then(res => {
					this.$message.success(res.msg)
					this.$emit('close')
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/base.less");

	.el-cascader {
		width: 100%;
	}
</style>
