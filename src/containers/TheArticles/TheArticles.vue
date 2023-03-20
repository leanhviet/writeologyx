<template>
  <div class="the-articles container-default" data-aos="fade-zoom-in" data-aos-offset="0">
    <v-container class="pa-0">
      <v-row justify="space-between" class="the-articles__row">
        <v-col cols="8" class="pa-0 pr-10 the-articles__row__col articles-left">
          <LatestArticles />
        </v-col>
        <v-col cols="4" class="pa-0 pl-10 the-articles__row__col articles-right">
          <SearchArticle />
          <v-divider class="mt-14 mb-14" />
          <CategoryArticles />
          <PopularArticles />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategoryArticles from '../CategoryArticles/CategoryArticles.vue';
import LatestArticles from '../LatestArticles/LatestArticles.vue';
import PopularArticles from '../PopularArticles/PopularArticles.vue';
import SearchArticle from '../SearchArticle/SearchArticle.vue';

export default defineComponent({
  name: 'TheArticles',
  components: {
    LatestArticles,
    PopularArticles,
    SearchArticle,
    CategoryArticles,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
  @import './TheArticles.scss';
</style>
