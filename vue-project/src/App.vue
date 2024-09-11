<script setup lang="ts">
import { ref } from 'vue';


const files = ref<File[]>([])
function handleChange(event: CustomEvent) {
  const uploadedFiles = event.detail[0]; 
  files.value = uploadedFiles
}

</script>

<template>
  
    <custom-uploader :fileList="files" :value="files" multiple  @change="handleChange"></custom-uploader>
</template>

<style scoped>

</style>
