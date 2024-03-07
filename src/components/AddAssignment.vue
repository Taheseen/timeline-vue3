<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { useAssignmentStore } from '@/stores/assignment'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const assignmentStore = useAssignmentStore()
assignmentStore.init()

const newAssignment = ref({
  id: assignmentStore.assignments.length + 1,
  event: '',
  description: '',
  duration: '',
  isPresent: true
})

const emit = defineEmits(['closeModal'])
function addAssignment() {
  assignmentStore.addAssignment(newAssignment.value)
  emit('closeModal', false)
}
</script>

<template>
  <form @submit.prevent="addAssignment">
    <input name="event" type="text" placeholder="event" v-model="newAssignment.event" required />
    <input
      name="description"
      type="text"
      placeholder="Description"
      v-model="newAssignment.description"
      required
    />
    <Datepicker
      class="datePicker"
      name="duration"
      type="text"
      placeholder="Duration"
      v-model="newAssignment.duration"
      required
    />
    <div class="separator">
      <input name="isPresent" type="checkbox" id="isPresent" v-model="newAssignment.isPresent" />
      <!-- <label for="isPresent"> Is this a current task?</label> -->
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style global>
input[type='text'],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  text-transform: capitalize;
}

::placeholder {
  color: var(--vt-c-text-light-2);
  opacity: 1; /* Firefox */
}

.datePicker {
  padding-top: 0.5rem;
}
.separator {
  padding: 1rem 0rem;
}

button[type='submit'] {
  width: 100%;
  background-color: var(--color-heading);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
