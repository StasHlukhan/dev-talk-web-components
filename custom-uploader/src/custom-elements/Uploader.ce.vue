<template>
  <div
    class="upload"
    tabindex="0"
    @click="triggerFileUpload"
    @dragover="onDragOver"
    @dragleave="isDragging = false"
    @drop="onDrop"
  >
    <div class="upload-dragger" :class="{ 'is-dragging': isDragging }">
      <IconUpload class="icon" />
      <div class="upload__text">Drop file here or <span>click to upload</span></div>

      <div class="upload__tip">
        <slot name="tip" />
      </div>
    </div>
    <input
      ref="fileInputRef"
      type="file"
      :accept="accept"
      :multiple="multiple !== undefined ? ['true', true].includes(multiple) : false"
      @change="onFileChange"
    >
  </div>

  <ul class="upload-list">
    <li v-for="(file, index) in localFiles" :key="index">
      <IconFile /> {{ file.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  files: File[]
  accept?: string
  multiple?: boolean | string
}>()

const emit = defineEmits<{
  change: [value: File[]]
  cancel: []
}>()

const fileInputRef = ref<HTMLInputElement>()
const isDragging = ref(false)

const localFiles = ref<File[]>([])
watchEffect(() => {
  localFiles.value = props.files ? [...props.files] : []
})

function triggerFileUpload () {
  if (fileInputRef.value) {
    fileInputRef.value.click()
  }
}

function onFileChange (event: Event) {
  const target = event.target as HTMLInputElement

  if (target.files) {
    emit('change', [...target.files])
  } else {
    emit('cancel')
  }
}

function onDrop (event: DragEvent) {
  event.preventDefault()
  if (event.dataTransfer && event.dataTransfer.files) {
    const files = Array.from(event.dataTransfer.files)
    emit('change', files)
  }
  isDragging.value = false
}

function onDragOver (event: DragEvent) {
  event.preventDefault()
  isDragging.value = true
}
</script>

<style lang="scss">
*{
  font-family: "Open Sans", sans-serif;
}

.upload {
  display: block;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: #606266;
  font-size: 14px;

  .upload-dragger {
    padding: 40px 10px;
    background-color: white;
    border: 1px dashed #dcdfe6;
    border-radius: 6px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    .icon {
      color: #a8abb2;
      margin-bottom: 16px;
      line-height: 50px;
    }

    .upload__text span {
      color: #409eff;
    }
    &:hover {
      border-color: #409eff;
    }
    &.is-dragging {
      border: 2px dashed #409eff;
      background-color: #f0f9ff;
    }
  }
  input {
    display: none;
  }
}

.upload__tip {
  font-size: 12px;
  color: #606266;
  margin-top: 7px;
}

.upload-list {
  padding: 0 10px;
  li {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    color: #606266;
    margin-bottom: 5px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 4px;
    gap: 4px;

    &:hover {
      color: #409eff;
      background-color: #f5f7fa;
    }
  }
}
</style>
