<script setup lang="ts">
defineProps({
  buttonText: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);

function handleClick() {
  emit('click');
}
</script>

<template>
  <div class="box-button" @click="handleClick">
    <button class="button">
      <span class="text">{{ buttonText }}</span>
    </button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Pixelify+Sans:wght@400..700&display=swap');

.text {
  font-weight: 300;
  font-size: 20px;
}

.box-button {
  cursor: pointer;
  border: 4px solid black;
  background-color: gray;
  padding-bottom: 10px;
  transition: 0.1s ease-in-out;
  user-select: none;
  width: fit-content;
}

.button {
  background-color: #dddddd;
  border: 4px solid #fff;
  padding: 3px 8px;
  pointer-events: none;
}

.button span {
  letter-spacing: 1px;
}

.box-button:active {
  padding: 0;
  margin-bottom: 10px;
  transform: translateY(10px);
}
</style>
