<script setup lang="ts">
import RestTokenMapEditor from '@/components/RestTokenMapEditor.vue'
import type { RestToken } from '@/types/config'
import { getItemOptions, type ConfigItem, type Option } from '@/types/config_schema'
import { cssToRgbTuple, rgbTupleToCss, type RgbTuple } from '@/utils/rgb'
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    item: ConfigItem
    importVersion?: number
  }>(),
  {
    importVersion: 0,
  },
)

const predefineColors = ref([
  '#32FF82',
  '#AF4BFF',
  '#E11919',
  '#FF1919',
  '#327DFF',
  '#FFF014',
  '#FF00A0',
])

const model = defineModel<unknown>({ required: true })

const booleanValue = computed<boolean>({
  get: () => model.value === true,
  set: (value) => (model.value = value),
})

const selectValue = computed<string | boolean>({
  get: () => model.value as string | boolean,
  set: (value) => (model.value = value),
})

const numberValue = computed<number | undefined>({
  get: () => (typeof model.value === 'number' ? model.value : undefined),
  set: (value) => (model.value = value),
})

const inputValue = computed<string>({
  get: () => String(model.value ?? ''),
  set: (value) => (model.value = value),
})

const mapValue = computed<Record<string, RestToken>>({
  get: () => model.value as Record<string, RestToken>,
  set: (value) => (model.value = value),
})

const colorValue = computed(() => rgbTupleToCss(model.value as RgbTuple))

function updateColorValue(value: string | null | undefined) {
  if (!value) return

  const rgb = cssToRgbTuple(value)
  if (rgb) model.value = rgb
}

function optionValue(option: Option): string | boolean {
  if (option.value === 'true') return true
  if (option.value === 'false') return false
  return option.value
}
</script>

<template>
  <el-form-item :label="item.key" label-position="top" class="config-item">
    <el-switch
      v-if="item.value_type === 'bool'"
      v-model="booleanValue"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />
    <el-select v-else-if="item.type === 'choose'" v-model="selectValue">
      <el-option
        v-for="option in getItemOptions(item)"
        :key="option.value"
        :label="option.name"
        :value="optionValue(option)"
      />
    </el-select>
    <RestTokenMapEditor
      v-else-if="item.type === 'map' && item.key === 'ApplicationRestTokens'"
      :key="importVersion"
      v-model="mapValue"
      :fields="item.fields"
    />
    <el-color-picker
      v-else-if="item.type === 'color'"
      color-format="rgb"
      :predefine="predefineColors"
      :model-value="colorValue"
      @update:model-value="updateColorValue"
    />
    <el-input-number
      v-else-if="
        item.type === 'input' && (item.value_type === 'int' || item.value_type === 'float')
      "
      v-model="numberValue"
    />
    <el-input v-else v-model="inputValue" />
    <div class="config-hint">{{ item.msg }}</div>
  </el-form-item>
</template>

<style scoped>
.config-item :deep(.el-form-item__label) {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.5;
}

.config-hint {
  flex-basis: 100%;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--el-text-color-placeholder);
}
</style>
