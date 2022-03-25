<script lang="ts" setup>
import { SearchIcon } from '@heroicons/vue/solid';

</script>

<template>
  <SearchIcon
    class="w-10 h-10 text-yellow-600 search"
  />
</template>

<style lang="scss">
.search {
  animation-name: searching;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes searching {
  0% {
    transform: translate(-2px, 2px);
  }
  25% {
    transform: translate(-2px, -2px);
  }
  50% {
    transform: translate(2px, -2px);
  }
  75% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(-2px, 2px);
  }
}
</style>
