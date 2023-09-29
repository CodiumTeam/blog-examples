<script setup>
import Table from '@/examples/2a-filtered-table/Table.vue';
import {ref} from 'vue';

const items = [
  {name: "Onions", quantity: 2},
  {name: "Lettuce", quantity: 1},
  {name: "Jalapenos", quantity: 4},
]

const search = ref('');
</script>

<template>
  <input @input="search = $event.target.value" type="text"/>
  <Table :data="items" :search="search"/>
</template>