<script setup lang="ts">
import pencilUrl from '@/assets/img/pencil.svg'
import trashUrl from '@/assets/img/trash.svg'
import { type TodoItem } from '@/interfaces/TodoInterfaces'

const props = defineProps<{
  todo: TodoItem
}>();

const emit = defineEmits(['toggleTask', 'deleteTask', 'editTask']);

</script>

<template>
  <li class="todo-item">
    <input type="checkbox" :checked="todo.isCompleted" @change="emit('toggleTask', props.todo.id)"
      class="task-checkbox" />
    <span :class="{ completed: props.todo.isCompleted }" class="todo-text"> {{ props.todo.text }} </span>
    <div class="task-action">
      <button @click="emit('editTask', props.todo.id)" class="action-btn">
        <img :src="pencilUrl" alt="Pencil" class="pencil-icon">
      </button>
      <button @click="emit('deleteTask', props.todo.id)" class="action-btn">
        <img :src="trashUrl" alt="Trash" class="trash-icon">
      </button>
    </div>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 0.5rem;
  width: 100%;
}

.task-checkbox {
  width: 24px;
  height: 24px;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  bottom: 1px;
}

.todo-text {
  text-align: left;
  line-height: 1.4;
  font-size: 1.5rem;
  color: black;
  margin: 0;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: calc(100% - 36px);
  flex-grow: 1;
}

.completed {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}

.task-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: .25rem;
  line-height: 1;
  transition: transform 0.2s;
  width: 40px;
  height: 40px;
}

.action-btn:hover {
  transform: scale(1.2);
}

.pencil-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.trash-icon {
  width: 44px;
  height: 35px;
  object-fit: contain;
}
</style>
