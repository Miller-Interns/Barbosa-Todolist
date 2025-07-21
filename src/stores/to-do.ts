import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { type TodoCategory, type TodoItem } from '@/interfaces/TodoInterfaces'

export const useCategoryStore = defineStore('categories', () => {
  const storageKey = 'todolist-app-data'
  const savedCategories = localStorage.getItem(storageKey)

  const categories = ref<TodoCategory[]>(savedCategories ? JSON.parse(savedCategories) : [])

  watch(
    categories,
    (newCategories) => {
      localStorage.setItem(storageKey, JSON.stringify(newCategories))
    },
    { deep: true },
  )

  function addCategory(title: string): boolean {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return false

    const existingCategory = categories.value.find(
      (category) => category.title.toLowerCase() === trimmedTitle.toLowerCase(),
    )

    if (existingCategory) {
      return false
    } else {
      const newCategory: TodoCategory = {
        id: Date.now(),
        title: trimmedTitle,
        todos: [],
      }
      categories.value.push(newCategory)
      return true
    }
  }

  function deleteCategory(categoryId: number) {
    categories.value = categories.value.filter((category) => category.id !== categoryId)
  }

  function addTaskToCategory(categoryId: number, taskText: string) {
    const category = categories.value.find((category) => category.id === categoryId)

    if (category) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: taskText.trim(),
        isCompleted: false,
      }
      category.todos.push(newTodo)
    }
  }

  function isDuplicateTask(categoryId: number, taskText: string): boolean {
    const category = categories.value.find((category) => category.id === categoryId)
    if (!category) {
      return false
    }

    const lowerCaseTaskText = taskText.trim().toLowerCase()
    return category.todos.some((task) => task.text.toLowerCase() === lowerCaseTaskText)
  }

  function toggleTaskStatus(categoryId: number, taskId: number) {
    const category = categories.value.find((category) => category.id === categoryId)
    if (category) {
      const task = category.todos.find((task) => task.id === taskId)
      if (task) {
        task.isCompleted = !task.isCompleted
      }
    }
  }

  function deleteTask(categoryId: number, taskId: number) {
    const category = categories.value.find((category) => category.id === categoryId)
    if (category) {
      category.todos = category.todos.filter((task) => task.id !== taskId)
    }
  }

  function editTask(categoryId: number, taskId: number, newText: string) {
    const category = categories.value.find((category) => category.id === categoryId)
    if (category) {
      const task = category.todos.find((task) => task.id === taskId)
      if (task) {
        task.text = newText
      }
    }
  }

  return {
    categories,
    addCategory,
    deleteCategory,
    addTaskToCategory,
    isDuplicateTask,
    toggleTaskStatus,
    deleteTask,
    editTask,
  }
})
