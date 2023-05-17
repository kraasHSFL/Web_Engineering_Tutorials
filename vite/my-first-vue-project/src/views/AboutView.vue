<script setup>
  import { useFlash } from "@/composables/useFlash";

  let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('Yay!', 'It Works On the About-Page!', 'info')">Click Me</button>
    </p>
  </div>
</template>

