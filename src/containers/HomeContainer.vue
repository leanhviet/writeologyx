<template>
  <MasterLayout>
    <RecommendArticle />
    <TheArticles />
    <SubscribePremium />
  </MasterLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MasterLayout from '@/layouts/MasterLayout.vue';
import RecommendArticle from './RecommendArticle/RecommendArticle.vue';
import TheArticles from './TheArticles/TheArticles.vue';
import SubscribePremium from './SubscribePremium/SubscribePremium.vue';

export default defineComponent({
  name: 'HomeContainer',
  components: { MasterLayout, RecommendArticle, TheArticles, SubscribePremium },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
