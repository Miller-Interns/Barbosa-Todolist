<script setup lang="ts">
import { useInternStore } from '@/stores/user-store';

const internStore = useInternStore();

</script>

<template>
  <div class="intern-details">
    <div class="card-overlay"></div>
    <div class="card-inner ">{{ internStore.InternDetails.fullName }}<br>{{ internStore.InternDetails.startTime }}
    </div>
  </div>
</template>

<style scoped>
/* From Uiverse.io by LilaRest */
.intern-details {
  --bg: #e8e8e8;
  --contrast: #e2e0e0;
  --grey: #93a1a1;
  position: relative;
  padding: 9px;
  background-color: var(--bg);
  border-radius: 35px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.card-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-conic-gradient(var(--bg) 0.0000001%, var(--grey) 0.000104%) 60% 60%/600% 600%;
  filter: opacity(10%) contrast(105%);
}

.card-inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 500px;
  height: 300p x;
  background-color: var(--contrast);
  border-radius: 30px;
  /* Content style */
  font-size: 40px;
  font-weight: 900;
  color: black;
  text-align: center;
}
</style>
