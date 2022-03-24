<script lang="ts" setup>
import { defineProps } from 'vue';
import { StateTask } from '@/store/task';

defineProps<{task: StateTask}>();
</script>

<template>
  <div>
    <h2 class="text-lg">
      {{ task.activity }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
h2::after {
  content: "😅";
  margin-left: 0.5rem;
}
</style>
