<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AssignmentItem from './AssignmentItem.vue'
import type { IAssignmentArray } from '@/models/assignment'

defineProps<{
  assignment: IAssignmentArray
}>()
</script>

<template>
  <AssignmentItem>
    <!-- <template #isPresent> {{  assignment.id }}</template> -->
    <template #heading>{{ assignment.event }}</template>
    <template #duration>{{ assignment.duration }}</template>
    <template #description>{{ assignment.description }}</template>
  </AssignmentItem>
</template>
