<template>
  <HomeContainer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeContainer from '@/containers/HomeContainer.vue';

export default defineComponent({
  name: 'HomeView',
  components: { HomeContainer },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
