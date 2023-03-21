<template>
  <div class="category-article mb-16">
    <div class="category-article__list">
      <v-btn
        class="category-article__item"
        v-for="category in categories"
        :key="category.id"
        :loading="isLoading"
        :disabled="isDisabled || isLoading"
        color="#f0f0f0"
      >
        {{ category.name }}
      </v-btn>
    </div>
    <div class="category-article__post">
      <div class="category-article__card">
        <img src="/src/assets/images/article-01.jpeg" cover />
        <div class="category-article__card-content">
          <p class="sub-title mb-4">{{ newPost.category }}</p>
          <p class="title">{{ newPost.title }}</p>
        </div>
        <div class="overlay"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

// Mock data
import CategoryData from '@/mocks/categories';

type Category = {
  id: string;
  name: string;
};

type CategoryArticle = {
  id: string;
  category: string;
  title: string;
  linkImagePost: string;
};

export default defineComponent({
  name: 'CategoryArticle',
  components: {},
  setup() {
    const isDisabled = ref<boolean>(false);
    const isLoading = ref<boolean>(false);

    const categories = computed<Category[]>(() => CategoryData);

    const newPost = computed<CategoryArticle>(() => ({
      id: '1',
      category: 'resource',
      title: 'How to choose the best management software',
      linkImagePost: '/src/assets/images/article-01.jpeg',
    }));

    return { isDisabled, isLoading, categories, newPost };
  },
});
</script>

<style lang="scss" scoped>
@import './CategoryArticles.scss';
</style>
