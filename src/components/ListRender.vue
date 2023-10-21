<template>
  <div class="list-container">
    <h2>List of Items</h2>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="list-item">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Item {
  id: number;
  name: string;
}
const items = ref<Item[]>([]);
onMounted(() => {
  const savedItems = localStorage.getItem('items');
  if (savedItems) {
    items.value = JSON.parse(savedItems);
  }
});
</script>

<style scoped>
@import './ListRender.css';
</style>
