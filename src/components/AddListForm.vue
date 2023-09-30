<template>
  <div class="form-container">
    <h2>Add Item</h2>
    <form @submit.prevent="addItem">
      <input v-model="newItem" type="text" placeholder="Enter item name" />
      <button type="submit">Add</button>
    </form>

    <ListRenderPass :items="items" :onRemove="removeItem" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ListRenderPass from './ListRenderPass.vue'

interface Item {
  id: number
  name: string
}
const newItem = ref('')
const items = ref<Item[]>([])

const addItem = () => {
  if (newItem.value.trim() !== '') {
    const newItemObj: Item = { id: Date.now(), name: newItem.value }
    items.value.push(newItemObj)
    saveItemsToLocalStorage()
    newItem.value = ''
  }
}

const removeItem = (itemId: number) => {
  items.value = items.value.filter((item) => item.id !== itemId)
  saveItemsToLocalStorage()
}

const saveItemsToLocalStorage = () => {
  localStorage.setItem('items', JSON.stringify(items.value))
}

onMounted(() => {
  const savedItems = localStorage.getItem('items')
  if (savedItems) {
    items.value = JSON.parse(savedItems)
  }
})
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

form {
  display: flex;
  gap: 10px;
}

input[type='text'] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
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
