<template>
  <div class="latest-articles">
    <h2 class="latest-articles__title mb-6">Latest articles</h2>
    <div class="latest-articles__list">
      <ArticleItem
        v-for="article in articles"
        :key="article.id"
        :item="article"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ArticleItem from './ArticleItem.vue';
import LatestArticlesData from '@/mocks/latest-articles';

type LatestArticles = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  linkImagePost: string;
  createdAt: string;
};

export default defineComponent({
  name: 'LatestArticles',
  components: { ArticleItem },
  setup() {
    const articles = computed<LatestArticles[]>(() => LatestArticlesData);

    return { articles };
  },
});
</script>

<style lang="scss" scoped>
@import './LatestArticles.scss';
</style>
