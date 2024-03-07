<script setup lang="ts">
import { ref } from 'vue'
import AssignmentCards from '@/components/AssignmentCards.vue'
import ModalPopUp from '@/components/ModalPopUp.vue'
import { useAssignmentStore } from '@/stores/assignment'
const assignmentStore = useAssignmentStore()
assignmentStore.init()

const addAssignment = ref(false)
</script>

<template>
  <main>
    <h4>
      This is a simple project time app built with Vue3. It allows you to add new events and see
      them on your timeline.
    </h4>
    <section>
      A project timeline is a visual representation of all the tasks and activities that are
      supposed to be completed in a project, as well as their duration and start and end dates. This
      kind of overview provides the project manager with crucial information on all the tasks and
      related allocations, helping them manage projects on a more detailed level.
    </section>
    <ModalPopUp
      :is-open="addAssignment"
      @close-modal="(isCloseModal: boolean) => (addAssignment = isCloseModal)"
    >
    </ModalPopUp>
    <ul>
      <AssignmentCards
        v-for="assignment in assignmentStore.assignments"
        :key="assignment.id"
        :assignment="assignment"
      >
      </AssignmentCards>
    </ul>
    <div>
      <button type="submit" @click="addAssignment = !addAssignment">
        {{ !addAssignment ? 'Add Assignment' : 'Cancel' }}
      </button>
    </div>
  </main>
</template>

<style scoped>
h4 {
  padding: 1rem 0;
}
ul {
  padding: 2rem 2rem;
}
</style>
