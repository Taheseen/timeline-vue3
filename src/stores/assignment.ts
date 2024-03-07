import type { IAssignmentArray } from '@/models/assignment'
import { defineStore } from 'pinia'

export const useAssignmentStore = defineStore('AssignmentStore', {
  state: () => {
    return {
      assignments: <IAssignmentArray[]>[]
    }
  },
  actions: {
    async init() {
      this.assignments = (await import('@/data/data.json')).default
    },
    addAssignment(newAssignment: IAssignmentArray) {
      this.assignments.push(newAssignment)
    }
  }
})
