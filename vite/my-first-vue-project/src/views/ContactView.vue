<script setup>
import { counter } from '../stores/counterStore';

</script>

<template>
  <div class="contact">
    <h1>This is the contact page</h1>
    <p>Der Zähler liegt bei: {{ counter.count }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
