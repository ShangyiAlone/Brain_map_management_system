<template>
    <div>
        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 用户列表区 -->
            <el-table :data="message" border stripe>
                <el-table-column label="纬度" prop="x"></el-table-column>
                <el-table-column label="经度" prop="y"></el-table-column>

            </el-table>
        </el-card>

    </div>
</template>

<script>
export default {
    data() {
        return {
            queryInfo: {
              data: '',
              flag: false
            },
            message:[],
            timer:null
          }
      },
    created() {
        this.getUserList()
    },
    methods:{
        async getUserList() {
            const { data:res } = await this.$http.get(
              'plane',{params: this.queryInfo,jsonp: 'handleCallback'})

            this.message = res.data
        }
    },



}
</script>

<style lang="less" scoped>
</style>
