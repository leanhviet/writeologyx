<template>
  <div class="article-item">
    <div class="article-item__image">
      <img :src="props.item.linkImagePost" />
    </div>
    <div class="article-item__content">
      <div class="article-item__content-category mb-4">
        {{ props.item.category }}
      </div>
      <div class="article-item__content-title mb-2">
        {{ props.item.title }}
      </div>
      <div class="article-item__content-subtitle mb-5">
        {{ props.item.subtitle }}
      </div>
      <div class="article-item__content-author">
        <div class="article-item__author">
          <v-avatar size="small" class="mr-2">
            <v-img :src="props.item.author.image" />
          </v-avatar>
          {{ props.item.author.name }}
        </div>
        <div class="article-item__author">
          <font-icon
            class="article-item__date-icon mr-2"
            size="30"
            name="mdi-clock-outline"
          />
          {{ props.item.createdAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

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
  name: 'ArticleItem',
  components: {},
  props: {
    item: {
      type: Object as PropType<LatestArticles>,
      required: true,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './ArticleItem.scss';
</style>
