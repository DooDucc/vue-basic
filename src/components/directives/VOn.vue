<template>
  <!-- v-on (handle event in element) -->
  <h1>v-on</h1>
  <hr />
  <h1>{{ count }}</h1>
  <button @click="handleClickEvent" @mouseenter="console.log('Hovered')">
    Click me
  </button>
  <!-- Another way to write multi events in element -->
  <!-- <button
    v-on="{ click: handleClickEvent, mouseenter: () => console.log('Hovered') }"
  >
    Click me
  </button> -->

  <!-- Event modifiers -->
  <!-- <button @click.prevent="handleClickEvent">Click me</button> -->
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const handleClickEvent = () => {
  count.value++;
};
</script>
