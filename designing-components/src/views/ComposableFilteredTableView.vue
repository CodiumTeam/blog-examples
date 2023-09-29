<script setup>
import Table from '@/examples/2b-composable-filtered-table/Table.vue';
import {useFilteredTable} from '@/examples/2b-composable-filtered-table/useFilteredTable.js';

const items = [
  {name: "Onions", quantity: 2},
  {name: "Lettuce", quantity: 1},
  {name: "Jalapenos", quantity: 4},
]

const {filteredData, setFilter} = useFilteredTable(items);
</script>

<template>
  <input @input="setFilter($event.target.value)" type="text"/>
  <Table :data="filteredData"/>
</template>