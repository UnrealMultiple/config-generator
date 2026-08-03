<script setup lang="ts">
import type { RestToken } from '@/types/config'
import type { MapField } from '@/types/config_schema'
import { computed, ref } from 'vue'

interface TokenRow {
  id: number
  token: string
  originalToken?: string
  authorization: RestToken
  error: string
}

const props = defineProps<{
  fields?: MapField[]
}>()

const model = defineModel<Record<string, RestToken>>({ required: true })

let nextRowId = 0

const rows = ref<TokenRow[]>(
  Object.entries(model.value).map(([token, authorization]) => ({
    id: nextRowId++,
    token,
    originalToken: token,
    authorization: { ...authorization },
    error: '',
  })),
)

const usernameLabel = computed(
  () => props.fields?.find((field) => field.key === 'Username')?.label ?? '用户名',
)
const userGroupLabel = computed(
  () => props.fields?.find((field) => field.key === 'UserGroupName')?.label ?? '权限组',
)

function addToken() {
  rows.value.push({
    id: nextRowId++,
    token: '',
    authorization: { Username: '', UserGroupName: '' },
    error: '请输入令牌',
  })
}

function removeToken(row: TokenRow) {
  rows.value = rows.value.filter((item) => item.id !== row.id)

  if (row.originalToken === undefined) return

  const nextValue = { ...model.value }
  delete nextValue[row.originalToken]
  model.value = nextValue
}

function updateAuthorization(row: TokenRow) {
  if (row.originalToken === undefined) return

  model.value = {
    ...model.value,
    [row.originalToken]: { ...row.authorization },
  }
}

function renameToken(row: TokenRow) {
  if (row.token.trim().length === 0) {
    row.error = '令牌不能为空'
    return
  }

  const duplicate = rows.value.some((item) => item.id !== row.id && item.token === row.token)
  if (duplicate) {
    row.error = '令牌不能重复'
    return
  }

  const nextValue = { ...model.value }
  if (row.originalToken !== undefined) delete nextValue[row.originalToken]
  nextValue[row.token] = { ...row.authorization }

  row.originalToken = row.token
  row.error = ''
  model.value = nextValue
}
</script>

<template>
  <div class="token-map-editor">
    <div v-if="rows.length === 0" class="empty-message">暂无 REST API 令牌</div>

    <div v-for="row in rows" :key="row.id" class="token-row">
      <div class="token-field">
        <span class="field-label">令牌</span>
        <el-input
          v-model="row.token"
          type="password"
          show-password
          autocomplete="new-password"
          placeholder="请输入 BOT/工具令牌"
          :class="{ 'has-error': row.error }"
          @change="renameToken(row)"
        />
        <span v-if="row.error" class="field-error">{{ row.error }}</span>
      </div>

      <label class="authorization-field">
        <span class="field-label">{{ usernameLabel }}</span>
        <el-input
          v-model="row.authorization.Username"
          placeholder="用户名"
          @input="updateAuthorization(row)"
        />
      </label>

      <label class="authorization-field">
        <span class="field-label">{{ userGroupLabel }}</span>
        <el-input
          v-model="row.authorization.UserGroupName"
          placeholder="组名"
          @input="updateAuthorization(row)"
        />
      </label>

      <el-button type="danger" plain class="delete-button" @click="removeToken(row)">
        删除
      </el-button>
    </div>

    <el-button type="primary" plain @click="addToken">添加令牌</el-button>
  </div>
</template>

<style scoped>
.token-map-editor {
  width: 100%;
}

.empty-message {
  margin-bottom: 12px;
  color: var(--el-text-color-secondary);
}

.token-row {
  display: grid;
  grid-template-columns: minmax(220px, 2fr) minmax(140px, 1fr) minmax(140px, 1fr) auto;
  gap: 12px;
  align-items: start;
  margin-bottom: 12px;
}

.token-field,
.authorization-field {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
}

.field-label {
  font-size: 12px;
  line-height: 1.5;
  color: var(--el-text-color-secondary);
}

.field-error {
  font-size: 12px;
  line-height: 1.5;
  color: var(--el-color-danger);
}

.has-error :deep(.el-input__wrapper) {
  box-shadow: 0 0 0 1px var(--el-color-danger) inset;
}

.delete-button {
  margin-top: 22px;
}

@media (max-width: 800px) {
  .token-row {
    grid-template-columns: 1fr;
  }

  .delete-button {
    width: fit-content;
    margin-top: 0;
  }
}
</style>
