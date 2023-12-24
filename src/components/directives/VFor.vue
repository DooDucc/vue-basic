<template>
  <!-- v-for (array)-->
  <h1>v-for</h1>
  <hr />
  <h2>array</h2>
  <div v-for="(item, index) in arr" :key="item.id">
    <p>
      {{ item.title }}
    </p>
  </div>
  <hr />

  <!-- v-for (obj)-->
  <h2>obj</h2>
  <div v-for="(value, key, index) in obj" :key="`number-${index}`">
    <p>Key: {{ key }}</p>
    <p>Value: {{ value }}</p>
  </div>
  <hr />

  <!-- v-for (ranges)-->
  <h2>ranges</h2>
  <div v-for="n in 10" :key="n">
    <p>Number: {{ n }}</p>
  </div>
  <hr />
</template>

<script setup>
const arr = [
  { id: 1, title: "Title 1" },
  { id: 2, title: "Title 2" },
  { id: 3, title: "Title 3" },
];

const obj = {
  name: "Duc",
  age: 21,
};
</script>
