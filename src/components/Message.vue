<template>
  <br-message :feedback="feedback" :state="type" show-icon="true">
    {{ message }}
  </br-message>
</template>

<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  feedback: {
    type: Boolean,
    default: false,
  },
})
</script>
