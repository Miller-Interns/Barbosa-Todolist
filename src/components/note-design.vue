<script setup lang="ts">
import noteUrl from '../assets/img/toDoContainer3.png';
import xUrl from '../assets/img/xbtn.png';
import addUrl from '@/assets/img/addBtn.png'
import pencilUrl from '@/assets/img/pencil.svg'
import { type TodoItem } from '@/types/TodoInterfaces'
import trashUrl from '@/assets/img/trash.svg'

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
    console.log('Console Log 1, sending the add even', props.id);
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
                    <li v-for="todo in todos" :key="todo.id" class="todo-item">
                        <input type="checkbox" :checked="todo.isCompleted" @change="handleToggleTask(todo.id)"
                            class="task-checkbox" />
                        <span :class="{ 'completed': todo.isCompleted }" class="todo-text">{{ todo.text }}</span>
                        <div class="task-actions">
                            <button @click="handleEditTask(todo.id)" class="action-btn">
                                <img :src="pencilUrl" alt="Pencil" class="pencil-icon">
                            </button>
                            <button @click="handleDeleteTask(todo.id)" class="action-btn">
                                <img :src="trashUrl" alt="Trash" class="trash-icon">
                            </button>
                        </div>
                    </li>
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

.todo-text {
    text-align: left;
    line-height: 1.4;
    font-size: 1.5rem;
    color: black;
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: calc(100% - 36px);
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

.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

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

.completed {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);
}

.empty-text {
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.6);
}

.task-actions {
    margin-left: auto;
    /* This is the magic that pushes the buttons to the far right! */
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.25rem;
    line-height: 1;
    transition: transform 0.2s;
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
    width: 40px;
    height: 40px;
    object-fit: contain;
}
</style>