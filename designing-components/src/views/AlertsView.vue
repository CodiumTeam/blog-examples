<script setup>
import Alert from '@/examples/0a-alert/Alert.vue';
import SimpleAlert from '@/examples/0b-alert/Alert.vue';
</script>

<template>
  <div style="max-width: 400px">
    <alert title="Wow" description="this is so simple, but so restricted"/>

    <simple-alert>
      <h3>Awesome!</h3>
      <p>Now I have such <strong>freedom</strong>, and it's easy to use too</p>
    </simple-alert>
  </div>
</template>
