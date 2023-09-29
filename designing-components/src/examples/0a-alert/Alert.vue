<script setup>
import {ref} from 'vue';

const props = defineProps({
    'title': {
      type: String,
      required: true,
    },
    'description': {
      type: String,
      required: true,
    },
});

const visible = ref(true);
</script>

<template>
  <div class="alert" v-if="visible">
    <span class="alert__title">{{ props.title }}</span>
    <span class="alert__description">{{ props.description }}</span>
    <span class="alert__dismiss" @click="visible=false">X</span>
  </div>
</template>

<style>
.alert {
  border: 1px solid silver;
  padding: 10px;
  position: relative;
  margin: 20px 0;
}
.alert__dismiss {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
}
.alert__title {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}
.alert__description {
  display: block;
}
</style>