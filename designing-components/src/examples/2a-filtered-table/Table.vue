<script setup>
import Highlight from '@/components/Highlight.vue';
import {computed} from 'vue';

const props = defineProps({
  data: { type: Array, required: true },
  search: { type: [String, undefined], default: undefined }
})

function containsSearch(item) {
  return Object.values(item).some((value) => {
    return value.toString().toLowerCase().includes(props.search.toLowerCase());
  });
}

const filteredData = computed(() => props.data.filter(containsSearch));
</script>

<template>
  <table v-if="filteredData.length">
    <tr v-for="item in filteredData" :key="item">
      <td v-for="value in Object.values(item)" :key="value">
        <Highlight :content="value.toString()" :search-text="props.search"/>
      </td>
    </tr>
  </table>
</template>
