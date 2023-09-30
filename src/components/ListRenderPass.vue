<template>
  <div class="list-container">
    <h2>List of Items</h2>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="list-item">
        <span>
          {{ item.name }}
        </span>
        <button @click="removeItem(item.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  items: { id: number; name: string }[]
  onRemove: Function
}>()

const removeItem = (itemId: number) => {
  props.onRemove(itemId)
}
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
  position: relative;
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 16px;
}

.list-item > span {
  display: block;
  margin-right: 3rem;
}

button {
  position: absolute;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  right: 3px;
  top: 3px;
}

button:hover {
  background-color: #0056b3;
}
</style>
