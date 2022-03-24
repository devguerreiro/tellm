<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{title: string}>();
</script>

<template>
  <div class="flex mx-2">
    <i
      :title="title"
      class="w-5 h-5 mr-1 text-yellow-500"
    >
      <slot
        name="icon"
      />
    </i>
    <span class="text-yellow-800">
      <slot />
    </span>
  </div>
</template>
