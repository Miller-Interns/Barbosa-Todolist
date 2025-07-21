import Swal from 'sweetalert2'

export function useSwal() {
  const showDeleteConfirmation = async (itemName: string) => {
    return Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete "${itemName}". You won't be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    })
  }

  const showDeleteSuccess = (itemName: string) => {
    Swal.fire('Deleted!', `"${itemName}" has been removed.`, 'success')
  }

  const showDuplicateWarning = (text: string) => {
    Swal.fire({
      icon: 'warning',
      title: 'Already Exists',
      text: `The category "${text}" is already on your list.`,
    })
  }

  const showEmptyInputError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'The input cannot be empty!',
    })
  }

  const showTaskInput = async () => {
    return Swal.fire({
      title: 'Add a new task',
      input: 'text',
      inputPlaceholder: 'Enter your task details here...',
      showCancelButton: true,
      confirmButtonText: 'Add Task',
      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return 'You need to write something!'
        }
        return null
      },
    })
  }

  const showEditTaskInput = async (currentText: string) => {
    return Swal.fire({
      title: 'Edit your task',
      input: 'text',
      inputValue: currentText,
      showCancelButton: true,
      confirmButtonText: 'Save Changes',
      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return 'You need to write something!'
        }
        return null
      },
    })
  }

  return {
    showDeleteConfirmation,
    showDeleteSuccess,
    showDuplicateWarning,
    showEmptyInputError,
    showTaskInput,
    showEditTaskInput,
  }
}
