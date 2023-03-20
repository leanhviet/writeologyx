<template>
  <div class="container-default">
    <v-container class="pa-0">
      <div
        class="footer flex-column"
        data-aos="fade-zoom-in"
        data-aos-duration="3000"
        data-aos-offset="0"
      >
        <div class="footer__top flex-column">
          <h2 class="footer__top-title mb-4">Subscribe to our newsletter</h2>
          <span class="footer__top-subtitle mb-9"
            >Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus
            amet dui quam vitae quis leo velit aliquam.</span
          >
          <div class="footer__top-email mb-10">
            <v-text-field label="Enter your email address" hide-details />
            <v-btn>Subscribe</v-btn>
          </div>
          <div class="footer__top-icons">
            <a
              v-for="icon in icons"
              :key="icon.id"
              class="footer__top-icon"
              :href="icon.target"
              target="_blank"
            >
              <img :src="`/src/assets/icons/${icon.icon}`" height="18" />
            </a>
          </div>
        </div>
        <div class="footer__bottom pt-8 pb-8">
          <p>
            Copyright © Writeology X | Designed by
            <a href="https://brixtemplates.com/">BRIX Templates</a> - Powered by
            <a href="https://webflow.com/">Webflow</a>
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import iconsSocial from '@/mocks/icons-social';

type IconSocial = {
  id: string;
  icon: string;
  target: string;
};

export default defineComponent({
  name: 'TheFooter',
  setup() {
    const newIcons = [
      ...iconsSocial,
      {
        id: '5',
        icon: 'youtube.svg',
        target: 'https://www.youtube.com/',
      },
    ];
    console.log({newIcons})
    const icons = computed<IconSocial[]>(() => newIcons);

    return { icons };
  },
});
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
