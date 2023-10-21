<script setup lang="ts">
import { computed, onMounted } from 'vue';

import NoteSingle from './NoteSingle.vue';
import NoteFilter from './NoteFilter.vue';
import { useNoteStore } from '@/stores/note';

const store = useNoteStore();

onMounted(() => {
  store.initializeFromLocalStorage();
});
const notes = computed(() => store.filteredNotes);

function removeNote(id: string) {
  if (confirm('Уг тэмдэглэлийг устгах уу?')) {
    store.removeNote(id);
  }
}
</script>
<template>
  <div class="">
    <note-filter />
    <div
      v-if="notes.length"
      class="m-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:m-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
    >
      <note-single
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @remove="removeNote"
      />
    </div>
    <div
      class="my-4 mx-auto flex max-w-[80%] flex-col space-y-4 rounded-md bg-white p-2 md:max-w-[60%] md:space-y-8 md:p-4"
      v-else
    >
      <p class="text-center text-gray-500">Хараахан тэмдэглэл алга.</p>
    </div>
  </div>
</template>
<style scoped></style>
