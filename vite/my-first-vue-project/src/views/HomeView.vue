<script setup>
import TheWelcome from '../components/TheWelcome.vue'

  let message = $ref('Hello, World!');

  let doSomething = () => {
    alert("doing it now");
  };

</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>
    <button @click="doSomething">Do Something</button>
  </main>
</template>
