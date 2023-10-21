<script setup lang="ts">
import { computed, reactive } from 'vue';
import InputColor from './InputColor.vue';
import { useNoteStore } from '@/stores/note';
const store = useNoteStore();

const colors = computed(() => store.colors);

const note = reactive({
  title: '',
  desc: '',
  color: ''
});

const addNote = function () {
  if (!note.title) {
    alert('Гарчигаа оруулна уу!');
    return;
  }
  if (!note.desc) {
    alert('Тэмдэглэл оруулна уу!');
    return;
  }
  if (!note.color) {
    alert('Өнгөө сонгоно уу!');
    return;
  }
  const newNote: NoteI = {
    ...note,
    id: Date.now(),
    time: new Date()
  };

  store.addNote(newNote);
  alert('Амжилттай.');
  note.title = '';
  note.desc = '';
};
</script>
<template>
  <div class="form-container">
    <form @submit.prevent="addNote">
      <input
        type="text"
        class="form-control"
        placeholder="Гарчиг"
        v-model="note.title"
      />
      <textarea
        class="form-control"
        placeholder="Тэмдэглэл"
        spellcheck="false"
        v-model="note.desc"
      />
      <div class="flex px-1">
        <input-color
          class="-mx-1"
          v-model="note.color"
          :color="color"
          v-for="color in colors"
          :key="color"
        />
      </div>
      <button type="submit">Тэмдэглэл нэмэх</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  @apply mx-auto flex max-w-[80%] flex-col space-y-4 rounded-md bg-white p-2 drop-shadow-md md:max-w-[60%] md:space-y-8 md:p-4;
}

form {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>
