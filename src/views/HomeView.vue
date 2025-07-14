<!-- <script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->

<script setup lang="ts">
import { useRouter } from 'vue-router';

import Details from '../components/intern-details.vue';
import Button from '../components/button-design.vue';

const router = useRouter();

//go to the todolist page when the button is clicked
function goToTodoList() {
  router.push('/todolist');
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