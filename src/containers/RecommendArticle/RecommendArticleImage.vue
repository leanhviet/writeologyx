<template>
  <a class="recommend-article__link" href="">
    <div class="recommend-article__image">
      <div class="bg-overlay"></div>
      <img :src="IMG_RECOMMEND" alt="image-recommend" />
      <div class="recommend-article__des">
        <div class="recommend-article__des-tip">Tips</div>
        <div class="recommend-article__des-title">
          5 ways to improve your digital project management
        </div>
        <div class="recommend-article__des-info">
          <div class="recommend-article__des-author">
            <img :src="AUTHOR_IMG" alt="author" />
            John Carter
          </div>
          <div class="recommend-article__des-time">
            <font-icon name="mdi-clock-outline" size="24" />
            June 16, 2022
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IMG_RECOMMEND, AUTHOR_IMG } from '@/configs/constants';

export default defineComponent({
  name: 'RecommendArticleImage',
  components: {},
  setup() {
    return { IMG_RECOMMEND, AUTHOR_IMG };
  },
});
</script>

<style lang="scss" scoped>
@import './RecommendArticleImage.scss';
</style>
