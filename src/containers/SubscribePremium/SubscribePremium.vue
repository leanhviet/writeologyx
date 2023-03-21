<template>
  <div class="subscribe-premium">
    <v-container>
      <div
        class="subscribe-premium__wrapper"
        data-aos="fade-up"
        data-aos-offset="0"
      >
        <div
          class="subscribe-premium__title"
          data-aos="fade-up"
          data-aos-offset="0"
        >
          Subscribe to unlock premium content
        </div>
        <div
          class="subscribe-premium__subtitle"
          data-aos="fade-up"
          data-aos-offset="0"
        >
          Sed at tellus, pharetra lacus, aenean risus non nisl ultricies commodo
          diam aliquet arcu enim eu leo porttitor habitasse adipiscing porttitor
          varius ultricies facilisis viverra lacus neque.
        </div>
        <div
          class="subscribe-premium__article"
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <v-row>
            <v-col v-for="article in articles" :key="article.id" cols="4">
              <div class="subscribe-premium__article-item">
                <img :src="article.image" :alt="article.title" />
                <div class="subscribe-premium__article-content">
                  <div class="subscribe-premium__article-category">
                    {{ article.category }}
                  </div>
                  <div class="subscribe-premium__article-title">
                    {{ article.title }}
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <div class="subscribe-premium__article-overlay">
            <div class="hover-animation">
              <div class="subscribe-premium__article-unlock" @click="onUnlock">
                <img src="@/assets/icons/lock.svg" height="17" />
                <span>Unlock content</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

// Mock data
import SubscribeArticleData from '@/mocks/subscribe-premium';

type ArticleSubscribe = {
  id: string;
  title: string;
  image: string;
  category: string;
};

export default defineComponent({
  name: 'SubscribePremium',
  components: {},
  setup() {
    const articles = computed<ArticleSubscribe[]>(() => SubscribeArticleData);
    const onUnlock = (): void => {
      // TODO: Handle unlock
    };

    return { articles, onUnlock };
  },
});
</script>

<style lang="scss" scoped>
@import './SubscribePremium.scss';
</style>
