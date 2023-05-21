<template>
   <div>
      <button @click="changeName">
         {{ name }}
      </button>
   </div>
</template>

<script setup>
   import { inject } from 'vue';

   let {name, changeName} = inject('name')
</script>