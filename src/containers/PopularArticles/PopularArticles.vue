<template>
  <div class="popular-articles" data-aos="fade-zoom-in" data-aos-offset="0">
    <div class="popular-articles__title">Popular Articles</div>
    <div class="popular-articles__list">
      <div
        v-for="article in articles"
        :key="article.id"
        class="popular-articles__item"
      >
        <div class="popular-articles__item-image">
          <img :src="article.image" :alt="article.title" />
        </div>
        <div class="popular-articles__item-title">{{ article.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import PopularArticlesData from '@/mocks/popular-articles';

type PopularArticle = {
  id: string;
  title: string;
  image: string;
};

export default defineComponent({
  name: 'PopularArticles',
  components: {},
  setup() {
    const articles = computed<PopularArticle[]>(() => PopularArticlesData);
    return { articles };
  },
});
</script>

<style lang="scss" scoped>
@import './PopularArticles.scss';
</style>
