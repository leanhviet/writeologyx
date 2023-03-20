<template>
  <div class="search-article">
    <a class="search-article__logo" href=""><img :src="IMG_URL" /></a>
    <p class="search-article__subtitle">
      Tellus id nisl blandit vitae quam magna nisl aliquet aliquam arcu
      ultricies commodo felisoler massa ipsum erat non sit amet.
    </p>
    <v-text-field
      label="Search articles"
      append-inner-icon="mdi-magnify"
      hide-details
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IMG_URL } from '@/configs/constants';

export default defineComponent({
  name: 'SearchArticle',
  components: {},
  setup() {
    return { IMG_URL };
  },
});
</script>

<style lang="scss" scoped>
@import './SearchArticle.scss';
</style>
