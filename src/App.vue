<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import router from './router'

const route = useRoute()

function routerTo(path: string) {
  if (route.path !== path) router.push(path)
}
</script>

<template>
  <el-container class="app-page">
    <el-header class="app-header">
      <div class="title">配置文件生成器</div>
      <div class="author">@ACaiCat</div>
      <nav class="router-actions" aria-label="页面切换">
        <el-button
          :type="route.path === '/' ? 'primary' : 'default'"
          :plain="route.path !== '/'"
          round
          @click="routerTo('/')"
        >
          配置文件
        </el-button>
        <el-button
          :type="route.path === '/ssc' ? 'primary' : 'default'"
          :plain="route.path !== '/ssc'"
          round
          @click="routerTo('/ssc')"
        >
          SSC配置
        </el-button>
      </nav>
    </el-header>
    <el-main>
      <RouterView v-slot="{ Component }">
        <KeepAlive :max="2">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </el-main>
  </el-container>
</template>

<style scoped>
:global(body) {
  margin: 0;
  background-color: #f5f7fa;
}

.title {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto 8px;
}

.author {
  color: purple;
  margin: 0 auto 8px;
  text-align: center;
}

.app-header {
  height: auto;
  padding: 0;
}

.router-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
  padding-bottom: 8px;
}

.router-actions .el-button {
  min-width: 112px;
  margin: 0;
  font-weight: 600;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
}

.router-actions .el-button:hover {
  transform: translateY(-1px);
}

.router-actions .el-button--primary {
  box-shadow: 0 5px 12px rgb(64 158 255 / 24%);
}

.app-page {
  min-height: calc(100vh - 32px);
  margin: 16px auto;
  overflow: hidden;
  background-color: #fff;
  border-radius: 16px;
  max-width: 800px;
  padding: 16px;
}
</style>
