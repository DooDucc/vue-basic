<template>
  <!-- v-show (work like display property in CSS) -->
  <h1>v-show</h1>
  <hr />
  <div v-show="showEl">
    <h1>v-show element</h1>
  </div>
  <hr />

  <!-- v-if, v-else-if, v-else -->
  <h1>v-if, v-else-if, v-else</h1>
  <hr />
  <div v-if="showEl">
    <h1>v-if element</h1>
  </div>
  <div v-else>
    <h1>v-else element</h1>
  </div>
  <hr />
</template>

<script setup>
const showEl = true;
</script>
