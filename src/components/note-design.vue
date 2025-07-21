<script setup lang="ts">
import noteUrl from '../assets/img/toDoContainer3.png';
import xUrl from '../assets/img/xbtn.png';
import addUrl from '@/assets/img/addBtn.png'
import { type TodoItem } from '@/interfaces/TodoInterfaces'
import NoteContent from '@/components/note-content.vue';

const props = defineProps({
  id: { type: Number, required: true },
  categoryTitle: { type: String, required: true },
  todos: { type: Array as () => TodoItem[], required: true }
});

const emit = defineEmits(['delete', 'add', 'toggleTask', 'deleteTask', 'editTask']);

function handleDelete() {
  emit('delete', props.id);
}

function handleAdd() {
  emit('add', props.id);
}

function handleToggleTask(taskId: number) {
  emit('toggleTask', taskId);
}

function handleDeleteTask(taskId: number) {
  emit('deleteTask', taskId);
}

function handleEditTask(taskId: number) {
  emit('editTask', taskId);
}

</script>

<template>
  <div class="note-background" :style="{ backgroundImage: 'url(' + noteUrl + ')' }">
    <div class="note-wrapper">
      <button @click="handleDelete" class="delete-btn">
        <img :src="xUrl" alt="Delete" class="delete-icon" />
      </button>
      <div class="category-title">{{ categoryTitle }}</div>
      <div class="note-content">
        <p v-if="todos.length === 0" class="empty-text">No tasks yet!</p>
        <ul v-else class="todo-list">
          <NoteContent v-for="todo in todos" :key="todo.id" :todo="todo" @toggleTask="handleToggleTask"
            @deleteTask="handleDeleteTask" @editTask="handleEditTask" />
        </ul>
      </div>
      <button @click="handleAdd" class="add-btn">
        <img :src="addUrl" alt="Add" class="add-icon">
      </button>
    </div>
  </div>
</template>


<style scoped>
.note-background {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 450px;
  height: 450px;
}

.note-wrapper {
  position: relative;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.category-title {
  font-weight: bold;
  font-size: clamp(1.5rem, 3vw, 1.9rem);
  text-align: center;
  margin-top: 20px;
  color: black;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.note-actions {
  align-self: flex-end;
}

.delete-btn {
  position: absolute;
  top: 20px;
  right: 40px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.delete-btn:hover {
  transform: scale(1.2);
}

.delete-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.add-btn {
  position: absolute;
  bottom: 60px;
  left: 350px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.add-btn:hover {
  transform: scale(1.2);
}

.add-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.note-content {
  height: 284px;
  overflow-y: auto;
  margin-top: 15px;
  padding-right: 20px;
}

.empty-text {
  text-align: center;
  margin-top: 3rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
}
</style>
