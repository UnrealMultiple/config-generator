<script setup lang="ts">
import ConfigItem from '@/components/ConfigItem.vue'
import tshockConfig from '@/types/config'
import tshockConfigSchema from '@/types/config_schema'
import { ElMessage, type UploadFile } from 'element-plus'
import { computed, ref } from 'vue'

const config = ref(structuredClone(tshockConfig))
const importVersion = ref(0)

// Settings 支持按字符串 key 动态访问，供配置项 v-model 双向绑定
const settings = computed(() => config.value.Settings as unknown as Record<string, unknown>)

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function hasValidRestTokens(value: unknown): boolean {
  if (!isRecord(value)) return false

  return Object.values(value).every(
    (authorization) =>
      isRecord(authorization) &&
      typeof authorization.Username === 'string' &&
      typeof authorization.UserGroupName === 'string',
  )
}

async function handleFileInport(file: UploadFile) {
  if (!file.raw) return

  try {
    const imported: unknown = JSON.parse(await file.raw.text())

    if (!isRecord(imported) || !isRecord(imported.Settings)) {
      ElMessage.error('导入失败：缺少有效的 Settings 对象')
      return
    }

    if (!hasValidRestTokens(imported.Settings.ApplicationRestTokens)) {
      ElMessage.error('导入失败：ApplicationRestTokens 格式无效')
      return
    }

    config.value = imported as unknown as typeof tshockConfig
    importVersion.value += 1
  } catch {
    ElMessage.error('导入失败：JSON 格式无效或文件无法读取')
  }
}

function handleFileExport() {
  const configStr = JSON.stringify(config.value, null, 2)
  const blob = new Blob([configStr], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'config.json'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="config-page">
    <div class="file-actions" aria-label="配置文件操作">
      <el-tooltip content="导入配置" placement="left">
        <el-upload
          action=""
          :auto-upload="false"
          :show-file-list="false"
          accept="application/json"
          :on-change="handleFileInport"
        >
          <el-button
            class="file-action file-action--import"
            type="primary"
            circle
            aria-label="导入配置文件"
            title="导入配置文件"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
            </svg>
          </el-button>
        </el-upload>
      </el-tooltip>

      <el-tooltip content="导出配置" placement="left">
        <el-button
          class="file-action file-action--export"
          type="success"
          circle
          aria-label="导出配置文件"
          title="导出配置文件"
          @click="handleFileExport"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 4v12m0 0 4.5-4.5M12 16l-4.5-4.5M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
          </svg>
        </el-button>
      </el-tooltip>
    </div>

    <div class="config-body">
      <el-form :model="config.Settings" label-width="auto" style="max-width: 600px">
        <ConfigItem
          v-for="item in tshockConfigSchema"
          :key="item.key"
          v-model="settings[item.key]"
          :item="item"
          :import-version="importVersion"
        />
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.config-page {
  padding-bottom: 112px;
}

.file-actions {
  position: fixed;
  right: max(20px, calc((100vw - 800px) / 2 + 20px));
  bottom: calc(24px + env(safe-area-inset-bottom));
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.file-action {
  width: 52px;
  height: 52px;
  border: 0;
  box-shadow:
    0 8px 18px rgb(0 0 0 / 18%),
    0 2px 6px rgb(0 0 0 / 12%);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
}

.file-action svg {
  width: 23px;
  height: 23px;
  fill: none;
  stroke: currentcolor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.file-action:hover {
  transform: translateY(-2px);
  box-shadow:
    0 11px 22px rgb(0 0 0 / 20%),
    0 3px 8px rgb(0 0 0 / 14%);
}

.file-action:active {
  transform: translateY(0) scale(0.96);
}

.file-action:focus-visible {
  outline: 3px solid rgb(64 158 255 / 35%);
  outline-offset: 3px;
}

@media (max-width: 800px) {
  .config-page {
    padding-bottom: 92px;
  }

  .file-actions {
    right: calc(16px + env(safe-area-inset-right));
    bottom: calc(16px + env(safe-area-inset-bottom));
    flex-direction: row;
  }

  .file-action {
    width: 48px;
    height: 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .file-action {
    transition: none;
  }
}
</style>
