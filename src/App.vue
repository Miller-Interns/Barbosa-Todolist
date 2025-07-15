<script setup lang="ts">
import navBar from './components/nav-bar.vue';
</script>

<template>
  <div class="cont">
    <navBar />
    <router-view />
  </div>
</template>

<style>
.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f2c8e0;
  font-family: 'Jersey 10', cursive;
}
</style>
