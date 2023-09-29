<script setup>
import Highlighter from 'vue-highlight-words'

const props = defineProps({
  searchText: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <Highlighter
    highlightClassName="highlight"
    :searchWords="[props.searchText]"
    :autoEscape="true"
    :textToHighlight="props.content"/>
</template>
