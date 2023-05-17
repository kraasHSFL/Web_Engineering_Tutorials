<script setup>
import { useStorage } from "@/composables/useStorage"

  let food = useStorage('food', 'pizza');
  let age = useStorage('age', 25);

</script>

<template>
  <main>
    <p>
      Was ist dein Lieblingsessen? <input type="text" v-model="food">
    </p>
    <p>
      Wie alt bist du? <input type="text" v-model="age">
    </p>
  </main>
</template>
 