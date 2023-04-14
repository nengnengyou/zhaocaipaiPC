<template>
	<div id="person-address">
		<p class="person-big-title">我的地址</p>
		<p class="person-small-title">新增收货地址</p>
		<el-form label-width="100px" ref="form" :model="form">
			<el-form-item label="姓名：">
				<el-input style="width:280px" v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="手机号码：">
				<el-input style="width:280px" v-model="form.mobile"></el-input>
			</el-form-item>
			<el-form-item label="地址信息：">
				<el-cascader v-model="form.area" :props="areaProp" clearable></el-cascader>
			</el-form-item>

			<el-form-item label="详细地址：">
				<el-input style="width:700px" v-model="form.address"></el-input>
			</el-form-item>
			<!-- 
      <el-form-item>
        <el-checkbox label="设为默认收获地址" name="type"></el-checkbox>
      </el-form-item>-->

			<el-form-item>
				<el-button class="save" type="primary" @click="addAddress">保存</el-button>
			</el-form-item>
		</el-form>
		<p class="person-small-title">已保存收获地址</p>
		<el-table :data="tableData" border stripe style="width: 100%">
			<el-table-column prop="user_name" label="收货人" align="center" width="300"></el-table-column>
			<el-table-column prop="area" label="所在地区" align="center"></el-table-column>
			<el-table-column prop="address" label="详细地址" align="center"></el-table-column>
			<el-table-column prop="mobile" label="电话/手机" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button v-if="!scope.row.default_addr" @click="setDefault(scope.row)" type="text" size="mini">设为默认</el-button>
					<br />
					<!-- <el-button type="text" style="color:#3d3d3d" size="mini">编辑</el-button> -->
					<br />
					<el-button @click="deleteAddress(scope.row)" type="text" style="color:red" size="mini">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	import AreaSelect from "@/components/AreaSelect.vue";
	export default {
		components: {
			AreaSelect
		},
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
				form: {
					area: '',
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				tableData: []
			}
		},
		created() {
			this.addressList()
		},
		methods: {
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
			deleteAddress(row) {
				let params = {
					id: row.id
				}
				this.$api.deleteAddress(params).then(res => {
					if(res.code==1){
						this.$message.success(res.data)
						this.addressList()
					}else{
						this.$message.error(res.msg)
					}
					
				})
			},
			setDefault(row) {
				let params = {
					id: row.id
				}
				this.$api.default_addr(params).then(res => {
					if(res.code==1){
						this.$message.success(res.msg)
						this.addressList()
					}else{
						this.$message.error(res.msg)
					}
				})
			},
			addAddress() {
				let params = {
					//token: this.$store.getters.getToken,
					user_name: this.form.name,
					mobile: this.form.mobile,
					/* 先写死了 */
					area: this.form.area.join(' '),
					address: this.form.address,
					// addr_id:''
				}
				this.$api.addAddress(params).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
						this.addressList()
						this.form = {
							area: '',
							name: '',
							region: '',
							date1: '',
							date2: '',
							delivery: false,
							type: [],
							resource: '',
							desc: ''
						}
					} else {
						this.$message.error(res.msg)
					}

				})
			},
			addressList() {
				this.$api.addressList().then(res => {
					this.tableData = res.data
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	#person-address {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.person-big-title {
		padding-bottom: 30px;
	}

	.address-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	.save {
		width: 76px;
		height: 30px;
		background: rgba(51, 133, 255, 1);
		border-radius: 15px;

		font-size: 15px;
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
