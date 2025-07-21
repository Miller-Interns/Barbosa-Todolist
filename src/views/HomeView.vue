<script setup lang="ts">
import { useRouter } from 'vue-router';
import Details from '../components/intern-details.vue';
import Button from '../components/button-design.vue';
import { RouteName } from '@/enum/RouteNames';

const router = useRouter();

function goToTodoList() {
  router.push({ name: RouteName.TODOLIST })
}
</script>

<template>
  <div class="container">
    <Details />
    <Button buttonText="Go to App" @click="goToTodoList" class="bg-black text-black" />
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-items: center;
  gap: 1rem;
}
</style>
