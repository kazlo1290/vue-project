<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  startCount: number;
}>();

const count = ref(props.startCount);

const incrementCount = () => {
  count.value++;
};

const decrementCount = () => {
  count.value--;
};
</script>

<template>
  <div class="countdown">
    <div class="counts">
      <h1>{{ props.startCount }}</h1>
      <p>-</p>
      <h1>{{ count }}</h1>
    </div>
    <div class="btns">
      <button @click="incrementCount">Increment count</button>
      <button @click="decrementCount">Decrement count</button>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  margin-top: 20px;
}

.counts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
}

.btns {
  display: flex;
  gap: 1rem;
}

button {
  font-size: 24px;
  padding: 10px 20px;
}
</style>
