<script setup lang="ts">
import Button from '../components/button-design.vue';
import NoteDesign from '@/components/note-design.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useCategoryStore } from '@/stores/to-do';
import { useSwal } from '@/composables/useSwal';

const router = useRouter();
const todoStore = useCategoryStore();
const newItemText = ref('');
const {
    showDeleteConfirmation,
    showDeleteSuccess,
    showDuplicateWarning,
    showEmptyInputError,
    showTaskInput,
    showEditTaskInput,
} = useSwal();

function goToHome() {
    router.push('/');
}

function handleAddCategory() {
    const title = newItemText.value.trim();
    if (!title) {
        showEmptyInputError();
        return;
    }

    const wasSuccessful = todoStore.addCategory(newItemText.value);
    if (wasSuccessful) {
        newItemText.value = '';
    } else {
        showDuplicateWarning(title);
    }
}

async function handleDeleteCategory(categoryId: number) {
    const categoryToDelete = todoStore.categories.find(category => category.id === categoryId);
    if (!categoryToDelete) return;

    const result = await showDeleteConfirmation(categoryToDelete.title);

    if (result.isConfirmed) {
        todoStore.deleteCategory(categoryId);
        showDeleteSuccess(categoryToDelete.title);
    }

}

async function handleAddTask(categoryId: number) {
    const result = await showTaskInput();

    if (result.isConfirmed && result.value) {
        const taskText = result.value.trim();


        if (!taskText) {
            showEmptyInputError();
            return;
        }

        if (todoStore.isDuplicateTask(categoryId, taskText)) {
            showDuplicateWarning(taskText);
            return;
        }
        todoStore.addTaskToCategory(categoryId, taskText);
    }
}

function handleToggleTask(categoryId: number, taskId: number) {
    todoStore.toggleTaskStatus(categoryId, taskId);
}

async function handleDeleteTask(categoryId: number, taskId: number) {
    const category = todoStore.categories.find(category => category.id === categoryId);
    if (!category) return;
    const taskToDelete = category.todos.find(task => task.id === taskId);
    if (!taskToDelete) return;

    const result = await showDeleteConfirmation(taskToDelete.text);

    if (result.isConfirmed) {
        todoStore.deleteTask(categoryId, taskId);

        showDeleteSuccess(taskToDelete.text);
    }
}


async function handleEditTask(categoryId: number, taskId: number) {
    const category = todoStore.categories.find(category => category.id === categoryId);
    if (!category) return;

    const task = category.todos.find(task => task.id === taskId);
    if (!task) return;

    const result = await showEditTaskInput(task.text);

    if (result.isConfirmed && result.value) {
        todoStore.editTask(categoryId, taskId, result.value);
    }
}

</script>

<template>
    <div class="home-btn">
        <Button buttonText="Home" @click="goToHome" class="text-black" />
    </div>
    <div class="container">
        <input v-model="newItemText" @keyup.enter="handleAddCategory" type="text" placeholder="Input New Category"
            className="w-80 px-4 py-3 border-2 border-black bg-blue-200 text-black text-lg placeholder:text-black placeholder:opacity-50 shadow-[4px_4px_0px_black] focus:outline-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all duration-300" />
        <Button buttonText="Add Category" @click="handleAddCategory" class="text-black" />
    </div>
    <div class="notes-grid">
        <NoteDesign v-for="category in todoStore.categories" :key="category.id" :id="category.id"
            :categoryTitle="category.title" :todos="category.todos" @delete="handleDeleteCategory" @add="handleAddTask"
            @toggleTask="handleToggleTask(category.id, $event)" @deleteTask="handleDeleteTask(category.id, $event)"
            @editTask="handleEditTask(category.id, $event)" />
    </div>
</template>

<style scoped>
.home-btn {
    position: fixed;
    top: 25px;
    right: 50px;
    z-index: 2;
}

.container {
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .5rem;
}

.notes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 50px;
    justify-items: center;
}

.notes-grid> :only-child {
    grid-column: 1 / -1;
    justify-self: center;
}

.notes-grid> :nth-child(2):nth-last-child(1) {
    grid-column-start: 3;
}
</style>