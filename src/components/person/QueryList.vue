<template>
    <div id="card-querylist" >
        <el-dialog
                title="查询结果"
                :visible.sync="isShow1"
                width="55%">
            <el-table
                    :data="queryData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="weizhang_time"
                        label="违章时间"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="wzcity"
                        label="违章城市"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="act"
                        label="违反禁令"
						width="260"
                >
                </el-table-column>
                <el-table-column
                        prop="area"
                        label="违章地址"
                        width="220">
                </el-table-column>
                <el-table-column
                        prop="money"
                        label="罚款金额"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="fen"
                        label="扣分"
                        width="100">
                </el-table-column>

                <el-table-column
                        prop="handled"
                        label="是否处理"
                        width="180">
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
<!--        <el-button type="primary" @click="queryData.dialogVisible1 = false">确 定</el-button>-->
                 <el-button type="primary" @click="isShow1 = false">确 定</el-button>
      </span>
        </el-dialog>






        <el-dialog
            title="查询维保结果"
            :visible.sync="isShow2"
            width="45%">
        <el-table
                :data="queryWeiZhangData"
                border
        >
            <el-table-column
                    prop="msg"
                    label="是否查询成功"
            >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <el-button @click="handleClick()" type="text" size="small">查看</el-button>
            </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
<!--        <el-button type="primary" @click="queryData.dialogVisible1 = false">确 定</el-button>-->
                 <el-button type="primary" @click="isShow2 = false">确 定</el-button>
      </span>
    </el-dialog>







<!--        车辆竞拍详情列表-->
        <el-dialog
                title="查询结果"
                :visible.sync="isShow3"
                width="70%">
            <el-table
                    :data="queryCarAuctionList"
                    border				
					 tooltip-effect="dark"
            >
				<el-table-column
				      type="index"
				    >
				 </el-table-column>
                <el-table-column
                        prop="title"
                        label="竞拍车辆"
                >
                </el-table-column>
                <el-table-column
                        prop="auction_car_id"
                        label="车辆编号"
                >
                </el-table-column>
                <el-table-column
                        
                        label="竞拍结果"						
                >
				<template slot-scope="scope"><span  :style="scope.row.status_text=='已中标'?'color: red;':''">{{ scope.row.status_text }}</span></template>
				<!-- :style="this.status_text=='已中标'?'color:red':''" prop="status_text"-->
                </el-table-column>
                <el-table-column
                        prop="money"
                        label="竞拍价格"
                >
                </el-table-column>
                <el-table-column
                        align="center"
                        fixed="right"
                        label="车辆详情"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="goCarDetail(scope.row)" type="text" size="small">查看</el-button>

                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
<!--        <el-button type="primary" @click="queryData.dialogVisible1 = false">确 定</el-button>-->
                 <el-button type="primary" @click="isShow3 = false">确 定</el-button>
      </span>
        </el-dialog>



    </div>
</template>

<script>
    export default {
        name: "QueryList",
        props:{
            queryData: {    //违章
                type: Array,
                //required: true
            },
            queryWeiZhangData: {    //这里是维保
                type: Array,
                //required: true
            },
            queryCarAuctionList: {
                type: Array
            }
        },
        data () {
            return {
                isShow1: false,
                isShow2: false,
                isShow3: false
            }
        },
        created() {

        },
        methods: {			
			
			tableRowClassName({row, rowIndex}) {
				
			        if (row.status_text == '已中标') {
						console.log('已中标')
			          return 'warning-row';
			        }
			        return '';
			      },
				  
            hideView () {
                let a = 1111
                 this.$emit('setqueryData',a)
            },
            goCarDetail(tab, event) {
                window.open('index.html#/auctionhome/auctiondetail?id=' + tab.auction_car_id, '_blank' )

                // /auctionhome/auctiondetail?id=13730
            },
            handleClick () {
                console.log(111111)
                console.log(this.queryWeiZhangData[0].data)
                window.open(this.queryWeiZhangData[0].data + '', '_blank')
            }
        },
        watch: {
            queryData() {
                this.isShow1 = true;
            },
            queryWeiZhangData () {
                this.isShow2 = true;
                console.log(this.queryWeiZhangData)
            },
            queryCarAuctionList() {
                //console.log(23232323)
                this.isShow3 = true;
            }
        }

    }
</script>

<style scoped>

</style>