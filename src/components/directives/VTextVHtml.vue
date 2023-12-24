<template>
  <!-- v-text -->
  <h1>v-text</h1>
  <hr />
  <!-- <div v-text="html"></div> -->
  <div v-text="plain"></div>
  <!-- same as -->
  <!-- <p>{{ plain }}</p> -->
  <hr />

  <!-- v-html (render HTML)-->
  <h1>v-html</h1>
  <hr />
  <div v-html="html"></div>
</template>

<script setup>
const plain = "lorem lorem lorem lorem lorem lorem lorem lorem";
const html =
  "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sed expedita ad labore minima eum possimus, nam et rerum excepturi!</p>";
</script>
