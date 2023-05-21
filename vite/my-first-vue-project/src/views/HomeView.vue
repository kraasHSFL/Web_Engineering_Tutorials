<script setup>
import { useStorage } from "@/composables/useStorage";
import TabableTexarea from "../components/TabableTexarea.vue";
import TestComponent from "../components/TestComponent.vue";
import { ref } from 'vue';

  let food = useStorage('food', 'pizza');
  let age = useStorage('age', 25);

  let comment = ref('test value');

  setTimeout(() => {
    comment.value = 'it works!';
  }, 2000)

</script>

<template>
  <main>
    <p>
      Was ist dein Lieblingsessen? <input type="text" v-model="food">
    </p>
    <p>
      Wie alt bist du? <input type="text" v-model="age">
    </p>
    <form action="">
      <TabableTexarea v-model="comment" style="width: 100%; height: 300px;"></TabableTexarea>
    </form>
    <TestComponent/>
  </main>
</template>
 