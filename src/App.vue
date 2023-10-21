<script setup lang="ts">
import NoteAdd from './components/NoteAdd.vue';
import NoteList from './components/NoteList.vue';
</script>

<template>
  <header
    class="py-2 text-center text-xl font-bold text-white sm:text-2xl md:py-4 md:text-3xl lg:text-4xl"
  >
    Vue Note Ap
  </header>
  <main
    class="mb-4 flex flex-col space-y-2 sm:mb-6 md:mb-8 md:space-y-4 lg:mb-10"
  >
    <NoteAdd />
    <NoteList />
  </main>
</template>

<style scoped></style>
