<script setup>
import { counter } from "@/stores/counterStore.js"
</script>

<template>
  <div>
    <p>
      <h1>{{ counter.count }}</h1>

      <button @click="counter.increment()">Increment</button>
    </p>
  </div>
</template>

<style>

</style>
