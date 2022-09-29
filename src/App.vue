<script setup lang="ts">
import AuthenticationGridLeft from './components/AuthenticationGridLeft.vue'
import AuthenticationGridRight from './components/AuthenticationGridRight.vue'
</script>

<template>
  <main>
    <div class="h-screen md:h-full grid grid-cols-2 md:grid-cols-1 md:grid-rows-[auto_1fr]">
      <AuthenticationGridLeft />
      <AuthenticationGridRight />
    </div>
  </main>
</template>
