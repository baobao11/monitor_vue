<template>
  <div id="monitor">
      <el-row class="tac">
<!--          侧栏-->
          <el-col :span="6">
              <el-menu :default-active="this.$router.path" router
                       class="el-menu-vertical-demo">
<!--                  index写设置的路由路径-->
                  <el-menu-item index="/generalView">
                      <i class="el-icon-s-home"></i>
                      <span slot="title">概览</span>
                  </el-menu-item>
                  <el-submenu index="2">
                      <template slot="title">
                          <i class="el-icon-video-camera"></i>
                          <span>监控数据</span>
                      </template>
                      <el-menu-item-group>
                          <template slot="title">监控</template>
                          <el-menu-item index="/ecsMonitor">ecs监控</el-menu-item>
                          <el-menu-item index="/ossMonitor">oss监控</el-menu-item>
                      </el-menu-item-group>
                  </el-submenu>
              </el-menu>
          </el-col>
<!--          右边内容区域-->
          <el-col :span="10" id="showContent">
            <router-view></router-view>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'monitor'
}
</script>

<style scoped>
#showContent {
    margin-left: 20px;
    margin-top: 20px;
}
</style>
