<script lang="ts" setup>
import { CashIcon, UserGroupIcon, EmojiHappyIcon } from '@heroicons/vue/solid';
import { computed } from 'vue';
import useTaskStore from '@/store/task';
import AppTaskType from './AppTaskType.vue';
import AppTaskStats from './AppTaskStats.vue';
import AppTaskTitle from './AppTaskTitle.vue';

const store = useTaskStore();
const task = computed(() => store.task);
const accessibility = computed(() => ((1 - Number(store.task.accessibility)) * 100).toFixed(2));

</script>

<template>
  <div class="relative px-2 pt-6 pb-2 bg-yellow-200 border shadow-xl rounded-xl">
    <AppTaskType>
      {{ task.type }}
    </AppTaskType>
    <AppTaskTitle
      :task="task"
      class="text-yellow-800"
    />
    <div class="flex justify-end mt-4">
      <AppTaskStats
        title="Participants"
        class="participants"
      >
        <template #icon>
          <UserGroupIcon />
        </template>
        {{ task.participants }}
      </AppTaskStats>
      <AppTaskStats
        title="Price"
        class="price"
      >
        <template #icon>
          <CashIcon />
        </template>
        {{ task.price }}
      </AppTaskStats>
      <AppTaskStats
        title="Accessibility"
        class="accessibility"
      >
        <template #icon>
          <EmojiHappyIcon />
        </template>
        {{ accessibility }}
      </AppTaskStats>
    </div>
  </div>
</template>

<style lang="scss">
.participants span::after {
  content: "+"
}
.price span::before {
  content: "$"
}
.accessibility span::after {
  content: "%"
}
</style>
