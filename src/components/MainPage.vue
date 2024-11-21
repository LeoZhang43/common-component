//MainPage.vue
<script setup>
import { useTheme } from './useTheme.js';
  
const { theme, setDayTheme, setDarkTheme } = useTheme();
</script>

<template>
  <div class="box">
    <span>Hello</span>
    <button @click="setDayTheme">day</button>
    <button @click="setDarkTheme">dark</button>
  </div>
</template>

<style lang="scss">
.box {
  width: 100px;
  height: 100px;
  background: v-bind('theme.background');
  color: v-bind('theme.fontColor');
  font-size: v-bind('theme.fontSize');
}
</style>