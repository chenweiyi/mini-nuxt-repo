<script setup lang="ts">
const clickHandler = () => {
  navigateTo('/tsx');
};
</script>

<template>
  <div>
    <div>this is index</div>
    <el-button>button</el-button>
    <el-button link @click="clickHandler">跳转到/tsx</el-button>
  </div>
</template>

<style scoped lang="less"></style>
