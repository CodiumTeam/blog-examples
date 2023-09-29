<script setup>
import {ref} from 'vue';

const visible = ref(true);
</script>

<template>
  <div class="alert" v-if="visible">
    <slot/>
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
.alert h1,
.alert h2,
.alert h3,
.alert p {
  margin: 4px;
}
</style>