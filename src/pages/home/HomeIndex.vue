<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
import AppButton from '@/components/AppButton.vue';
import AppTask from '@/components/AppTask.vue';

import useTaskStore from '@/store/task';
import { computed } from 'vue';

const store = useTaskStore();
const hasTask = computed(() => Object.keys(store.task).length);
</script>

<template>
  <div class="container mx-auto">
    <header>
      <AppTitle class="mx-auto md:w-1/2 lg:w-1/3 2xl:w-1/4">
        Tell me. What <strong>should</strong> I do? 🤔
      </AppTitle>
    </header>
    <main class="mt-6">
      <section>
        <AppButton @click="store.getTask">
          Give me a task <span class="ml-2">🎁</span>
        </AppButton>
        <AppTask
          v-if="hasTask"
          class="w-2/3 mx-auto mt-6 md:w-1/2 lg:w-1/4"
        />
      </section>
    </main>
    <footer class="mt-4">
      <div class="text-xs">
        <span>
          data from <strong>boredapi.com</strong>
        </span>
      </div>
    </footer>
  </div>
</template>
