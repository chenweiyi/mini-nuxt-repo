<script setup lang='ts'>
  const props = withDefaults(defineProps<{
    link?: boolean
  }>(), {
    link: false
  })

  const emit = defineEmits<{
    click: []
  }>()
</script>

<template>
  <button @click="emit('click')">
    <template v-if="props.link">
      <a href="javascript:void(0)"><slot>Button</slot></a>
    </template>
    <template v-else>
      <slot>Button</slot>
    </template>
  </button>
</template>

<style scoped lang='less'>
</style>