<script setup>
import {isVNode} from 'vue';

const props = defineProps({
  data: {type: Array, required: true},
})
</script>

<template>
  <table v-if="props.data.length">
    <tr v-for="item in props.data" :key="item">
      <td v-for="value in Object.values(item)" :key="value">
        <component v-if="isVNode(value)" :is="value"></component>
        <template v-else>
          {{ value }}
        </template>
      </td>
    </tr>
  </table>
</template>
