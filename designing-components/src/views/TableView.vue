<script setup>
import Table from '@/examples/1-table/Table.vue';

const items = [
  {name: "Onions", quantity: 2},
  {name: "Lettuce", quantity: 1},
  {name: "Jalapenos", quantity: 4},
]
</script>

<template>
  <Table :data="items"/>
</template>