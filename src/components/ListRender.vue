<template>
  <div class="list-container">
    <h2>List of Items</h2>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="list-item">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// const Allitems = ref([
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
//   { id: 3, name: 'Item 3' }
// ])

interface Item {
  id: number
  name: string
}
const items = ref<Item[]>([])
onMounted(() => {
  const savedItems = localStorage.getItem('items')
  if (savedItems) {
    items.value = JSON.parse(savedItems)
  }
})
</script>

<style scoped>
.list-container {
  max-width: 400px;
  margin: 1rem auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.item-list {
  list-style: none;
  padding: 0;
}

.list-item {
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 16px;
}
</style>
