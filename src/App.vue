<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineComponent({
  name: 'App',
  setup() {},
});

AOS.init();
</script>

<style lang="scss">
@import './styles/scss/reset.scss';
* {
  font-family: 'Manrope', sans-serif;
}
</style>
