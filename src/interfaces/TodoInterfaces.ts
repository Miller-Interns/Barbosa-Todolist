export interface TodoItem {
  id: number
  text: string
  isCompleted: boolean
}

export interface TodoCategory {
  id: number
  title: string
  todos: TodoItem[]
}

export interface InternInfo {
  fullName: string
  startTime: Date
}
