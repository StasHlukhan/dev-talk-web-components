<template>
  <div
    class="el-upload"
    tabindex="0"
    @click="triggerFileUpload"
    @dragover="onDragOver"
    @dragleave="isDragging = false"
    @drop="onDrop"
  >
    <div class="el-upload-dragger" :class="{ 'is-dragging': isDragging }">
      <IconUpload class="el-icon" />
      <div class="el-upload__text">Drop file here or <span>click to upload</span></div>
    </div>
    <input ref="fileInputRef" type="file" @change="onFileChange">
  </div>

  <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>

  <ul class="el-upload-list">
    <li v-for="(file, index) in uploadedFiles" :key="index"><IconFile /> {{ file.name }}</li>
  </ul>
</template>

<script setup lang="ts">

const fileInputRef = ref<HTMLInputElement | null>(null)
const uploadedFiles = ref<File[]>([])
const isDragging = ref(false)

function triggerFileUpload () {
  if (fileInputRef.value) {
    fileInputRef.value.click()
  }
}

function onFileChange (event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files) {
    uploadedFiles.value = [...target.files]
  }
}

function onDrop (event: DragEvent) {
  event.preventDefault()
  if (event.dataTransfer && event.dataTransfer.files) {
    uploadedFiles.value = [...event.dataTransfer.files]
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

.el-upload {
    display: block;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    color: #606266;
    font-size: 14px;

    .el-upload-dragger {
    padding: 40px 10px;
    background-color: white;
    border: 1px dashed #dcdfe6;
    border-radius: 6px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    .el-icon {
      color: #a8abb2;
      margin-bottom: 16px;
      line-height: 50px;
    }

    .el-upload__text span{
      color: #409eff;
    }
    &:hover{
      border-color: #409eff;
    }
    &.is-dragging{
      border: 2px dashed #409eff;
      background-color: #f0f9ff;
    }
  }
  input{
    display: none;
  }
}

.el-upload__tip {
    font-size: 12px;
    color: #606266;
    margin-top: 7px;
}

.el-upload-list {
  padding: 0 10px;
  li{
    transition: all .5s cubic-bezier(.55,0,.1,1);
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
