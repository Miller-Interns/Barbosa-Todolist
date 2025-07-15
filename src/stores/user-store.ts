import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type InternInfo } from '@/interfaces/TodoInterfaces'

export const useInternStore = defineStore('intern', () => {
  const InternDetails = ref<InternInfo>({
    fullName: 'Alfred E. Barbosa',
    startTime: new Date('2025-07-11'),
  })

  return {
    InternDetails,
  }
})
