<template>
  <custom-uploader :files="files" accept="image/png,image/jpeg" multiple @change="handleChange">
    <div slot="tip">Some custom content</div>
  </custom-uploader>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const files = ref<File[]>([])

function handleChange(event: CustomEvent<[File[]]>) {
  files.value = event.detail[0];
}
</script>
