<script setup lang="ts">
import logoUrl from '@/assets/img/logo.jpg';

</script>


<template>
  <header>
    <div class="logo">
      <img :src="logoUrl" alt="Logo" width="100" height="100">
      <h1 class="text "><span>To Do List!</span></h1>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  background: #C1F1F1;
  padding: 10px 50px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;

}

.logo {
  display: flex;
  justify-content: flex-start;
}

.btn {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}

.text {
  font-size: 3em;
  margin-left: 10px;
  color: #FF758f;
  display: flex;
  justify-content: center;
  align-items: center;
}

@supports (-webkit-text-stroke: 1px #86B3B3) {
  .text {
    -webkit-text-stroke: 1px #86B3B3;
    text-shadow: none;
  }
}
</style>
