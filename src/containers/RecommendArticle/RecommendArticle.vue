<template>
  <div
    class="recommend-article container-default"
    data-aos="fade-zoom-in"
    data-aos-offset="0"
  >
    <v-container class="pa-0">
      <v-row align="center" class="recommend-article__row">
        <v-col cols="8">
          <RecommendArticleImage />
        </v-col>
        <v-col cols="4">
          <div class="recommend-article__relation">
            <div
              v-for="article in articles"
              :key="article.id"
              class="recommend-article__relation-item"
            >
              <div class="recommend-article__relation-category">
                {{ article.category }}
              </div>
              <div class="recommend-article__relation-title">
                {{ article.title }}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

// Components
import RecommendArticleImage from './RecommendArticleImage.vue';

// Mock data
import RecommendArticleData from '@/mocks/recommend-article';

type ArticleRelation = {
  id: string;
  title: string;
  link: string;
  category: string;
};

export default defineComponent({
  name: 'RecommendArticle',
  components: { RecommendArticleImage },
  setup() {
    const articles = computed<ArticleRelation[]>(() => RecommendArticleData);
    return { articles };
  },
});
</script>

<style lang="scss" scoped>
@import './RecommendArticle.scss';
</style>
