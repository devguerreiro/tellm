<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
import AppButton from '@/components/AppButton.vue';
import AppTask from '@/components/AppTask.vue';
import AppSearching from '@/components/AppSearching.vue';

import useTaskStore from '@/store/task';
import { computed, ref } from 'vue';

const loading = ref(false);
const store = useTaskStore();
const hasTask = computed(() => Object.keys(store.task).length);

async function handleGetTask(): Promise<void> {
  try {
    loading.value = true;
    await store.getTask();
    loading.value = false;
  } catch (e) {
    console.error(e);
  }
}
</script>

<template>
  <div class="container mx-auto">
    <header>
      <AppTitle class="mx-auto md:w-1/2 lg:w-1/3 2xl:w-1/4 font-primary">
        Tell me. What <strong>should</strong> I do? 🤔
      </AppTitle>
    </header>
    <main class="mt-6">
      <section class="mx-auto">
        <AppButton @click="handleGetTask">
          Give me an idea <span class="ml-2">🎁</span>
        </AppButton>
        <AppSearching
          v-if="loading"
          class="mx-auto mt-4"
        />
        <AppTask
          v-else-if="!loading && hasTask"
          class="w-2/3 mx-auto mt-6 md:w-1/2 lg:w-1/4"
        />
      </section>
    </main>
    <footer class="mt-4">
      <div class="text-sm font-third">
        <span>
          data from <strong>boredapi.com</strong>
        </span>
      </div>
    </footer>
  </div>
</template>
