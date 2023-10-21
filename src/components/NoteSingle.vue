<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/mn';
dayjs.locale('mn');
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
defineProps({
  note: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div
    class="bg-note group relative flex flex-col space-y-4 overflow-hidden rounded-md p-2 drop-shadow-md duration-300 md:space-y-8 md:p-4"
    :style="{ backgroundColor: note.color }"
  >
    <div class="flex flex-col space-y-2 md:space-y-4">
      <h3 class="text-lg font-bold">{{ note.title }}</h3>
      <p>{{ note.desc }}</p>
    </div>
    <p class="text-sm text-gray-400 md:text-base">
      {{ dayjs(note.time).fromNow() }}
    </p>
    <button
      @click="$emit('remove', note.id)"
      class="absolute bottom-0 left-0 right-0 hidden bg-red-500 hover:bg-red-600 p-2 text-white group-hover:inline-block"
    >
      Устгах
    </button>
  </div>
</template>

<style scoped>
.bg-note {
  background-color: v-bind(note.color);
}
</style>
